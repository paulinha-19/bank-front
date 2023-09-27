import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CustomShadowProps {
  children: ReactNode;
}

export const CustomShadow = ({ children }: CustomShadowProps) => {
  return (
    <Box overflowX="auto" mt={8} boxShadow="base" rounded="md" bg="white">
      {children}
    </Box>
  );
};
