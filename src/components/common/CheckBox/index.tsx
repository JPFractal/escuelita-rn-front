import CheckIcon from "../Icon/icons/check";
import Typography from "../Typography";

interface CheckBoxProps {
  label?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  onClick?: any;
  className?: string;
}

export default function CheckBox({
  label = "Label",
  name = "checkbox",
  checked = false,
  value = "",
  onClick = () => {},
  className,
}: CheckBoxProps) {
  return (
    <fieldset className={className}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
        <div
          className={`rounded-sm w-4 h-4 flex items-center justify-center ${
            checked ? "bg-sky-10" : "border border-gray-30"
          }`}
        >
          {checked && <CheckIcon color="white" />}
        </div>

        <Typography variant="text-2">{label}</Typography>

        <input
          type={"checkbox"}
          name={name}
          checked={checked}
          className="hidden"
          value={value}
          onChange={(e) => {
            e.target.checked = checked;
          }}
        />
      </div>
    </fieldset>
  );
}
