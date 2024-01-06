export const isValidCPF = (value: string) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  return regex.test(value);
};
