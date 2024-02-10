import ListContainerProps from "@/types/common/ListContainer";
import Typography from "../../Typography";
import AddIcon from "../../Icon/icons/add";
import Button from "../../Button";

export default function ListContainer({
  name,
  children,
  className = "",
  mainContainerClass = "",
  axis = 1,
  onAdd = () => {},
}: ListContainerProps) {
  return (
    <div className={"flex flex-col gap-3 " + mainContainerClass}>
      <div className="w-full flex justify-between items-center">
        <Typography variant="support" className="font-bold">
          {name}
        </Typography>
        <Button variant="text" className="!p-0">
          <AddIcon color="#667085" />
        </Button>
      </div>
      <div
        className={`flex flex-wrap gap-2 ${className} ${
          axis === 1 ? "flex-col" : "flex-row"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
