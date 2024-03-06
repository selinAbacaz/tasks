import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //
    const [question, changeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    const currentQuestion = (): void => {
        if (question === "short_answer_question") {
            changeQuestion("multiple_choice_question");
        } else {
            changeQuestion("short_answer_question");
        }
    };

    return (
        <div>
            <Button onClick={currentQuestion}>Change Type</Button>
            {question === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
