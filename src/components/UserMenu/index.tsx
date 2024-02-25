import UserDefaultPhoto from "@/assets/svg/img/user-default.svg";
import TextNdSupport from "../common/Typography/text-nd-support";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Link from "next/link";
import MenuBase from "../common/Menu/base";
import useAuth from "@/hooks/useAuth";

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
  const { logOut } = useAuth();

  return (
    <div className="flex gap-[18px] items-center">
      <div className="rounded-full overflow-hidden">
        <Avatar src={photo} alt={name ?? ""} size="xs" />
      </div>
      {role && name ? (
        <MenuBase
          Trigger={<TextNdSupport text={name} support={role} />}
          items={[{ value: "Cerrar sesión", onClick: logOut }]}
          getItemPrint={(item: any) => item.value}
          xPos="right"
          wide={false}
        />
      ) : (
        <div className="flex flex-col gap-1">
          <Typography variant="text">Usuario</Typography>
          <Link href={"/login"}>
            <Typography variant="support" className="hover:text-sky-10">
              Iniciar sesión
            </Typography>
          </Link>
        </div>
      )}
    </div>
  );
}
