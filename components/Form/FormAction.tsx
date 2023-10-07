import { Box, Button } from '@chakra-ui/react';
import { ButtonProps } from '../../types/button-props';

interface FormActionProps extends ButtonProps {
  isSubmitting: boolean;
}

export const FormAction = ({
  text = '',
  type = 'submit',
  colorScheme = 'blue',
  isSubmitting,
  pt = '',
  pb = '',
  ...props
}: FormActionProps) => {
  return (
    <Box pt={pt} pb={pb}>
      <Button type={type} {...props} colorScheme={colorScheme} minW="100%">
        {isSubmitting ? 'Enviando...' : text}
      </Button>
    </Box>
  );
};
