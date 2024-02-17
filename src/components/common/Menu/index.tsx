import useToogle from "@/hooks/useToogle";
import Button, { ButtonProps } from "../Button";
import useMemory from "@/hooks/useMemory";
import Badge from "../Badge";
import Option from "./option";
import { v4 } from "uuid";
import CircleXIcon from "../Icon/icons/circle-x";
import CheckIcon from "../Icon/icons/check";
import { palette } from "@/themes/colors";

interface MenuProps extends ButtonProps {
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
  title,
  className = "",
  variant = "contained",
  startIcon = "",
  endIcon = "",
  EndIcon = null,
  StartIcon = null,
  intensity = "dark",
  color = "gray",
  wide = true,
  memo = false,
}: MenuProps) {
  const { flag, toogle } = useToogle(false);
  const { memory, add, drop, has } = useMemory({});

  return (
    <>
      <div className="relative">
        <Button
          {...{
            className,
            color,
            variant,
            intensity,
            children: title,
            onClick: toogle,
            startIcon,
            endIcon,
            EndIcon,
            StartIcon,
          }}
        />
        <div
          className={`${!flag && "hidden"} absolute top-100 left-0 z-20 ${
            wide ? "w-80" : "w-40"
          }`}
        >
          {memo && memory.length > 0 && (
            <div className="bg-[#fff] shadow-md rounded-md flex gap-2 p-3 flex-wrap border-b border-gray-40">
              {memory.map((m, i) => (
                <Badge
                  key={v4()}
                  className=" gap-1 cursor-pointer"
                  onClick={() =>
                    drop((j: any) => getItemValue(j) === getItemValue(m))
                  }
                >
                  {getItemPrint(m)}
                  <CircleXIcon />
                </Badge>
              ))}
            </div>
          )}
          <div className="bg-[#fff] shadow-md rounded-md ">
            {items.map((item, i) => {
              const checked = memo && has(item);
              return (
                <Option
                  key={v4()}
                  onClick={() => add(getItemValue(item))}
                  className={`flex justify-between ${checked && "bg-gray-50"}`}
                >
                  {getItemPrint(item)}
                  {checked && (
                    <CheckIcon
                      color={palette.sky[10]}
                      className="!p-0"
                      size="xs"
                    />
                  )}
                </Option>
              );
            })}
          </div>
        </div>
      </div>
      {flag && (
        <div
          className="fixed w-screen h-screen top-0 right-0 z-10"
          onClick={toogle}
        ></div>
      )}
    </>
  );
}
