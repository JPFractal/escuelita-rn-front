import Button from "../common/Button";
import PhoneIcon from "@/assets/svg/icons/phone.svg";
import Badge from "../common/Badge";
import InputSearch from "../InputSearch";
import Menu from "../common/Menu";
import Option from "../common/Menu/option";

export default function FilterBar() {
  return (
    <div className="flex gap-[18px] items-center">
      <Menu title="Habilidades" component="button" wide>
        <Option>Data Structure</Option>
        <Option>Docker</Option>
        <Option>Express</Option>
      </Menu>
      <Menu title="Nivel de inglés" component="button" wide>
        <Option>Básico</Option>
        <Option>Intermedio</Option>
        <Option>Avanzado</Option>
        <Option>Nativo</Option>
      </Menu>
      <Menu title="Favoritos" component="button" wide>
        <Option>Mis favoritos</Option>
        <Option>Backups</Option>
      </Menu>
      <InputSearch />
      <Button>Buscar</Button>
    </div>
  );
}
