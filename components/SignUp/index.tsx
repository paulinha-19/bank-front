import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  useToast,
  RadioGroup,
  Stack,
  Radio,
  FormLabel,
  Text
} from "@chakra-ui/react";
import { Form } from "..";
import { SignupForm, SignupSchema } from "@/schema/signup";
import { useForms } from "@/hook/useForms";
import { createUserWithCpf, createUserWithCnpj } from "@/services/requests";
import { handleErrorToastSignUp } from "@/lib/toast-error-signup";

interface SignUpProps {
  changeView: (view: string) => void;
}

export const SignUp = ({ changeView }: SignUpProps) => {
  const toast = useToast();
  const [userType, setUserType] = useState("");
  const handleUserTypeChange = (value: string) => {
    setUserType(value);
    console.log(value);
  };

  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<SignupForm>({
      schema: SignupSchema(userType),
      defaultValues: { cpf: null, cnpj: null },
    });

    const showToast = (title: string, status: "success" | "error") => {
      toast({
        title,
        status,
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    };
  
  const handleSignUp = async (data: SignupForm) => {
    try {
      const isValid = handleErrorToastSignUp(
        userType,
        data.cpf,
        data.cnpj,
        showToast
      );
      if (!isValid) {
        return;
      }
      let responseData;
      if (userType === "cpf") {
        responseData = await createUserWithCpf(data);
      } else if (userType === "cnpj") {
        responseData = await createUserWithCnpj(data);
      }
      changeView("logIn");
      reset();
      toast({
        title: "Dados submetidos",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: String(error),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  return (
    <Box w="full" maxW="md">
      <Form.Root<SignupForm>
        onSubmitForm={handleSignUp}
        handleSubmit={handleSubmit}
      >
        <Heading color="white" as="h2" fontWeight="100" size="lg" mb={5} textAlign="center">
          Cadastre-se
        </Heading>
        <fieldset>
          <legend style={{color: "black"}}>Solicitar conta</legend>
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
          <RadioGroup
            value={userType}
            onChange={(value) => {
              handleUserTypeChange(value);
              reset({
                cpf: value === "cpf" ? "" : null,
                cnpj: value === "cnpj" ? "" : null,
              });
            }}
            mt="2"
          >
            <FormLabel as="legend">Selecione uma opção:</FormLabel>
            <Stack direction="row" mb="4">
              <Radio value="cpf" isRequired>
                CPF
              </Radio>
              <Radio value="cnpj">CNPJ</Radio>
            </Stack>
          </RadioGroup>
          <Form.Input
            maxLength={userType === "cpf" ? 14 : 18}
            id={userType === "cpf" ? "cpf" : "cnpj"}
            label={userType === "cpf" ? "CPF" : "CNPJ"}
            name={userType === "cpf" ? "cpf" : "cnpj"}
            placeholder={
              userType === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"
            }
            register={register}
            errors={errors}
          />
          {/* {userType === "cpf" && (
            <FormControl id="cpf" isInvalid={!!errors.cpf}>
              <FormLabel>CPF</FormLabel>
              <Controller
                name="cpf"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputMask
                    maxLength={14}
                    type="text"
                    placeholder="000.000.000-00"
                    mask="999.999.999-99"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
            </FormControl>
          )}
          {userType === "cnpj" && (
            <FormControl id="cnpj" isInvalid={!!errors.cnpj}>
              <FormLabel>CNPJ</FormLabel>
              <Controller
                name="cnpj"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputMask
                    maxLength={18}
                    type="text"
                    placeholder="00.000.000/0000-00"
                    mask="99.999.999/9999-99"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <FormErrorMessage>{errors.cnpj?.message}</FormErrorMessage>
            </FormControl>
          )} */}
        </fieldset>
        <Form.Actions>
          <Form.Action
            colorScheme="yellow"
            isSubmitting={isSubmitting}
            text="Cadastrar"
            mt="6"
          />
        </Form.Actions>
        <Button
          colorScheme="gray"
          variant="unstyled"
          mt={4}
          onClick={() => changeView("logIn")}
        >
          <Text color={"white"}>Já tem conta?</Text>
        </Button>
      </Form.Root>
    </Box>
  );
};