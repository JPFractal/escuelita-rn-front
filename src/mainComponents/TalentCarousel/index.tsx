"use client";

import useTalents from "@/hooks/useTalents";
import TalentSummaryCard from "../Cards/TalentSummaryCard";

export default function TalentCarousel() {
  const { talents, selectedTalent, setSelectedTalent } = useTalents();

  return (
    <div className="flex flex-col gap-2">
      {talents.map((talent, i) => (
        <div
          key={"summary-card-" + i}
          onClick={() => setSelectedTalent(talent)}
        >
          <TalentSummaryCard
            {...talent}
            selected={talent.id == selectedTalent.id}
          />
        </div>
      ))}
    </div>
  );
}
