import { useState } from "react";
import * as TALENT_DEF from "@/_temp_data/talent";

export default function useTalent(id: string | number) {
  const [talent, setTalent] = useState(TALENT_DEF.default);

  return {
    talent,
  };
}
