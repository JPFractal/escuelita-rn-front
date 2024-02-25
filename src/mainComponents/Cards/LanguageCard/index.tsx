import RatingStars from "@/components/RatingStars";
import Avatar from "@/components/common/Avatar";
import EditableCard from "@/components/common/Container/EditableCard";
import ShieldCheckIcon from "@/components/common/Icon/icons/shield-check";
import StarIcon from "@/components/common/Icon/icons/star";
import TextField from "@/components/common/TextField";
import Tooltip from "@/components/common/Tooltip";
import Typography from "@/components/common/Typography";
import TextNdSupport from "@/components/common/Typography/text-nd-support";
import { LANGUAGE_LEVELS } from "@/constraints/Values/language-levels";
import { palette } from "@/themes/colors";
import Experience from "@/types/Experience";
import Language from "@/types/Language";
import { SimpleActionCardProps } from "@/types/common/SimpleActionCard";
import { MouseEventHandler } from "react";

interface LanguageCardProps extends SimpleActionCardProps {
  language: Language;
}

export default function LanguageCard({
  language,
  onAction = () => {},
  control = true,
}: LanguageCardProps) {
  return (
    <EditableCard onEdit={onAction} control={control}>
      <div className="relative flex items-center">
        <div className="flex items-center gap-4 flex-1">
          <TextNdSupport
            className="min-w-17"
            text={language.name}
            support={LANGUAGE_LEVELS[language.level - 1].label}
          />
          <RatingStars rating={language.level} />
        </div>

        {/* Discontinued in design */}
        {/* {language.checked && ( 
          <Tooltip title="Validado por el reclutador">
            <ShieldCheckIcon color={palette.sky["10"]} size="lg" />
          </Tooltip>
        )} */}
      </div>
    </EditableCard>
  );
}
