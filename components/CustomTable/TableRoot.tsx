import { Table } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { ThemingProps } from "@chakra-ui/react";

type TableRootProps = ThemingProps & {
  children: ReactNode;
};
export const TableRoot = ({
  children,
  variant = "simple",
  ...rest
}: TableRootProps) => {
  return (
    <Table variant={variant} {...rest}>
      {children}
    </Table>
  );
};
