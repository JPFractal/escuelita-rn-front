"use client";

import Button from "../common/Button";
import InputSearch from "../InputSearch";
import Menu from "../common/Menu";
import { LANGUAGE_LEVELS } from "@/constraints/Values/language-levels";
import { LANGUAGE_OPTIONS } from "@/constraints/Values/language-options";
import AddIcon from "../common/Icon/icons/add";
import useAuth from "@/hooks/useAuth";
import Typography from "../common/Typography";

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

export function FilterBarLeftSide() {
  const { isAdmin } = useAuth();
  return (
    <div className="h-[44px] flex items-center">
      {isAdmin() ? (
        <Button
          variant="outlined"
          color="sky"
          StartIcon={<AddIcon />}
          href="/new-talent"
        >
          Nuevo talento
        </Button>
      ) : (
        <Typography>
          Mostrando x resultados para: "termino de busqueda"
        </Typography>
      )}
    </div>
  );
}
