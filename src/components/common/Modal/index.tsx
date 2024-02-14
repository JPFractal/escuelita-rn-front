import useToogle from "@/hooks/useToogle";
import { MouseEventHandler } from "react";

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: MouseEventHandler;
}

export default function Modal({
  children,
  open = false,
  onClose = () => {},
}: ModalProps) {
  if (!open) return;

  return (
    <>
      <div className="fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-20">
        {children}
      </div>
      <div
        className="h-screen w-screen fixed top-0 left-0 bg-[#000]/20 z-10"
        onClick={onClose}
      />
    </>
  );
}
