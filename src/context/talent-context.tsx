"use client";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import talent_test_data from "@/_temp_data/talent";
import Talent, { TalentFull } from "@/types/Talent";
import fetchTreament from "@/utils/fetch-treatment";
import { POST_TALENT, REQ_TALENTS } from "@/requests/talents";
import { RegisterTalent } from "@/zodSchemas/registerSchema";
import adapterTalent from "@/adapters/talent";
import { REQ_REGISTER_METADATA } from "@/requests/metadata";
import RegisterMetadata from "@/types/RegisterMetadata";
import { onSubmitTalent } from "@/forms/form-actions/talent";

interface TalentContextProps {
    selectedTalent: TalentFull;
    setSelectedTalent: Dispatch<SetStateAction<TalentFull>>;
    talents: TalentFull[];
    metadata: RegisterMetadata;
    postTalent: Function;
}

export const TalentContext = createContext<TalentContextProps | undefined>(
    undefined
);

export default function TalentProvider({ children }: { children: any}) {
    const [selectedTalent, setSelectedTalent] = useState<TalentFull>(talent_test_data);
    const [talents, setTalents] = useState<Talent[]>([]);
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
        setTalents([talent_test_data, ...parsedTalents]);
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

    const postTalent = async (talent: RegisterTalent) => {
        const raw = await fetchTreament({
            request: POST_TALENT(talent),
            reqErrorMessage: "Error al crear el usuario",
        })
        if (!raw.ok) throw new Error(raw.message);
    }

    useEffect(() => {
        fetchTalents();
        fetchMetadata();
    }, [])

    const context: any = {
        selectedTalent,
        setSelectedTalent,
        talents,
        metadata,
        postTalent
    };

    return <TalentContext.Provider value={context}>{children}</TalentContext.Provider>
}