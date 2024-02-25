"use client";

import useTalents from "@/hooks/useTalents";
import TalentSummaryCard from "../Cards/TalentSummaryCard";

export default function TalentCarousel() {
  const { talents } = useTalents();

  return (
    <div className="flex flex-col gap-2">
      {talents.map((talent, i) => (
        <TalentSummaryCard
          key={"summary-card-" + i}
          {...talent}
          selected={i == 0}
        />
      ))}
    </div>
  );
}
