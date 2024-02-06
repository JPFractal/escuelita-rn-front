"use client";

import UserSummaryCard from "@/components/Cards/UserSummaryCard";
import FilterBar from "@/components/FilterBar";
import Typography from "@/components/common/Typography";
import useTalents from "@/hooks/useTalents";

export default function Home() {
  const { talents } = useTalents();

  return (
    <>
      <div className="col-span-12 grid gap-4 grid-cols-12">
        <div className="col-span-4 flex items-center">
          <Typography variant="support">
            33 resultados disponibles para “Full-stack developer”
          </Typography>
        </div>
        <div className="col-span-8">
          <FilterBar />
        </div>
      </div>
      <div className="col-span-4 flex flex-col gap-2">
        {talents.map((talent, i) => (
          <UserSummaryCard {...talent} selected={i == 0} />
        ))}
      </div>
      <div className="col-span-8">
        <article></article>
      </div>
    </>
  );
}
