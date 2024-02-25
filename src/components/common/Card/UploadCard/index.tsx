"use client";

import Typography from "../../Typography";
import UploadIcon from "../../Icon/icons/upload";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

interface UploadCardProps {
  className?: string;
  onClick?: any;
  title?: string;
  name?: string;
  subtitle?: string;
  accept?: string;
}

export default function UploadCard({
  className,
  onClick = null,
  title = "Sube un archivo",
  subtitle = "",
  accept = "",
  name = "",
}: UploadCardProps) {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => ref.current?.click();
  const [file, setFile] = useState<File>();
  const handleChange = (e: any) => setFile(e.target.files?.[0]);

  return (
    <div
      className={`${className} max-h-[140px] overflow-hidden p-2 rounded-lg  flex items-center justify-center flex-col gap-2 hover:cursor-pointer hover:bg-sky-40`}
      onClick={onClick ?? handleClick}
    >
      <div className="w-10 p-2 bg-sky-40 rounded-full">
        <UploadIcon />
      </div>
      <Typography className="text-sky-10 font-semibold" variant="text">
        {file ? file.name : title}
      </Typography>
      <Typography>{subtitle}</Typography>
      <input
        className="hidden"
        type="file"
        name={name}
        accept={accept}
        ref={ref}
        onChange={handleChange}
      />
    </div>
  );
}
