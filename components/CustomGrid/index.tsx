import React, { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

interface CustomGridProps {
  children: ReactNode;
}

export const CustomGrid = ({ children }: CustomGridProps) => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {children}
    </SimpleGrid>
  );
};
