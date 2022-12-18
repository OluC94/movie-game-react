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
  const [isChecking, setIsChecking] = useState(false);

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
      getCastList(getResult.title_id).then((result) => {
        setAppearanceData(result);
        setAnswerList([...answerList, <Appearance props={result} />]);
        setIsAppearanceRound(false);
        setInputAnswer("");
      });

      if (checkWinner(getResult.title_id, targetFilmography)) {
        setGameWon(true);
      }
    } else {
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
  };

  // check to see if input actor is correct
  const handleActorInput = () => {
    const getResult = checkCast(inputAnswer, appearanceData);
    if (getResult.isValid) {
      setAnswerList([...answerList, <Actor fetchedActorData={getResult} />]);
      setIsAppearanceRound(true); // flip back to app round
      setInputAnswer("");
    } else {
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (inputAnswer.length === 0) {
      // add state that displays message
    } else {
      setIsChecking(true);
      if (isAppearanceRound) {
        handleAppearanceInput();
      } else {
        handleActorInput();
      }
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="new-answer"></label>
        <br />
        <section>{isChecking ? "..." : null}</section>
        <textarea
          id="new-answer"
          placeholder="Enter your answer"
          value={inputAnswer}
          onChange={handleAnswerInput}
        ></textarea>
        <br />
        <button onClick={handleAnswerSubmit}>Submit</button>
        <br />
        <section>Score: {score}</section>
      </form>
    </section>
  );
};
