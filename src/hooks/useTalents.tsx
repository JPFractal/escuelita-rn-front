import { TalentContext } from "@/context/talent-context";
import { useContext } from "react";

export default function useTalents() {
  const context = useContext(TalentContext);
  if (!context) throw new Error("useTalent must be used inside TalentProvider");

  return context;
}
