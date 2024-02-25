import FilterBar, { FilterBarLeftSide } from "@/components/FilterBar";
import TalentProfile from "@/mainComponents/TalentProfile";
import TalentCarousel from "@/mainComponents/TalentCarousel";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-2xl py-4 px-10 mx-auto grid gap-4 grid-cols-12">
        <div className="col-span-12 flex gap-4 flex-col">
          <div className="flex gap-4">
            <div className="left-side flex flex-col gap-4 min-w-max">
              <FilterBarLeftSide />
              <div
                className="overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 195px)" }}
              >
                <TalentCarousel />
              </div>
            </div>
            <div className="right-side flex flex-col gap-4">
              <FilterBar />
              <div className="shadow-md w-full h-full border border-gray-30 rounded-lg pt-6 px-6">
                <TalentProfile idTalent={0} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
