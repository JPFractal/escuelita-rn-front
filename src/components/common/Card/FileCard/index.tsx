import FileCardProps from "@/types/common/FileCard";
import CertificateIMG from "@/assets/svg/mockups/certificate.svg";
import Image from "next/image";
import Typography from "../../Typography";

export default function FileCard({
  className,
  name,
  src = CertificateIMG,
}: FileCardProps) {
  return (
    <div
      className={`bg-gray-50 ${className} max-h-[140px] overflow-hidden p-2 rounded-lg `}
    >
      <Image
        className="h-20 w-full object-cover"
        src={src}
        alt={"img certificate"}
        width={222}
        height={140}
      />
      <div className="w-full bg-gray-50 p-2 h-max">
        <Typography>{name}</Typography>
        <Typography className="text-[10px]">PDF</Typography>
      </div>
    </div>
  );
}
