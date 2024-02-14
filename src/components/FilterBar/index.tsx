import Button from "../common/Button";
import InputSearch from "../InputSearch";
import Menu from "../common/Menu";
import Option from "../common/Menu/option";

export default function FilterBar() {
  return (
    <div className="flex gap-[18px] items-center justify-between">
      <div className="flex gap-[18px]">
        <Menu
          title="Habilidades"
          intensity="light"
          className="!rounded-full text-nowrap"
        >
          <Option>Data Structure</Option>
          <Option>Docker</Option>
          <Option>Express</Option>
        </Menu>
        <Menu
          title="Nivel de inglés"
          intensity="light"
          className="!rounded-full text-nowrap"
        >
          <Option>Básico</Option>
          <Option>Intermedio</Option>
          <Option>Avanzado</Option>
          <Option>Nativo</Option>
        </Menu>
        <Menu
          title="Favoritos"
          intensity="light"
          className="!rounded-full text-nowrap"
        >
          <Option>Mis favoritos</Option>
          <Option>Backups</Option>
        </Menu>
      </div>
      <InputSearch />
      <Button>Buscar</Button>
    </div>
  );
}
