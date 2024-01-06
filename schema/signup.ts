
import z from "zod";

export const SignupSchema = (userType: string) => {
  return z
    .object({
      email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
      password: z.string().nonempty("Senha é obrigatório"),
      cpf: z.string().nullable().refine(
        (value) => {
          return userType === "cpf" ? !!value : true;
        },
        {
          message: "Insira o CPF",
        }
      ),
      cnpj: z.string().nullable().refine(
        (value) => {
          return userType === "cnpj" ? !!value : true;
        },
        {
          message: "Insira o CNPJ",
        }
      ),
    })
    .refine(
      (data) => {
        return (
          (!!data.cpf && userType === "cpf") ||
          (!!data.cnpj && userType === "cnpj")
        );
      },
      {
        message: `Informe ${userType === "cpf" ? "CPF" : "CNPJ"}`,
      }
    );
};

export type SignupForm = z.infer<ReturnType<typeof SignupSchema>>;

