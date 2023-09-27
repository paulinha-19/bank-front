import { Th, Tr } from "@chakra-ui/react";
import React from "react";

interface TheadContentProps {
  headers: string[];
}
export const TheadContent = ({ headers }: TheadContentProps) => {
  return (
    <Tr>
      {headers.map((header, index) => (
        <Th key={index}>{header}</Th>
      ))}
    </Tr>
  );
};
