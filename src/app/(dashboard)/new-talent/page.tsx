import Button from "@/components/common/Button";
import Paper from "@/components/common/Container/Paper/intex";
import Typography from "@/components/common/Typography";
import TalentRegister from "@/mainComponents/TalentRegister";

export default function Page() {
  return (
    <main className="flex justify-center p-3">
      <TalentRegister
        className="px-5 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 270px)" }}
      />
    </main>
  );
}
