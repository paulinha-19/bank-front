import { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';
import { InputProps } from '../../types/custom-input';

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', ...props }, ref) => {
    return (
      <Input
        type={type}
        name={name}
        ref={ref}
        {...props}
      />
    );
  }
);
