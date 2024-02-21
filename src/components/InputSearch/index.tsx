import MagnifyingGlassIcon from "@/assets/svg/icons/magnifying-glass.svg";
import Icon from "../common/Icon";

export default function InputSearch() {
  return (
    <div className="w-80 h-11 relative">
      <input
        className="w-full h-full rounded-full pl-11 shadow-md border border-gray-30"
        placeholder="Buscar talento o puesto"
      />
      <Icon
        src={MagnifyingGlassIcon}
        className="absolute bottom-1/2 translate-y-1/2 translate-x-3/4"
      />
    </div>
  );
}
