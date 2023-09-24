"use client";

import React from "react";
import { ElementType } from "react";
import { Box } from "@chakra-ui/react";

interface CardIconProps {
  icon: ElementType;
}
export const CardIcon = ({ icon: Icon }: CardIconProps) => {
  return (
    <Box>
      <Icon />
    </Box>
  );
};
