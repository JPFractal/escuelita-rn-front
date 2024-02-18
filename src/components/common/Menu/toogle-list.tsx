import { useState } from "react";
import Toogle from "../Toogle";
import MenuBase from "./base";
import HeartIcon from "../Icon/icons/heart";
import { palette } from "@/themes/colors";

export default function MenuToogle({ initItems = [], initMemory = [] }: any) {
  const [items, setItems] = useState(initItems);
  const [shadowMemory, setShadowMemory] = useState(initMemory);

  const handleAdd = async (item: any) => {
    if (items.find((i: any) => i.item === item)) return false;
    setItems([...items, item]);
    return true;
  };

  return (
    <MenuBase
      Trigger={
        <HeartIcon
          filled={shadowMemory.length > 0}
          color={palette.pink[10]}
          size="lg"
        />
      }
      items={items}
      addInput={true}
      initMemory={initMemory}
      exportMemory={setShadowMemory}
      onAdd={handleAdd}
      showChecks
    />
  );
}
