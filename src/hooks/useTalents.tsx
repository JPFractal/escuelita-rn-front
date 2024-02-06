import talents_test_data from "@/_temp_data/talents";
import { useState } from "react";

export default function useTalents() {
  const [talents, setTalents] = useState(talents_test_data);

  return {
    talents,
  };
}
