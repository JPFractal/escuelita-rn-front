import { MouseEventHandler } from "react";

export default interface ListContainerProps {
  children: React.ReactNode;
  name: string;
  mainContainerClass?: string;
  className?: string;
  onAdd?: MouseEventHandler;
  axis?: number;
  control?: boolean;
}
