"use client";

import BPMSetting from "./bpm-setting";
import TimeSignatureSetting from "./time-signature-setting";

import { Accordion } from "@/components/ui/accordion";

const SidebarSettings = () => {
    return (
        <Accordion type="multiple" className="w-full">
            <BPMSetting />
            <TimeSignatureSetting />
        </Accordion>
    );
};

export default SidebarSettings;
