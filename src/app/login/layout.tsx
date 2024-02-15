import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

import MapSVG from "@/assets/svg/img/america-map.svg";
import PeopleSVG from "@/assets/svg/img/people.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banco de talentos | Iniciar sesión",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-screen h-screen grid grid-cols-12">
      <article className="col-span-6 relative">{children}</article>
      <div className="col-span-6 bg-gray-32 relative">
        <Image
          src={MapSVG}
          width={428}
          height={428}
          alt="América map"
          className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
        />
        <Image
          src={PeopleSVG}
          width={428}
          height={428}
          alt="Bienvenido a fractal"
          className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
        />
      </div>
    </main>
  );
}
