import React from 'react';
import Accordion from "./Accordion";

export const AccordionSample = () => (
    <Accordion title={"title"}>
        <Accordion title={"1"}>
            <div>
                1
            </div>
        </Accordion>
        <Accordion title={2}>
            <Accordion title={"2.1"}>
                2.1
            </Accordion>
        </Accordion>
    </Accordion>
);