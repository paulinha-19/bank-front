import React from "react";
import { Box, Heading, Button, Text, Link, useToast } from "@chakra-ui/react";
import { Form } from "..";
import { LoginSchema, LoginForm } from "@/schema/login";
import { useForms } from "@/hook/useForms";
import { useRouter } from "next/navigation";

interface LoginProps {
  changeView: (view: string) => void;
}

export const Login = ({ changeView }: LoginProps) => {
  const router = useRouter();
  const toast = useToast();

  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<LoginForm>({
      schema: LoginSchema,
      defaultValues: {},
    });
  const handleSignIn = async (data: LoginForm) => {
    try {
      if (data.email === "admin@gmail.com" && data.password === "admin") {
        router.push("/admin/dashboard");
        reset();
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Email ou senha incorretos.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
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
      <Form.Root<LoginForm>
        onSubmitForm={handleSignIn}
        handleSubmit={handleSubmit}
      >
        <Heading as="h2" fontWeight="100" size="lg" mb={5} textAlign="center">
          Acesse sua conta
        </Heading>
        <fieldset>
          <legend>Login</legend>
          <Form.Input
            id="email"
            label="Email"
            name="email"
            placeholder="Insira seu email"
            register={register}
            errors={errors}
          />
          <Form.Input
            id="password"
            label="Senha"
            name="password"
            placeholder="Insira sua senha"
            register={register}
            errors={errors}
          />
        </fieldset>
        <Box mt="2" display="flex" justifyContent="space-between">
          <Text>
            <Link onClick={() => changeView("PWReset")}>Esqueci a senha</Link>
          </Text>
          <Button
            colorScheme="gray"
            variant="link"
            onClick={() => changeView("signUp")}
          >
            Solicitar conta
          </Button>
        </Box>
        <Form.Actions>
          <Form.Action
            colorScheme="yellow"
            isSubmitting={isSubmitting}
            text="Entrar"
            mt="6"
          />
        </Form.Actions>
      </Form.Root>
    </Box>
  );
};
