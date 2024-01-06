import { forwardRef, ChangeEvent } from "react";
import { mask as masker, unMask } from "remask";
import { Input } from "@chakra-ui/react";
import { InputProps } from "../../types/masked-input";

export const CustomInputMask = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name = "", mask = "", onChange, value, ...props }, ref) => {
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const valueWithMask = masker(ev.target.value || "", mask);
        onChange(valueWithMask);
      }
    };
    const handleValueWithMask = masker(value || "", mask);

    return (
      <Input
        type={type}
        name={name}
        ref={ref}
        value={handleValueWithMask}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

CustomInputMask.displayName = "CustomInputMask";
