import { Tr } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TableTrProps {
  children: ReactNode;
  key?: string | number;
}

export const TableTr = ({ children, key }: TableTrProps) => {
  return <Tr key={key}>{children}</Tr>;
};
