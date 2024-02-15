import Image from "next/image";
import FractalLogo from "@/assets/svg/img/fractal-logo.svg";
import Typography from "@/components/common/Typography";
import TextField from "@/components/common/TextField";
import Button from "@/components/common/Button";

export default function Page() {
  return (
    <section className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2">
      <Image
        src={FractalLogo}
        width={244}
        height={32}
        alt="Fractal"
        className="mb-8"
      />
      <form className="flex flex-col gap-4 min-w-[344px]">
        <div className="flex flex-col gap-2">
          <Typography variant="title" element="h1">
            Inicio de sesión
          </Typography>
          <Typography element="h2">Inicia sesión</Typography>
        </div>
        <TextField label="Usuario" placeholder="Nombre de usuario" />
        <TextField
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
        />
        <Typography variant="text" className="font-bold text-sky-10">
          Olvidé mi contraseña
        </Typography>
        <Button href="/">Iniciar sesión</Button>
      </form>
    </section>
  );
}
