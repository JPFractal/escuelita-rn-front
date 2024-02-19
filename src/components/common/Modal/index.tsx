import useToogle from "@/hooks/useToogle";
import { MouseEventHandler } from "react";

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: MouseEventHandler;
  zIndex?: { bg: number; content: number };
}

export default function Modal({
  children,
  open = false,
  onClose = () => {},
  zIndex = { bg: 10, content: 20 },
}: ModalProps) {
  if (!open) return;

  return (
    <>
      <div
        className="fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2"
        style={{ zIndex: zIndex.content }}
      >
        {children}
      </div>
      <div
        className="h-screen w-screen fixed top-0 left-0 bg-[#000]/20 z-10"
        style={{ zIndex: zIndex.bg }}
        onClick={onClose}
      />
    </>
  );
}
