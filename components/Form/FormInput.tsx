import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
} from "@chakra-ui/react";
import { CustomInput } from "../../components/CustomInput";
import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  Path,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  id: string;
  label: string;
  type?: string;
  name: Path<T>;
  color?: string;
  placeholder: string;
  maxLength?: number;
  register: UseFormRegister<T>;
  errors: any;
  children?: React.ReactNode;
  required?: boolean | undefined;
}
export const FormInput = <T extends FieldValues>({
  id,
  label,
  type = "text",
  name,
  color = "#163D66",
  placeholder,
  register,
  maxLength,
  errors,
  children,
  required,
}: FormInputProps<T>) => {
  return (
    <FormControl id={id} isInvalid={!!errors[name]} isRequired={required}>
      <FormLabel color={color}>{label}</FormLabel>
      <InputGroup>
        <CustomInput
          maxLength={maxLength}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
        {children}
      </InputGroup>
      <FormErrorMessage>
        {errors[name] && errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
