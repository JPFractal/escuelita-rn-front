"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import * as TALENT_DEF from "@/_temp_data/talent";
import talents_test_data from "@/_temp_data/talents";
import Talent, { TalentFull } from "@/types/Talent";
import fetchTreament from "@/utils/fetch-treatment";
import { REQ_TALENTS } from "@/requests/talents";
import { RegisterTalent } from "@/zodSchemas/registerSchema";
import adapterTalent from "@/adapters/talent";
import { REQ_REGISTER_METADATA } from "@/requests/metadata";
import RegisterMetadata from "@/types/RegisterMetadata";

interface TalentContextProps {
    selectedTalent: TalentFull;
    setSelectedTalent: Dispatch<SetStateAction<TalentFull>>;
    talents: TalentFull[];
    metadata: RegisterMetadata;
}

export const TalentContext = createContext<TalentContextProps | undefined>(
    undefined
);

export default function TalentProvider({ children }: { children: any}) {
    const [selectedTalent, setSelectedTalent] = useState<TalentFull>(TALENT_DEF.default);
    const [talents, setTalents] = useState<Talent[]>([talents_test_data[0]]);
    const [metadata, setMetadata] = useState<RegisterMetadata | null>();

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
        let parsedTalents: Talent[] = parseTalents(talents);
        setTalents([talents_test_data[0], ...parsedTalents]);
    }

    const fetchMetadata = async () => {
        const raw = await fetchTreament({
            request: REQ_REGISTER_METADATA(),
            reqErrorMessage: "Error al cargar la metadata del registro",
        })
        if (!raw.ok) throw new Error(raw.message);
        
        let registerMetadata = await raw.res?.json();
        setMetadata(registerMetadata);
    }

    useEffect(() => {
        fetchTalents();
        fetchMetadata();
    }, [])

    const context: any = {
        selectedTalent,
        setSelectedTalent,
        talents,
        metadata
    };

    return <TalentContext.Provider value={context}>{children}</TalentContext.Provider>
}