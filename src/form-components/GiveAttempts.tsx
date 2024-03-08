import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, leftAttempts] = useState<number>(3);
    const [attempts2, addAttempts] = useState<string>("");

    const deleteAttempts = (): void => {
        leftAttempts(attempts - 1);
    };

    const addFromInput = (): void => {
        leftAttempts(parseInt(attempts2) + attempts || attempts);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>

            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attempts2}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        addAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button onClick={deleteAttempts} disabled={attempts === 0}>
                    use
                </Button>
                <Button onClick={addFromInput}>gain</Button>
            </div>
        </div>
    );
}
