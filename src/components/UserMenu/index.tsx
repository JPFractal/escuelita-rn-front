import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import TextNdSupport from "../common/Typography/text-nd-support";
import Avatar from "../common/Avatar";

interface UserMenuProps {
  photo?: string;
  name?: string;
  role?: string;
}

export default function UserMenu({
  photo = UserDefaultPhoto,
  name = "Usuario",
  role = "Iniciar sesión",
}: UserMenuProps) {
  return (
    <div className="flex gap-[18px] items-center">
      <div className="rounded-full overflow-hidden">
        <Avatar src={photo} alt={name} size="xs" />
      </div>
      <TextNdSupport text={name} support={role} />
    </div>
  );
}
