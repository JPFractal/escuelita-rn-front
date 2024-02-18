import Button, { ButtonProps } from "../Button";
import MenuBase, { MenuBaseProps } from "./base";

interface MenuProps extends MenuBaseProps, ButtonProps {
  title: string;
  wide?: boolean;
  memo?: boolean;
  items?: any[];
  getItemPrint?: CallableFunction;
  getItemValue?: CallableFunction;
}

export default function Menu({
  items = [],
  getItemPrint = (item: string | number) => item,
  getItemValue = (item: string | number) => item,
  wide = true,
  memo = false,
  addInput = false,
  title,
  className = "",
  variant = "contained",
  startIcon = "",
  endIcon = "",
  EndIcon = null,
  StartIcon = null,
  intensity = "dark",
  color = "gray",
}: MenuProps) {
  return (
    <MenuBase
      {...{ items, getItemPrint, getItemValue, wide, memo, addInput }}
      Trigger={
        <Button
          {...{
            className,
            color,
            variant,
            intensity,
            children: title,
            startIcon,
            endIcon,
            EndIcon,
            StartIcon,
          }}
        />
      }
    />
  );
}
