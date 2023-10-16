"use client";

import { Music3 } from "lucide-react";

import {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

const TimeSignatureSetting = () => {
    return (
        <AccordionItem value="item-2" className="px-4">
            <AccordionTrigger>
                <Music3 size={22} className="text-slate-500" />
                Time Signature
            </AccordionTrigger>
            <AccordionContent>
                Time Signature select will be here
            </AccordionContent>
        </AccordionItem>
    );
};

export default TimeSignatureSetting;
