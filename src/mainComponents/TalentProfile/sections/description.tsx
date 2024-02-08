import Icon from "@/components/common/Icon";
import EditIcon from "@/components/common/Icon/icons/edit";
import Typography from "@/components/common/Typography";
import { TalentFull } from "@/types/Talent";
import Link from "next/link";

export default function TalentProfileDescription({
  talent,
}: {
  talent: TalentFull;
}) {
  return (
    <section className="col-span-12 flex">
      <Typography>{talent.description}</Typography>
      <Link href={""}>
        <EditIcon />
      </Link>
    </section>
  );
}
