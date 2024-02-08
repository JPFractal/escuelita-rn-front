import { TalentFull } from "@/types/Talent";
import Typography from "@/components/common/Typography";
import Badge from "@/components/common/Badge";

export default function TalentProfileSkills({
  talent,
}: {
  talent: TalentFull;
}) {
  return (
    <section className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-8">
        <Typography variant="support" className="font-bold mb-3">
          Habilidades Técnicas
        </Typography>
        <div className="flex flex-wrap gap-2">
          {talent.techSkills.map((skill) => (
            <Badge color="sky" key={skill.name}>
              {skill.name} - {skill.years}
            </Badge>
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <Typography variant="support" className="font-bold mb-3">
          Habilidades Blandas
        </Typography>
        <div className="flex flex-wrap gap-2">
          {talent.softSkills.map((skill) => (
            <Badge color="pink" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
