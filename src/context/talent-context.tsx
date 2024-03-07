"use client";

import { createContext, useEffect, useState } from "react";
import * as TALENT_DEF from "@/_temp_data/talent";
import talents_test_data from "@/_temp_data/talents";
import Talent, { TalentFull } from "@/types/Talent";
import fetchTreament from "@/utils/fetch-treatment";
import { REQ_TALENTS } from "@/requests/talents";
import { RegisterTalent } from "@/zodSchemas/registerSchema";
import adapterTalent from "@/adapters/talent";

interface TalentContextProps {
    talent: TalentFull;
    talents: TalentFull[];
    getTalent: (idTalent: number) => TalentFull;
}

export const TalentContext = createContext<TalentContextProps | undefined>(
    undefined
);

export default function TalentProvider({ children }: { children: any}) {
    const [talent, setTalent] = useState<TalentFull>(TALENT_DEF.default);
    const [talents, setTalents] = useState<Talent[]>([talents_test_data[0]]);

    const getTalent = (idTalent: number): TalentFull => {
        return talent
    }

    const parseTalents = (talents: RegisterTalent[]) => {
        const parsedTalents: Talent[] = [];
        for (let talent of talents) {
            parsedTalents.push(adapterTalent(talent));
        }

        return parsedTalents;
    }

    const fetchTalents = async () => {
        const raw = await fetchTreament({
            request: REQ_TALENTS(),
            reqErrorMessage: "Error al cargar los talentos",
        })
        if (!raw.ok) throw new Error(raw.message);
        
        let talents: RegisterTalent[] = await raw.res?.json();
        let parsedTalents = parseTalents(talents);
        setTalents([talents_test_data[0], ...parsedTalents]);
    }

    useEffect(() => {
        fetchTalents();
    }, [])

    const context: any = {
        talent,
        talents,
        getTalent
    };

    return <TalentContext.Provider value={context}>{children}</TalentContext.Provider>
}