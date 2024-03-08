import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>Which is Correct?</Form.Label>
                    <Form.Select value={answer} onChange={updateAnswer}>
                        {options.map((option: string, index) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                Your answer is {answer}.
            </div>

            <div> {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
