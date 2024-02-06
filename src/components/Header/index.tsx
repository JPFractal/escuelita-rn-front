import Image from "next/image";
import FractalLogo from "@/assets/svg/img/fractal-logo.svg";
import InputSearch from "../InputSearch";
import colors from "@/theme/colors";
import UserMenu from "../UserMenu";

export default function Header() {
  return (
    <header
      className="w-full border-b"
      style={{ borderColor: `${colors.borders.grey} !important` }}
    >
      <div className="max-w-screen-2xl flex justify-between items-center py-6 px-10 mx-auto">
        <div className="flex gap-10 items-center">
          <Image src={FractalLogo} width={122} height={32} alt="Fractal logo" />
          <InputSearch />
        </div>
        <UserMenu />
      </div>
    </header>
  );
}
