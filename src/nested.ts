import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const unPublished = questions.filter(
        (question: Question): boolean => question.published
    );

    return unPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    //
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            question.body.length > 0 ||
            question.expected.length > 0 ||
            question.options.length > 0
    );

    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const Found = questions.filter(
        (question: Question): boolean => question.id === id
    );
    if (Found.length > 0) {
        return Found[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const Found = questions.filter(
        (question: Question): boolean => question.id !== id
    );

    return Found;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justNames = questions.map(
        (question: Question): string => question.name
    );

    return justNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    //
    const sum = questions.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );

    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    //
    const sum = questions.reduce(
        (currentTotal: number, question: Question) =>
            question.published ? currentTotal + question.points : currentTotal,
        0
    );

    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    //
    const firstLine = "id,name,options,points,published" + "\n";

    const sentence = questions.reduce(
        (currentTotal: string, question: Question) =>
            questions.indexOf(question) === questions.length - 1
                ? currentTotal +
                  question.id.toString() +
                  "," +
                  question.name +
                  "," +
                  question.options.length.toString() +
                  "," +
                  question.points.toString() +
                  "," +
                  question.published.toString()
                : currentTotal +
                  question.id.toString() +
                  "," +
                  question.name +
                  "," +
                  question.options.length.toString() +
                  "," +
                  question.points.toString() +
                  "," +
                  question.published.toString() +
                  "\n",
        ""
    );

    return firstLine + sentence;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    //
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    //
    const newQuestions = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );

    return newQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    //
    if (questions.length <= 0) {
        return true;
    }
    //
    const model = questions[0].type;
    //
    const sameOrNot = questions.reduce(
        (currentTotal: boolean, question: Question) =>
            question.type === model
                ? (currentTotal = true)
                : (currentTotal = false),
        true
    );

    return sameOrNot;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newArray = [...questions, makeBlankQuestion(id, name, type)];

    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    //
    const newArray = questions.map(
        (question: Question): Question => ({
            ...question,
            name: question.id === targetId ? newName : question.name
        })
    );

    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    //
    const newArray = questions.map(
        (question: Question): Question => ({
            ...question,
            type: question.id === targetId ? newQuestionType : question.type,
            options:
                newQuestionType !== "multiple_choice_question" &&
                question.id === targetId
                    ? []
                    : question.options
        })
    );

    return newArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    // if traget id-> option array + new elem
    //if target option index === -1, new option added to end of option arr
    //else, option[target option index]= new option
    const newArray = questions.map(
        (question: Question): Question => ({
            ...question,
            options:
                question.id === targetId
                    ? helpEdit(question.options, targetOptionIndex, newOption)
                    : question.options
        })
    );

    return newArray;
}

export function helpEdit(
    options: string[],
    targetOption: number,
    newOption: string
): string[] {
    //
    if (targetOption === -1) {
        return [...options, newOption];
    } else {
        const unpacked = [...options];
        unpacked.splice(targetOption, 1, newOption);
        return unpacked;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    //
    const findQuestion = questions.find(
        (question: Question): boolean => question.id === targetId
    );

    if (findQuestion !== undefined) {
        const doubled = [...questions];
        doubled.splice(
            questions.indexOf(findQuestion) + 1,
            0,
            duplicateQuestion(newId, findQuestion)
        );
        return doubled;
    } else {
        return questions;
    }
}
