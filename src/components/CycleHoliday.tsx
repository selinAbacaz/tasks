import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //
    const [holiday, changeHoliday] = useState<string>("🎃");
    //
    const Alphabetically = (): void => {
        if (holiday === "🎄") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("☪️");
        } else if (holiday === "☪️") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("💖");
        } else if (holiday === "💖") {
            changeHoliday("🎄");
        }
    };

    const byDate = (): void => {
        if (holiday === "🎄") {
            changeHoliday("💖");
        } else if (holiday === "💖") {
            changeHoliday("☪️");
        } else if (holiday === "☪️") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("🎄");
        }
    };

    return (
        <>
            <div>
                <Button onClick={Alphabetically}> By Alphabet</Button>
            </div>
            <div>
                <Button onClick={byDate}>By Year</Button>
            </div>
            Holiday: <span>{holiday}</span>.
        </>
    );
}
