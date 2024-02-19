import Experience from "@/types/Experience";
import dateParser from "@/utils/date-parser";

export function FormAdapter(experience: Experience) {
  return {
    id: experience.id,
    organization: experience.organization.name,
    position: experience.position,
    grade: experience.grade ?? "",
    start_date: dateParser(experience.start_date),
    end_date: dateParser(experience.end_date),
  };
}
