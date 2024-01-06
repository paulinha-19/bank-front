import { isValidCNPJ } from "./format-cnpj";
import { isValidCPF } from "./format-cpf";

export const handleErrorToastSignUp = (
  userType: string,
  cpf: string | null,
  cnpj: string | null,
  showToast: (title: string, status: "success" | "error") => void
) => {
  if (userType === "cpf" && cpf && !isValidCPF(cpf)) {
    showToast("CPF inválido. Verifique a formatação.", "error");
    return false;
  } else if (userType === "cnpj" && cnpj && !isValidCNPJ(cnpj)) {
    showToast("CNPJ inválido. Verifique o padrão.", "error");
    return false;
  }
  return true;
};
