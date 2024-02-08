import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import {
  TextPlaceIcon,
  TextPriceIcon,
} from "@/components/common/Typography/text-icon";
import RatingStars from "@/components/RatingStars";
import Icon from "@/components/common/Icon";

import EditIcon from "@/assets/svg/icons/edit.svg";
import PhoneIcon from "@/assets/svg/icons/phone.svg";
import ArrowDown from "@/assets/svg/icons/arrow-down.svg";
import GitHubIcon from "@/assets/svg/icons/github.svg";
import LinkedInIcon from "@/assets/svg/icons/linkedin.svg";
import Link from "next/link";
import Button from "@/components/common/Button";
import Toogle from "@/components/common/Toogle";
import { TalentFull } from "@/types/Talent";

export default function TalentProfileGeneralInfo({
  talent,
}: {
  talent: TalentFull;
}) {
  const meanScore = talent.feedbacks.reduce(
    (acum, feeback) => (acum += feeback.score),
    0
  );

  return (
    <section className="col-span-12 flex gap-7 items-center relative">
      <div className="relative">
        <Avatar size="xl" />
        <Link href="">
          <div className="bg-[#fff] p-3 rounded-full shadow-md absolute bottom-0 right-0">
            <Icon src={EditIcon} size="xs" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Typography variant="text">{talent.name}</Typography>
          <Toogle on />
        </div>
        <div className="flex gap-2">
          <Typography variant="support">{talent.role}</Typography>
          <TextPlaceIcon text={`${talent.city}, ${talent.country}`} />
          <TextPriceIcon text={`${talent.salaryMin} - ${talent.salaryMax}`} />
        </div>
        <div className="flex gap-2">
          <RatingStars rating={meanScore} />
          <Typography>{talent.feedbacks.length} feedbacks</Typography>
        </div>
      </div>
      <div className="flex gap-2 absolute right-0 top-0">
        <Button variant="text" color="sky" endIcon={ArrowDown} iconSize="lg">
          Ver CV
        </Button>
        <Button variant="contained" color="green" startIcon={PhoneIcon}>
          Contactar
        </Button>
      </div>
      <div className="flex gap-4 absolute right-0 bottom-0">
        <Icon src={GitHubIcon} size="lg" />
        <Icon src={LinkedInIcon} size="lg" />
      </div>
    </section>
  );
}
