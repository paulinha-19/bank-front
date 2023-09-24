import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface CardRootProps {
  children: ReactNode;
}
export const CardRoot = ({ children }: CardRootProps) => {
  return <Box>{children}</Box>;
};
