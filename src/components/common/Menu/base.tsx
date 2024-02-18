import useToogle from "@/hooks/useToogle";
import Button from "../Button";
import useMemory from "@/hooks/useMemory";
import Badge from "../Badge";
import Option from "./option";
import { v4 } from "uuid";
import CircleXIcon from "../Icon/icons/circle-x";
import { ReactNode, useEffect } from "react";
import TextField from "../TextField";
import AddIcon from "../Icon/icons/add";
import useInputHandler from "@/hooks/useInputHandler";

export interface MenuBaseProps {
  items?: any[];
  initMemory?: any[];
  getItemPrint?: CallableFunction;
  getItemValue?: CallableFunction;
  exportMemory?: CallableFunction;
  genNewItemProps?: CallableFunction;
  onAdd?: CallableFunction;
  Trigger?: ReactNode;
  wide?: boolean;
  memo?: boolean;
  addInput?: boolean;
  showChecks?: boolean;
  memoAsList?: boolean;
}

export default function MenuBase({
  items = [],
  initMemory = [],
  getItemPrint = (item: string | number) => item,
  getItemValue = (item: string | number) => item,
  exportMemory = () => {},
  genNewItemProps = (item: string | number) => item,
  onAdd = async (value: any) => true,
  Trigger,
  wide = true,
  memo = false,
  showChecks = false,
  addInput = false,
  memoAsList = false,
}: MenuBaseProps) {
  /*I know this component has too many callbacks (cb) functions, cb that we are not using in the project, 
  but when i was working on the MenuToogle(a variant of Menu) I was thinking on the extensibility of the component.
  What happend if we have an array of objects, when the more important attr is an id... well Menu use a memory, one
  given by a custom hook useMemory, and that hook is thinked for work even for complex and simple data, so was necesary
  to have control over the special attr of the items.
    onAdd is async because is thinked for work with server side.
  */

  const { flag, toogle } = useToogle(false);
  const {
    memory,
    add,
    drop,
    has,
    toogle: toogleMemory,
  } = useMemory({
    items: initMemory,
    customValidator: (a: any, b: any) => getItemValue(a) === getItemValue(b),
  });
  const { value, handleChange, reset } = useInputHandler("");

  const handleAdd = async () => {
    if (value && (await onAdd(value))) add(genNewItemProps(value));
  };

  useEffect(() => {
    exportMemory(memory);
  }, [memory]);

  return (
    <>
      <div className="relative">
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={toogle}
        >
          {Trigger}
        </div>

        <div
          className={`${!flag && "hidden"} absolute top-100 left-0 z-20 ${
            wide ? "w-80" : "w-40"
          }`}
        >
          {addInput && (
            <div className="flex w-full">
              <TextField
                placeholder="Selecciona o crea un nuevo favorito"
                fullwidth
                classNameInput="!rounded-r-none"
                value={String(value)}
                onChange={handleChange}
              />
              <Button
                StartIcon={<AddIcon />}
                color="gray"
                intensity="light"
                className={`!rounded-l-none border border-gray-30 border-s-0 hover:bg-gray-35`}
                onClick={handleAdd}
              />
            </div>
          )}
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
          <div className="bg-[#fff] shadow-md rounded-md max-h-[272px] overflow-auto">
            {(memoAsList ? memory : items).map((item, i) => {
              const checked = (memo || showChecks) && has(item);
              return (
                <Option
                  key={v4()}
                  onClick={() => toogleMemory(item)}
                  checked={checked}
                >
                  {getItemPrint(item)}
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
