import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editMode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const studentOrNot = isStudent ? "is a student" : "is not a student";

    // This is the Control
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Edit Mode</h3>

            <title> switch for edit mode</title>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-check"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateMode}
                    style={{ display: "flex", justifyContent: "center" }}
                />
            </div>
            <div>{editMode ? null : name + " " + studentOrNot}</div>

            <title> text box for name</title>
            <div>
                {editMode && (
                    <>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        />
                        <div>
                            The user is{" "}
                            {isStudent ? "a student" : "not a student"}.
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
