import { TalentFull } from "@/types/Talent";
import Typography from "@/components/common/Typography";
import Badge from "@/components/common/Badge";
import ListContainer from "@/components/common/Container/List";

export default function TalentProfileSkills({
  talent,
}: {
  talent: TalentFull;
}) {
  return (
    <section className="col-span-12 flex gap-4">
      <ListContainer
        name="Habilidades Técnicas"
        axis={0}
        mainContainerClass="w-3/5"
      >
        {talent.techSkills.map((skill) => (
          <Badge color="sky" key={skill.name}>
            {skill.name} - {skill.years}
          </Badge>
        ))}
      </ListContainer>
      <ListContainer
        name="Habilidades Blandas"
        axis={0}
        mainContainerClass="w-2/5"
      >
        {talent.softSkills.map((skill) => (
          <Badge color="pink" key={skill}>
            {skill}
          </Badge>
        ))}
      </ListContainer>
    </section>
  );
}
