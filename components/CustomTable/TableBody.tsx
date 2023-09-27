import { Tbody } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TableBodyProps {
  children: ReactNode;
}

export const TableBody = ({ children }: TableBodyProps) => {
  return <Tbody>{children}</Tbody>;
};
