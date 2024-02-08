import Avatar from "@/components/common/Avatar";
import EditIcon from "@/components/common/Icon/icons/edit";
import Typography from "@/components/common/Typography";

export default function OrganizationCard() {
  return (
    <div className="p-3 rounded-lg w-full flex gap-4 items-center relative bg-gray-50">
      <Avatar size="md" />
      <div className="flex flex-col gap-1">
        <Typography variant="text">FRACTAL</Typography>
        <div className="flex gap-4">
          <Typography variant="support">Desarrollador Full-Stack</Typography>
          <Typography variant="support">2015 - 2021</Typography>
          <Typography variant="support">6 años</Typography>
        </div>
      </div>
      <EditIcon size="lg" className="absolute bottom-50 right-3" />
    </div>
  );
}
