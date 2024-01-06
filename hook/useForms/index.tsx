import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type UseFormsProps<T> = {
  schema: z.ZodTypeAny;
  // onSubmit?: SubmitHandler<T>;
  defaultValues?: Partial<T>;
};

export const useForms = <T extends Record<string, any>>({
  schema,
  defaultValues = {}
}: UseFormsProps<T>) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  });
  return {
    errors,
    register,
    control,
    watch,
    reset,
    isSubmitting,
    handleSubmit,
  };
};
