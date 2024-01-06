import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface FormActionsProps {
  children: ReactNode;
}

export const FormActions = ({ children}: FormActionsProps) => {
  return <Box>{children}</Box>;
};
