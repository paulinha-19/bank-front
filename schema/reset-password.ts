import z from "zod";

export const ResetPasswordSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
});

export type ResetPasswordForm = z.infer<typeof ResetPasswordSchema>;
