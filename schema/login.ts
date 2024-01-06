import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().nonempty("Senha é obrigatório"),
});

export type LoginForm = z.infer<typeof LoginSchema>;
