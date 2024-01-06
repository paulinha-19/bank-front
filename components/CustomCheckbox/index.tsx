import React from "react";
import { Checkbox, CheckboxProps } from "@chakra-ui/react";

interface CustomCheckboxProps extends CheckboxProps {
  bgCheck?: string;
}

export const CustomCheckbox = ({
  bgCheck = "#F8F8F8",
  ...rest
}: CustomCheckboxProps) => {
  return (
    <Checkbox
      css={{
        "& .css-xxkadm": {
          backgroundColor: bgCheck,
        },
      }}
      {...rest}
    />
  );
};
