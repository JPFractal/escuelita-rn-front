import Avatar from "@/components/common/Avatar";
import EditableCard from "@/components/common/Container/EditableCard";
import Typography from "@/components/common/Typography";
import Experience from "@/types/Experience";
import { SimpleActionCardProps } from "@/types/common/SimpleActionCard";

interface ExperienceCardProps extends SimpleActionCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
  onAction = () => {},
  control = true,
}: ExperienceCardProps) {
  const start_date = experience.start_date.getFullYear();
  const end_date = experience.end_date
    ? experience.end_date.getFullYear()
    : "Presente";

  const years =
    end_date === "Presente"
      ? new Date().getFullYear() - start_date
      : end_date - start_date;

  return (
    <EditableCard onEdit={onAction} control={control}>
      <div className="flex gap-4 items-center">
        <Avatar size="md" src={experience.organization.photo} />
        <div className="flex flex-col gap-1">
          <Typography variant="text">{experience.organization.name}</Typography>
          <div className="flex gap-4">
            <Typography variant="support">
              {experience.grade && `${experience.grade} en `}
              {experience.position}
            </Typography>
            <Typography variant="support">
              {start_date} - {end_date}
            </Typography>
            {experience.type === "work" && (
              <Typography variant="support">
                {years} {years > 1 ? "años" : "año"}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </EditableCard>
  );
}
