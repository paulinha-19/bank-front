import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ElementType } from 'react';

export type InputProps = ChakraInputProps & {
  icon?: ElementType;
};