import React, { useState } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getCastList } from "../utils/api";
import { checkAppearance, checkCast, checkWinner } from "../utils/game-utils";
import { Actor } from "./Actor";
import { Appearance } from "./Appearance";
import { Incorrect } from "./Incorrect";

export const Input = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");

  // context
  const { filmography, targetFilmography } = useContext(ActorContext);
  const {
    isAppearanceRound,
    setIsAppearanceRound,
    score,
    setScore,
    setAppearanceData,
    appearanceData,
    setGameWon,
    isChecking,
    setIsChecking,
    isEmptyAnswer,
    setIsEmptyAnswer,
    isIncorrect,
    setIsIncorrect,
  } = useContext(GameContext);
  // props
  const { answerList, setAnswerList } = answerData;

  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  // check to see if input movie is correct
  const handleAppearanceInput = () => {
    const getResult = checkAppearance(inputAnswer, filmography);
    if (getResult.isValid) {
      getCastList(getResult.title_id)
        .then((result) => {
          setIsChecking(false);
          setIsIncorrect(false);
          setAppearanceData(result);
          setAnswerList([...answerList, <Appearance props={result} />]);
          setIsAppearanceRound(false);
          setInputAnswer("");
        })
        .then(() => {
          if (checkWinner(getResult.title_id, targetFilmography)) {
            setIsIncorrect(false);
            setGameWon(true);
          }
        });
    } else {
      setIsChecking(false);
      setIsIncorrect(true);
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
  };

  // check to see if input actor is correct
  const handleActorInput = () => {
    const getResult = checkCast(inputAnswer, appearanceData);
    if (getResult.isValid) {
      setIsChecking(false);
      setIsIncorrect(false);
      setAnswerList([...answerList, <Actor fetchedActorData={getResult} />]);
      setIsAppearanceRound(true); // flip back to app round
      setInputAnswer("");
    } else {
      setIsChecking(false);
      setIsIncorrect(true);
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setIsIncorrect(false);
    if (inputAnswer.length === 0) {
      setIsEmptyAnswer(true);
    } else {
      setIsEmptyAnswer(false);
      setIsChecking(true);
      if (isAppearanceRound) {
        handleAppearanceInput();
      } else {
        handleActorInput();
      }
      setScore((currScore) => {
        return currScore + 10;
      });
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="new-answer"></label>
        <br />
        <section>{isChecking ? "..." : null}</section>
        {isIncorrect ? <section>Incorrect, try again!</section> : null}
        <br />
        <textarea
          id="new-answer"
          placeholder="Enter your answer"
          value={inputAnswer}
          onChange={handleAnswerInput}
        ></textarea>
        <br />
        {isEmptyAnswer ? (
          <section>Your answer must be at least 1 character</section>
        ) : null}
        <br />
        <button className="custom-button" onClick={handleAnswerSubmit}>
          Submit
        </button>
        <br />
        <section className="score">Score: {score}</section>
      </form>
    </section>
  );
};
