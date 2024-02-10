import FileCardProps from "@/types/common/FileCard";
import CertificateIMG from "@/assets/svg/mockups/certificate.svg";
import Image from "next/image";
import Typography from "../../Typography";
import UploadIcon from "../../Icon/icons/upload";
import { MouseEventHandler } from "react";

export default function UploadCard({
  className,
  onClick = () => {},
}: {
  className?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <div
      className={`${className} max-h-[140px] overflow-hidden p-2 rounded-lg  flex items-center justify-center flex-col gap-2 hover:cursor-pointer hover:bg-sky-40`}
    >
      <div className="w-10 p-2 bg-sky-40 rounded-full">
        <UploadIcon />
      </div>
      <Typography className="text-sky-10 font-semibold">
        Sube un archivo
      </Typography>
    </div>
  );
}
