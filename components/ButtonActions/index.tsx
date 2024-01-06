import React from "react";
import { CustomIconButton } from "..";
import { IconType } from "react-icons";

interface InfoButtonAction {
  colorScheme: string;
  fontSize: string;
  ariaLabel: string;
  icon: IconType;
}

interface ButtonActionsProps {
  infoActions: InfoButtonAction[];
  isDisabled?: boolean | undefined;
}

export const ButtonActions = ({
  infoActions,
  isDisabled,
}: ButtonActionsProps) => {
  return (
    <div>
      {infoActions.map((Icon, btnIndex) => (
        <CustomIconButton
          key={btnIndex}
          colorScheme={Icon.colorScheme}
          variant="ghost"
          fontSize={Icon.fontSize}
          aria-label={Icon.ariaLabel}
          icon={<Icon.icon />}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};
