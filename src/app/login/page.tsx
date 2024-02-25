import Image from "next/image";
import FractalLogo from "@/assets/svg/img/fractal-logo.svg";
import LoginForm from "@/mainComponents/LoginForm";

export default function Page() {
  return (
    <section className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2">
      <Image
        src={FractalLogo}
        width={244}
        height={32}
        alt="Fractal"
        className="mb-8"
        priority
      />
      <LoginForm />
    </section>
  );
}
