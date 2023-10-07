
import z from "zod";

export const SignupCnpjSchema = (userType: string) => {
  return z
    .object({
      email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
      password: z.string().nonempty("Senha é obrigatório"),
      cnpj: z.string().refine(
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
          (!!data.cnpj && userType === "cnpj")
        );
      },
      {
        message: `Informe ${userType === "cpf" ? "CPF" : "CNPJ"}`,
      }
    );
};

export type SignupCnpjForm = z.infer<ReturnType<typeof SignupCnpjSchema>>;


