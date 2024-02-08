"use client";

import useToogle from "@/hooks/useToogle";
import HeartFilledIcon from "@/assets/svg/icons/heart-filled.svg";
import HeartEmptyIcon from "@/assets/svg/icons/heart-empty.svg";
import Icon from "../Icon";

export default function Toogle({ on = false }: { on?: boolean }) {
  const { flag, toogle } = useToogle(on);

  return (
    <button onClick={toogle} className="focus:border-none focus:outline-none">
      <Icon src={flag ? HeartFilledIcon : HeartEmptyIcon} />
    </button>
  );
}
