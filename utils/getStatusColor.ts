export const getStatusColor = (status: string) => {
  switch (status) {
    case "enviado":
      return "green";
    case "cancelada":
      return "red";
    case "cancelado":
      return "red";
    case "depositar":
      return "yellow";
    case "disponível":
      return "blue";
    case "valor pago":
      return "green";
    case "pendente":
      return "gray";
    case "processando":
      return "orange";
    case "aprovado":
      return "green";
    case "recusado":
      return "red";
    default:
      return "gray";
  }
};
