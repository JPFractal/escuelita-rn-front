import Button from "@/components/common/Button";
import Paper from "@/components/common/Container/Paper/intex";
import Typography from "@/components/common/Typography";
import TalentRegister from "@/mainComponents/TalentRegister";

export default function Page() {
  return (
    <main className="flex justify-center p-3">
      <Paper className="w-[606px] custom-shadow border-[1px] border-gray-30 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="title">Nuevo talento</Typography>
            <Typography>
              Detalla al nuevo talento que deseas agregar.
            </Typography>
          </div>
          <div className="flex gap-2">
            <Button variant="outlined" color="sky" href="/" className="h-fit">
              Volver
            </Button>
            <Button className="h-fit">Guardar</Button>
          </div>
        </div>
        <TalentRegister
          className="px-5 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 270px)" }}
        />
      </Paper>
    </main>
  );
}
