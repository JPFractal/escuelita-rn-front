import Button from "../common/Button";
import InputSearch from "../InputSearch";
import Menu from "../common/Menu";
import Option from "../common/Menu/option";
import { LANGUAGE_LEVELS } from "@/constraints/Values/language-levels";
import { LANGUAGE_OPTIONS } from "@/constraints/Values/language-options";

export default function FilterBar() {
  return (
    <div className="flex gap-[18px] items-center justify-between">
      <div className="flex gap-[18px]">
        <Menu
          title="Habilidades"
          intensity="light"
          className="!rounded-full text-nowrap"
          items={[
            "Data Structure",
            "Docket",
            "Express",
            "Github",
            "Nginx",
            "NodeJS",
          ]}
          memo
        />
        <Menu
          title="Idioma"
          intensity="light"
          className="!rounded-full text-nowrap"
          wide={false}
          items={LANGUAGE_OPTIONS}
          getItemPrint={(item: any) => item.label}
        />
        <Menu
          title="Nivel de idioma"
          intensity="light"
          className="!rounded-full text-nowrap"
          items={LANGUAGE_LEVELS}
          getItemPrint={(item: any) => item.label}
        />
        <Menu
          title="Favoritos"
          intensity="light"
          className="!rounded-full text-nowrap"
          items={["Mis favoritos", "Backups"]}
        />
      </div>
      <InputSearch />
      <Button>Buscar</Button>
    </div>
  );
}
