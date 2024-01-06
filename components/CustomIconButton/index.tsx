import React from "react";
import { IconButtonProps, IconButton } from "@chakra-ui/react";

export const CustomIconButton = ({
  icon,
  onClick,
  ...rest
}: IconButtonProps) => {
  return <IconButton icon={icon} onClick={onClick} {...rest} />;
};
