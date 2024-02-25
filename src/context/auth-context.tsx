"use client";

import { onSubmitLogin } from "@/forms/form-actions/login";
import { FIELD_TYPES_LOGIN } from "@/forms/form-validations/login";
import User from "@/types/User";
import CustomResponse from "@/types/request/response";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createContext } from "react";

interface AuthContextProps {
  user: User | null;
  logIn: (values: FIELD_TYPES_LOGIN) => Promise<any>;
  logOut: () => Promise<any>;
  isAdmin: () => boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [rtoken, setRToken] = useState<string | null>(null);
  const router = useRouter();

  const logIn = async (values: FIELD_TYPES_LOGIN) => {
    const raw = await onSubmitLogin(values);
    if (raw.ok) {
      /* save on app */
      setUser(raw.data.user);
      setToken(raw.data.accessToken);
      setRToken(raw.data.refreshToken);
      /* save on navigator */
      window.localStorage.setItem("user", JSON.stringify(raw.data.user));
      window.localStorage.setItem("token", raw.data.accessToken);
      window.localStorage.setItem("rtoken", raw.data.refreshToken);
      /* redirect */
      router.push("/");
    } else throw new Error(raw.message);
  };

  const logOut = async () => {
    /* destroy on device */
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("rtoken");
    /* destroy on app */
    setUser(null);
    setToken(null);
    setRToken(null);
    /* redirect */
    router.push("/login");
  };

  const isAdmin = (): boolean => {
    return !!(user?.role === "admin");
  };

  const context: AuthContextProps = {
    user,
    logIn,
    logOut,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
