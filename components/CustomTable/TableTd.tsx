import { Td } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TableTdProps {
  content: Array<Object> | ReactNode;
  nome?: string;
}

export const TableTd = ({ content, nome }: TableTdProps) => {
  return (
    <>
      {Array.isArray(content) ? (
        content.map((item, index: number) => (
          <Td key={index}>{nome ? (item as any)[nome] : item}</Td>
        ))
      ) : (
        <Td>{nome ? (content as any)[nome] : content}</Td>
      )}
    </>
  );
};
