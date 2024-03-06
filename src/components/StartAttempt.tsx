import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //
    const [attempts, remainingAttempts] = useState<number>(4);
    const [progress, isInProgress] = useState<boolean>(false);
    //
    const Start = (): void => {
        remainingAttempts(attempts - 1);
        isInProgress(!progress);
    };
    const Mulligan = (): void => {
        remainingAttempts(attempts + 1);
    };
    const Stop = (): void => {
        isInProgress(!progress);
    };

    return (
        <div>
            <div>
                Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button onClick={Start} disabled={progress || attempts === 0}>
                    Start Quiz
                </Button>
                <Button onClick={Stop} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button onClick={Mulligan} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
