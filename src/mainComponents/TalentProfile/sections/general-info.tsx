import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import {
  TextPlaceIcon,
  TextPriceIcon,
} from "@/components/common/Typography/text-icon";
import RatingStars from "@/components/RatingStars";
import Icon from "@/components/common/Icon";

import EditIcon from "@/components/common/Icon/icons/edit";
import PhoneIcon from "@/assets/svg/icons/phone.svg";
import GitHubIcon from "@/assets/svg/icons/github.svg";
import LinkedInIcon from "@/assets/svg/icons/linkedin.svg";
import Link from "next/link";
import Button from "@/components/common/Button";
import Toogle from "@/components/common/Toogle";
import { TalentFull } from "@/types/Talent";
import Menu from "@/components/common/Menu";
import Option from "@/components/common/Menu/option";
import ArrowDownIcon from "@/components/common/Icon/icons/arrow-down";
import { palette } from "@/themes/colors";
import Modal from "@/components/common/Modal";
import EditSalary from "../forms/edit-salary";
import useToogle from "@/hooks/useToogle";
import ModalContent from "@/components/common/Container/ModalContent";
import EditSocialNetworks from "../forms/edit-social-networks";
import EditAvatar from "../forms/edit-avatar";

export default function TalentProfileGeneralInfo({
  talent,
}: {
  talent: TalentFull;
}) {
  const meanScore =
    talent.feedbacks.reduce((acum, feeback) => (acum += feeback.score), 0) /
    talent.feedbacks.length;

  const {
    flag: salaryFlag,
    on: onEditSalary,
    off: onCloseSalary,
  } = useToogle();

  const {
    flag: socialNetworkFlag,
    on: onEditSocialNetwork,
    off: onCloseSocialNetwork,
  } = useToogle();

  const {
    flag: avatarFlag,
    on: onEditAvatar,
    off: onCloseAvatar,
  } = useToogle();

  return (
    <section className="col-span-12 flex gap-7 items-center relative">
      <div className="relative">
        <Avatar size="xl" />
        <div
          className="bg-white-0 p-3 rounded-full shadow-md absolute bottom-0 right-0 cursor-pointer hover:bg-white-10"
          onClick={onEditAvatar}
        >
          <EditIcon />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Typography variant="text">{talent.name}</Typography>
          <Toogle on />
        </div>
        <div className="flex gap-2">
          <Typography variant="support">{talent.role}</Typography>
          <TextPlaceIcon text={`${talent.city}, ${talent.country}`} />
          <TextPriceIcon text={`${talent.salary_min} - ${talent.salary_max}`} />
          <Button
            StartIcon={<EditIcon />}
            variant="text"
            className="!p-0"
            onClick={onEditSalary}
          />
        </div>
        <div className="flex gap-2">
          <RatingStars rating={meanScore} />
          <Typography>{talent.feedbacks.length} feedbacks</Typography>
        </div>
      </div>
      <div className="flex gap-2 absolute right-0 top-0">
        <Menu
          title="Ver CV"
          color="sky"
          variant="text"
          intensity="light"
          EndIcon={<ArrowDownIcon color={palette.sky[10]} />}
          wide={false}
        >
          <Option>CV</Option>
          <Option>CV Fractal</Option>
        </Menu>
        <Button variant="contained" color="green" startIcon={PhoneIcon}>
          Contactar
        </Button>
      </div>
      <div className="flex gap-4 absolute right-0 bottom-0">
        <Icon
          src={GitHubIcon}
          size="lg"
          className="cursor-pointer"
          onClick={onEditSocialNetwork}
        />
        <Icon
          src={LinkedInIcon}
          size="lg"
          className="cursor-pointer"
          onClick={onEditSocialNetwork}
        />
      </div>

      <Modal open={salaryFlag} onClose={onCloseSalary}>
        <ModalContent
          onCancel={onCloseSalary}
          title="Agrega tu banda salarial"
          subtitle="Agrega el rango de tus expectativas salariales."
        >
          <EditSalary talent={talent} />
        </ModalContent>
      </Modal>

      <Modal open={socialNetworkFlag} onClose={onCloseSocialNetwork}>
        <ModalContent
          onCancel={onCloseSocialNetwork}
          title="Agrega tus medios sociales"
          subtitle="Agrega y muestra tus medios sociales."
        >
          <EditSocialNetworks talent={talent} />
        </ModalContent>
      </Modal>

      <Modal open={avatarFlag} onClose={onCloseAvatar}>
        <ModalContent
          onCancel={onCloseAvatar}
          title="Modifica tu foto de perfil"
          subtitle="Sube una nueva foto de perfil."
        >
          <EditAvatar />
        </ModalContent>
      </Modal>
    </section>
  );
}