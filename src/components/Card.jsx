import { useState } from "react";
import "../App.css";

export default function Card(props) {
  const {
    id,
    choices,
    question,
    selectedChoices,
    setUserChoice,
    checkedAnswers,
    correctAnswer,
  } = props;

  function handleChange(event) {
    setUserChoice((prevState) => {
      return {
        ...prevState,
        [id]: event.target.value,
      };
    });
  }

  console.log(correctAnswer);

  return (
    <div className="question-container">
      <h3 className="question-text">{question}</h3>
      <div className="choices-container">
        <input
          type="radio"
          name={id}
          value={choices[0]}
          id={`${id}-first`}
          onChange={handleChange}
          checked={
            !checkedAnswers && selectedChoices === choices[0] ? true : false
          }
          disabled={checkedAnswers}
        />
        <label
          htmlFor={`${id}-first`}
          className={
            checkedAnswers && correctAnswer === choices[0]
              ? "correct-answer"
              : checkedAnswers && selectedChoices === choices[0]
              ? "wrong-answer"
              : checkedAnswers
              ? "faded"
              : ""
          }
        >
          {choices[0]}
        </label>
        <input
          type="radio"
          name={id}
          value={choices[1]}
          id={`${id}-second`}
          onChange={handleChange}
          checked={
            !checkedAnswers && selectedChoices === choices[1] ? true : false
          }
          disabled={checkedAnswers}
        />
        <label
          htmlFor={`${id}-second`}
          className={
            checkedAnswers && correctAnswer === choices[1]
              ? "correct-answer"
              : checkedAnswers && selectedChoices === choices[1]
              ? "wrong-answer"
              : checkedAnswers
              ? "faded"
              : ""
          }
        >
          {choices[1]}
        </label>
        <input
          type="radio"
          name={id}
          value={choices[2]}
          id={`${id}-third`}
          onChange={handleChange}
          checked={
            !checkedAnswers && selectedChoices === choices[2] ? true : false
          }
          disabled={checkedAnswers}
        />
        <label
          htmlFor={`${id}-third`}
          className={
            checkedAnswers && correctAnswer === choices[2]
              ? "correct-answer"
              : checkedAnswers && selectedChoices === choices[2]
              ? "wrong-answer"
              : checkedAnswers
              ? "faded"
              : ""
          }
        >
          {choices[2]}
        </label>
        <input
          type="radio"
          name={id}
          value={choices[3]}
          id={`${id}-fourth`}
          onChange={handleChange}
          checked={
            !checkedAnswers && selectedChoices === choices[3] ? true : false
          }
          disabled={checkedAnswers}
        />
        <label
          htmlFor={`${id}-fourth`}
          className={
            checkedAnswers && correctAnswer === choices[3]
              ? "correct-answer"
              : checkedAnswers && selectedChoices === choices[3]
              ? "wrong-answer"
              : checkedAnswers
              ? "faded"
              : ""
          }
        >
          {choices[3]}
        </label>
      </div>
      <hr />
    </div>
  );
}
