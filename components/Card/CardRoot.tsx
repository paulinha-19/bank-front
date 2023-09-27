"use client";

import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface CardRootProps {
  children: ReactNode;
  pt?: string | number
}
export const CardRoot = ({ children, pt }: CardRootProps) => {
  return <Box pt={pt}>{children}</Box>;
};
