import { InputProps as ChakraInputProps } from '@chakra-ui/react';

export type InputProps = ChakraInputProps & {
  mask?: any;
  onChange?: (value: string) => void;
  value?: string;
};
