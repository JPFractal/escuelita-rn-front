"use client";

import TalentSummaryCard from "@/mainComponents/Cards/TalentSummaryCard";
import FilterBar from "@/components/FilterBar";
import TalentProfile from "@/mainComponents/TalentProfile";
import Button from "@/components/common/Button";
import useTalents from "@/hooks/useTalents";

import AddIcon from "@/assets/svg/icons/add.svg";
import Menu from "@/components/common/Menu";

export default function Home() {
  const { talents } = useTalents();

  return (
    <>
      <div className="col-span-12 grid gap-4 grid-cols-12">
        <div className="col-span-4 flex items-center">
          {/* <Typography variant="support">
            33 resultados disponibles para “Full-stack developer”
          </Typography> */}

          <Button variant="outlined" color="sky" startIcon={AddIcon}>
            Nuevo talento
          </Button>
        </div>
        <div className="col-span-8">
          <FilterBar />
        </div>
      </div>
      <div
        className="col-span-4 flex flex-col gap-2 overflow-y-scroll"
        style={{ maxHeight: "calc(100vh - 195px)" }}
      >
        {talents.map((talent, i) => (
          <TalentSummaryCard {...talent} selected={i == 0} />
        ))}
      </div>
      <div className="col-span-8">
        <div
          className="shadow-md w-full h-full border border-gray-30 rounded-lg pt-6 px-6"
          style={{ maxHeight: "calc(100vh - 195px)" }}
        >
          <TalentProfile idTalent={0} />
        </div>
      </div>
    </>
  );
}
