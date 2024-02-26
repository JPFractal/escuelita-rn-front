"use client";

import adapterUser from "@/adapters/user";
import { onSubmitLogin } from "@/forms/form-actions/login";
import { FIELD_TYPES_LOGIN } from "@/forms/form-validations/login";
import { REQ_USER } from "@/requests/user";
import User from "@/types/User";
import fetchTreament from "@/utils/fetch-treatment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface AuthContextProps {
  user: User | null;
  logIn: (values: FIELD_TYPES_LOGIN) => Promise<any>;
  logOut: () => Promise<any>;
  isAdmin: () => boolean;
  isLogged: () => boolean;
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

  //prettier-ignore
  function saveInfo({ user, token, rtoken, }: { user: User; token: string; rtoken: string; }) {
    setUser(user);
    setToken(token);
    setRToken(rtoken);
    window.localStorage.setItem("bt-ls-user", JSON.stringify(user));
    window.localStorage.setItem("bt-ls-token", token);
    window.localStorage.setItem("bt-ls-rtoken", rtoken);
  }

  //prettier-ignore
  function getInfo(): { user: User | null; token: string | null; rtoken: string | null; } {
    const user = window.localStorage.getItem("bt-ls-user");
    return {
      user: user ? (JSON.parse(user) as User) : null,
      token: window.localStorage.getItem("bt-ls-token"),
      rtoken: window.localStorage.getItem("bt-ls-rtoken"),
    };
  }

  useEffect(() => {
    const { user, token, rtoken } = getInfo();
    if (!user || !token || !rtoken) return;
    saveInfo({ user, token, rtoken });
  }, []);

  const logIn = async (values: FIELD_TYPES_LOGIN) => {
    const raw = await onSubmitLogin(values);

    if (!raw.ok) throw new Error(raw.message);

    const raw_user = await fetchTreament({
      request: REQ_USER(values.username, raw.data.accessToken),
      reqErrorMessage: "Error al cargar datos de usuario",
    });

    if (!raw_user.ok) throw new Error(raw_user.message);
    let user = await raw_user.res?.json();
    user = adapterUser(user);
    // prettier-ignore
    saveInfo({ user, token: raw.data.accessToken, rtoken: raw.data.refreshToken });
    router.push("/");
  };

  const logOut = async () => {
    /* destroy on device */
    window.localStorage.removeItem("bt-ls-user");
    window.localStorage.removeItem("bt-ls-token");
    window.localStorage.removeItem("bt-ls-rtoken");
    /* destroy on app */
    setUser(null);
    setToken(null);
    setRToken(null);
    /* redirect */
    router.push("/login");
  };

  const isAdmin = (): boolean => {
    return user?.role === "admin";
  };

  const isLogged = (): boolean => {
    return !!user;
  };

  const context: AuthContextProps = {
    user,
    logIn,
    logOut,
    isAdmin,
    isLogged,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
