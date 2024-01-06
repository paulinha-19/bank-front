import { useToast, UseToastOptions } from "@chakra-ui/react";

export const ShowToast = ({ title='', status='error' }: UseToastOptions) => {
  const toast = useToast();
  return toast({
    title,
    status,
    duration: 5000,
    isClosable: true,
    position: "top-left",
  });
};
