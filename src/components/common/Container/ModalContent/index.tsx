import { MouseEventHandler, ReactNode } from "react";
import Button from "../../Button";
import Typography from "../../Typography";
import Paper from "../Paper/intex";

interface ModalContentProps {
  onCancel?: MouseEventHandler;
  onConfirm?: MouseEventHandler;
  onClose?: MouseEventHandler;
  title?: string;
  subtitle?: string;
  confirmButtonText?: string;
  confirmButtonType?: "button" | "submit" | "reset";
  cancelButtonText?: string;
  CloseButtonIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function ModalContent({
  onCancel = () => {},
  onClose = () => {},
  onConfirm = () => {},
  title = "",
  subtitle = "",
  confirmButtonType = "button",
  confirmButtonText = "Agregar",
  cancelButtonText = "Cancelar",
  className = "",
  CloseButtonIcon,
  children,
}: ModalContentProps) {
  return (
    <>
      <Paper className={`grid grid-cols-12 gap-4 min-w-[560px] ${className}`}>
        <div className="col-span-12 flex flex-col gap-2 relative">
          <Typography variant="title">{title}</Typography>
          <Typography>{subtitle}</Typography>
          {CloseButtonIcon && (
            <Button
              onClick={onClose}
              variant="text"
              className="absolute right-0 top-0 !py-[3px] !px-1"
            >
              {CloseButtonIcon}
            </Button>
          )}
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
        <Button
          className="col-span-6"
          onClick={onConfirm}
          type={confirmButtonType}
        >
          {confirmButtonText}
        </Button>
      </Paper>
    </>
  );
}
