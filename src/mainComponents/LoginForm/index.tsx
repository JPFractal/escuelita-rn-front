"use client";

import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import FormContextProvider from "@/context/form-context";
import FormFieldsLogin from "@/forms/form-fields/login";
import {
  FIELD_LIST_LOGIN,
  FIELD_TYPES_LOGIN,
} from "@/forms/form-validations/login";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [errMsg, setErrMsg] = useState<string>("");
  const methods = useForm({ defaultValues: FIELD_LIST_LOGIN });

  const { logIn } = useAuth();

  const handleSubmit = async (values: FIELD_TYPES_LOGIN) => {
    setErrMsg("");
    try {
      await logIn(values);
    } catch (error: any) {
      setErrMsg(error.stack.split("\n")[0]);
    }
  };

  return (
    <FormContextProvider onSubmit={handleSubmit} externalMethods={methods}>
      <div className="flex flex-col gap-4 min-w-[344px]">
        <div className="flex flex-col gap-2">
          <Typography variant="title" element="h1">
            Inicio de sesión
          </Typography>
          <Typography element="h2">Inicia sesión</Typography>
        </div>
        <FormFieldsLogin />
        <Typography variant="text" className="font-bold text-sky-10">
          Olvidé mi contraseña
        </Typography>
        <Button type="submit">Iniciar sesión</Button>
        <Typography className="text-red-10 font-medium" variant="support">
          {errMsg}
        </Typography>
      </div>
    </FormContextProvider>
  );
}
