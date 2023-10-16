"use client";

import { HeartPulse } from "lucide-react";

import {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const BPMSetting = () => {
    return (
        <AccordionItem value="item-1" className="px-4">
            <AccordionTrigger>
                <HeartPulse size={22} className="text-slate-500" />
                BPM
            </AccordionTrigger>
            <AccordionContent>BPM Input will be here</AccordionContent>
        </AccordionItem>
    );
};

export default BPMSetting;
