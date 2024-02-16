import TextField from "@/components/common/TextField";

export default function FormFieldsSkill({ tech = false }: { tech?: boolean }) {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <TextField
        className="col-span-12"
        label={`Habilidad ${tech ? "tecnica" : "blanda"}`}
        placeholder="Nombre de la habilidad"
        name="name"
      />
      {tech && (
        <TextField
          className="col-span-12"
          label="Años de experiencia"
          placeholder="Nro. de años"
          name="years"
        />
      )}
    </div>
  );
}
