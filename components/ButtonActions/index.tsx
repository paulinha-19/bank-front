import React from "react";
import { buttonsActions } from "../../utils/button-actions";
import { CustomIconButton } from "..";

export const ButtonActions = () => {
  return (
    <div>
      {buttonsActions.map((Icon, btnIndex) => (
        <CustomIconButton
          key={btnIndex}
          colorScheme={Icon.colorScheme}
          variant="ghost"
          fontSize={Icon.fontSize}
          aria-label={Icon.ariaLabel}
          icon={<Icon.icon />}
        />
      ))}
    </div>
  );
};
