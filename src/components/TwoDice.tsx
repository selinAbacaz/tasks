import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    //
    const [num1, changeNum1] = useState<number>(4);
    const [num2, changeNum2] = useState<number>(2);

    const rollLeft = (): void => {
        changeNum1(d6);
    };
    const rollRight = (): void => {
        changeNum2(d6);
    };

    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                The answer is <span data-testid="left-die">{num1}</span>.
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                The answer is <span data-testid="right-die">{num2}</span>.
            </div>
            <div>
                {num1 === 1 && num2 === 1 && <span>Lose</span>};
                {num1 === num2 && num1 !== 1 && <span> Win</span>};
            </div>
        </div>
    );
}
