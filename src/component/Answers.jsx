import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const shuffedAnswers = useRef();

  if (!shuffedAnswers.current) {
    shuffedAnswers.current = [...answers];
    shuffedAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffedAnswers.current.map((answer) => {
        let isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
