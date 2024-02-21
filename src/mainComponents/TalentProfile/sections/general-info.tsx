import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import {
  TextPlaceIcon,
  TextPriceIcon,
} from "@/components/common/Typography/text-icon";
import RatingStars from "@/components/RatingStars";

import EditIcon from "@/components/common/Icon/icons/edit";
import Button from "@/components/common/Button";
import { TalentFull } from "@/types/Talent";
import Menu from "@/components/common/Menu";
import ArrowDownIcon from "@/components/common/Icon/icons/arrow-down";
import { palette } from "@/themes/colors";
import Modal from "@/components/common/Modal";
import FormFieldsSalary from "@/forms/form-fields/salary";
import useToogle from "@/hooks/useToogle";
import ModalContent from "@/components/common/Container/ModalContent";
import EditAvatar from "@/forms/form-fields/avatar";
import PhoneIcon from "@/components/common/Icon/icons/phone";
import GitHubIcon from "@/components/common/Icon/icons/github";
import LinkedInIcon from "@/components/common/Icon/icons/linkedin";
import MenuToogle from "@/components/common/Menu/toogle-list";
import FormFieldsSocialNetworks from "@/forms/form-fields/social-networks";

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
        <Button
          className="bg-white-0 !p-3 !rounded-full shadow-md absolute bottom-0 right-0"
          onClick={onEditAvatar}
          color="smoke"
          variant="text"
          StartIcon={<EditIcon />}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Typography variant="text">{talent.name}</Typography>
          <MenuToogle
            initItems={["Mis favoritos", "Backups"]}
            initMemory={["Backups"]}
          />
        </div>
        <div className="flex gap-2">
          <Typography variant="support">{talent.role}</Typography>
          <TextPlaceIcon text={`${talent.city}, ${talent.country}`} />
          <TextPriceIcon text={`${talent.salary_min} - ${talent.salary_max}`} />
          <Button
            StartIcon={<EditIcon />}
            variant="text"
            className="!p-0"
            color="smoke"
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
          EndIcon={<ArrowDownIcon color={palette.sky[10]} />}
          wide={false}
          items={["CV", "CV Fractal"]}
        />
        <Button
          variant="contained"
          color="green"
          StartIcon={<PhoneIcon color="#fff" />}
        >
          Contactar
        </Button>
      </div>
      <div className="flex gap-4 absolute right-0 bottom-0">
        <GitHubIcon
          size="lg"
          className="cursor-pointer"
          color="#98A2B3"
          onClick={onEditSocialNetwork}
        />
        <LinkedInIcon
          size="lg"
          className="cursor-pointer"
          color="#98A2B3"
          onClick={onEditSocialNetwork}
        />
      </div>

      <Modal open={salaryFlag} onClose={onCloseSalary}>
        <ModalContent
          onCancel={onCloseSalary}
          title="Agrega tu banda salarial"
          subtitle="Agrega el rango de tus expectativas salariales."
        >
          <FormFieldsSalary talent={talent} />
        </ModalContent>
      </Modal>

      <Modal open={socialNetworkFlag} onClose={onCloseSocialNetwork}>
        <ModalContent
          onCancel={onCloseSocialNetwork}
          title="Agrega tus medios sociales"
          subtitle="Agrega y muestra tus medios sociales."
        >
          <FormFieldsSocialNetworks talent={talent} />
        </ModalContent>
      </Modal>

      <Modal open={avatarFlag} onClose={onCloseAvatar}>
        <ModalContent
          onCancel={onCloseAvatar}
          title="Modifica tu foto de perfil"
          subtitle="Sube una nueva foto de perfil."
          confirmButtonText="Subir"
        >
          <EditAvatar />
        </ModalContent>
      </Modal>
    </section>
  );
}
