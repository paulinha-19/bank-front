
import z from "zod";

export const SignupCpfchema = (userType: string) => {
  return z
    .object({
      email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
      password: z.string().nonempty("Senha é obrigatório"),
      cpf: z.string().refine(
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
          (!!data.cpf && userType === "cpf")
        );
      },
      {
        message: `Informe ${userType === "cpf" ? "CPF" : "CNPJ"}`,
      }
    );
};

export type SignupCpfForm = z.infer<ReturnType<typeof SignupCpfchema>>;


