import FileCardProps from "@/types/common/FileCard";
import Image from "next/image";
import Typography from "../../Typography";

export default function FileCard({
  className,
  name,
  src,
  ...props
}: FileCardProps) {
  return (
    <div
      className={`bg-gray-50 ${className} max-h-[140px] overflow-hidden p-2 rounded-lg hover:bg-gray-40`}
      {...props}
    >
      <Image
        className="h-20 w-full object-cover"
        src={src}
        alt={"img certificate"}
        width={222}
        height={140}
      />
      <div className="w-full p-2 h-max">
        <Typography>{name}</Typography>
        <Typography className="text-[10px]">PDF</Typography>
      </div>
    </div>
  );
}
