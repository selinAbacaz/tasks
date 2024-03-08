import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, changeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>

            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Your Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div> {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
