import React from "react";
import { Box, Heading, Button, useToast, Text } from "@chakra-ui/react";
import { Form } from "..";
import {
  ResetPasswordForm,
  ResetPasswordSchema,
} from "@/schema/reset-password";
import { useForms } from "@/hook/useForms";
import { useRouter } from "next/navigation";

interface ResetPasswordProps {
  changeView: (view: string) => void;
}

export const ResetPassword = ({ changeView }: ResetPasswordProps) => {
  const toast = useToast();
  const router = useRouter();

  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<ResetPasswordForm>({
      schema: ResetPasswordSchema,
      defaultValues: {},
    });
  const handleResetPassword = async (data: ResetPasswordForm) => {
    try {
      console.log(data);
      changeView("logIn");
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro de validação",
        // description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Box w="full" maxW="md">
      <Form.Root<ResetPasswordForm>
        onSubmitForm={handleResetPassword}
        handleSubmit={handleSubmit}
      >
        <Heading as="h2" fontWeight="100" size="lg" mb={2} textAlign="center">
          Resetar senha
        </Heading>
        <Text as="span" mb={4} textAlign="center">
          O link de reset será enviado para o seu email
        </Text>
        <fieldset>
          <legend>Solicitar link</legend>
          <Form.Input
            id="email"
            label="Email"
            name="email"
            placeholder="Insira seu email"
            register={register}
            errors={errors}
          />
        </fieldset>
        <Form.Actions>
          <Form.Action
            colorScheme="orange"
            isSubmitting={isSubmitting}
            text="Enviar link"
            mt="6"
          />
        </Form.Actions>
        <Button
          colorScheme="gray"
          variant="link"
          mt={4}
          onClick={() => changeView("logIn")}
        >
          Login
        </Button>
      </Form.Root>
    </Box>
  );
};
