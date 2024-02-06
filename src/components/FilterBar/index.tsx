import Button from "../common/Button";
import PhoneIcon from "@/assets/svg/icons/phone.svg";
import Tag from "../common/Tag";
import InputSearch from "../InputSearch";

export default function FilterBar() {
  return (
    <div className="flex gap-[18px]">
      <Tag className="flex-1">Habilidades</Tag>
      <Tag className="flex-1">Nivel de inglés</Tag>
      <Tag className="flex-1">Favoritos</Tag>
      <InputSearch />
      <Button>Buscar</Button>
    </div>
  );
}
