"use client";

import Image from "next/image";
import FractalLogo from "@/assets/svg/img/fractal-logo.svg";
import InputSearch from "../InputSearch";
import UserMenu from "../UserMenu";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="w-full border-b border-gray-30">
      <div className="max-w-screen-2xl flex justify-between items-center py-6 px-10 mx-auto">
        <div className="flex gap-10 items-center">
          <Link href={"/"}>
            <Image
              src={FractalLogo}
              width={122}
              height={32}
              alt="Fractal logo"
            />
          </Link>
          <InputSearch />
        </div>
        <UserMenu name={user?.name} role={user?.role} photo={user?.photo} />
      </div>
    </header>
  );
}
