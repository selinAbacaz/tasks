import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    //
    const [currColor, setColor] = useState<string>("pink");

    const colors: string[] = [
        "pink",
        "orange",
        "blue",
        "purple",
        "green",
        "yellow",
        "red",
        "cyan"
    ];
    //
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form style={{ display: "flex", justifyContent: "center" }}>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        value={color}
                        inline
                        name="color"
                        id={color}
                        label={color}
                        checked={currColor === color}
                        onChange={updateColor}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: currColor }}
            >
                You have chosen {currColor}
            </div>
        </div>
    );
}
