import React, { ReactNode } from "react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

interface FormRootProps<T extends FieldValues> {
  children: ReactNode;
  onSubmitForm: (data: T) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<T>;
}

export const FormRoot = <T extends FieldValues>({
  children,
  onSubmitForm,
  handleSubmit,
}: FormRootProps<T>) => {
  return <form onSubmit={handleSubmit(onSubmitForm)}>{children}</form>;
};
