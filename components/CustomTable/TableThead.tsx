import { Thead, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TableTheadProps {
  children: ReactNode;
}

export const TableThead = ({ children }: TableTheadProps) => {
  return (
    <Thead bg={useColorModeValue("gray.200", "gray.700")}>{children}</Thead>
  );
};
