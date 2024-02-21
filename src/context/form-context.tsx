"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function FormContextProvider({
  children,
  initConfig = { defaultValues: {} },
  onSubmit = () => {},
  externalMethods,
}: {
  children: ReactNode;
  initConfig?: any;
  onSubmit?: any;
  externalMethods?: any;
}) {
  const methods = useForm(initConfig);

  return (
    <FormProvider {...(externalMethods ?? methods)}>
      <form onSubmit={(externalMethods ?? methods).handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
