import Avatar from "@/components/common/Avatar";
import EditIcon from "@/components/common/Icon/icons/edit";
import Typography from "@/components/common/Typography";
import Experience from "@/types/Experience";

export default function OrganizationCard({
  experience,
}: {
  experience: Experience;
}) {
  const startDate = experience.startDate.getFullYear();
  const endDate = experience.endDate
    ? experience.endDate.getFullYear()
    : "Presente";

  return (
    <div className="p-3 rounded-lg w-full flex gap-4 items-center relative bg-gray-50">
      <Avatar size="md" src={experience.organization.photo} />
      <div className="flex flex-col gap-1">
        <Typography variant="text">{experience.organization.name}</Typography>
        <div className="flex gap-4">
          <Typography variant="support">{experience.position}</Typography>
          <Typography variant="support">
            {startDate} - {endDate}
          </Typography>
          {experience.type === "work" && (
            <Typography variant="support">
              {endDate === "Presente"
                ? new Date().getFullYear() - startDate
                : endDate - startDate}{" "}
              años
            </Typography>
          )}
        </div>
      </div>
      <EditIcon size="lg" className="absolute bottom-50 right-3" />
    </div>
  );
}
