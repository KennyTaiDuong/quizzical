import { useState, useEffect } from "react";
import "../App.css";
import Intro from "./Intro";
import Card from "./Card";
import Score from "./Score";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function App() {
  const [started, toggleStarted] = useState(false);
  const [checkedAnswers, setCheckedAnswers] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [userChoice, setUserChoice] = useState({
    question0: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  function handleStartBtn() {
    toggleStarted((prevState) => !prevState);
  }

  function checkAnswers() {
    const userChoiceArray = Object.values(userChoice);
    let userScoreArray = [];
    let points = 0;
    for (let i = 0; i < 5; i++) {
      if (userChoiceArray[i] === correctAnswersArray[i]) {
        points += 1;
        userScoreArray.push(true);
      } else {
        userScoreArray.push(false);
      }
    }
    console.log(userScoreArray, points);
    setCheckedAnswers(true);
    setScore(points);
  }

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=21&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();
      setQuestions(data.results);
    }
    fetchQuestions();

    const abortController = new AbortController();

    return () => {
      abortController.abort();
    };
  }, []);

  const correctAnswersArray = [];

  useEffect(() => {
    const choices = questions.map((question) => {
      const decodedChoices = question.incorrect_answers.map((item) =>
        decode(item)
      );
      decodedChoices.push(decode(question.correct_answer));
      return decodedChoices.sort(() => 0.5 - Math.random());
    });
    setShuffledChoices(choices);
  }, [questions]);

  const cardElements = questions.map((question, index) => {
    const decodedQuestion = decode(question.question);
    const decodedChoices = shuffledChoices[index];
    const questionId = `question${index}`;
    correctAnswersArray.push(decode(question.correct_answer));

    return (
      <Card
        key={nanoid()}
        id={questionId}
        question={decodedQuestion}
        choices={decodedChoices}
        selectedChoices={Object.values(userChoice)[index]}
        setUserChoice={(obj) => setUserChoice(obj)}
        checkedAnswers={checkedAnswers}
        correctAnswer={correctAnswersArray[index]}
      />
    );
  });

  return (
    <div>
      {!started && (
        <Intro
          isStarted={() => handleStartBtn()}
          setDifficulty={(diff) => setDifficulty(diff)}
        />
      )}
      {started && (
        <div className="question-page">
          {cardElements}
          {!checkedAnswers && (
            <button className="trivia-btn" onClickCapture={checkAnswers}>
              Check Answers
            </button>
          )}
          {checkedAnswers && <Score score={score} />}
        </div>
      )}
    </div>
  );
}
