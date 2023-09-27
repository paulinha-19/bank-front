import { Heading } from "@chakra-ui/react";
import React from "react";

interface TableHeadingProps {
  title: string;
}

export const TableHeading = ({ title }: TableHeadingProps) => {
  return (
    <Heading as="h4" size="sm" color="blue.400" px={5} py={5}>
      {title}
    </Heading>
  );
};
