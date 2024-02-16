import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import EditableCard from "@/components/common/Container/EditableCard";
import EditIcon from "@/components/common/Icon/icons/edit";
import Typography from "@/components/common/Typography";
import EditSocialNetworks from "@/mainComponents/TalentProfile/forms/edit-social-networks";
import Experience from "@/types/Experience";
import { MouseEventHandler } from "react";

export default function OrganizationCard({
  experience,
  onAction = () => {},
}: {
  experience: Experience;
  onAction?: MouseEventHandler;
}) {
  const start_date = experience.start_date.getFullYear();
  const end_date = experience.end_date
    ? experience.end_date.getFullYear()
    : "Presente";

  const years =
    end_date === "Presente"
      ? new Date().getFullYear() - start_date
      : end_date - start_date;

  return (
    <EditableCard onEdit={onAction}>
      <div className="flex gap-4 items-center">
        <Avatar size="md" src={experience.organization.photo} />
        <div className="flex flex-col gap-1">
          <Typography variant="text">{experience.organization.name}</Typography>
          <div className="flex gap-4">
            <Typography variant="support">{experience.position}</Typography>
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
