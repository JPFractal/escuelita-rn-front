import { MouseEventHandler } from "react";
import Button from "../../Button";
import EditIcon from "../../Icon/icons/edit";

interface EditableCardProps {
  children: React.ReactNode;
  onEdit: MouseEventHandler;
}

export default function EditableCard({ children, onEdit }: EditableCardProps) {
  return (
    <div className="p-3 rounded-lg w-full flex gap-4 items-center bg-gray-50">
      <div className="flex-1">{children}</div>
      <Button
        className="cursor-pointer !p-0"
        variant="text"
        color="smoke"
        StartIcon={<EditIcon size="lg" />}
        onClick={onEdit}
      />
    </div>
  );
}
