import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import TextNdSupport from "../common/Typography/text-nd-support";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Link from "next/link";

interface UserMenuProps {
  photo?: string;
  name?: string | null;
  role?: string | null;
}

export default function UserMenu({
  photo = UserDefaultPhoto,
  name,
  role,
}: UserMenuProps) {
  return (
    <div className="flex gap-[18px] items-center">
      <div className="rounded-full overflow-hidden">
        <Avatar src={photo} alt={name ?? ""} size="xs" />
      </div>
      {role && name ? (
        <TextNdSupport text={name} support={role} />
      ) : (
        <div className="flex flex-col gap-1">
          <Typography variant="text">Usuario</Typography>
          <Link href={"/login"}>
            <Typography variant="support" className="hover:text-sky-10">Iniciar sesión</Typography>
          </Link>
        </div>
      )}
    </div>
  );
}
