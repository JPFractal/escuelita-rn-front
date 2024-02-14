import Button from "../../Button";
import Typography from "../../Typography";
import Paper from "../Paper/intex";

export default function ModalContent({
  onCancel = () => {},
  onConfirm = () => {},
  title = "",
  subtitle = "",
  confirmButtonText = "Agregar",
  cancelButtonText = "Cancelar",
  children,
}: any) {
  return (
    <Paper className="grid grid-cols-12 gap-4 min-w-[560px]">
      <div className="col-span-12 flex flex-col gap-2">
        <Typography variant="title">{title}</Typography>
        <Typography>{subtitle}</Typography>
      </div>
      <div className="col-span-12 mb-5">{children}</div>
      <Button
        className="col-span-6 border-gray-30"
        variant="outlined"
        color="gray"
        onClick={onCancel}
      >
        {cancelButtonText}
      </Button>
      <Button className="col-span-6" onClick={onConfirm}>
        {confirmButtonText}
      </Button>
    </Paper>
  );
}
