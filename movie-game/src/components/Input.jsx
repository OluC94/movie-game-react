import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getCastList } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";
import { matchCheck } from "../utils/inputProcessor";
import { Appearance } from "./Appearance";

export const Input = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [actorQueryID, setActorQueryID] = useState("");

  // context
  const { startActor, endActor, filmography } = useContext(ActorContext);
  const {
    isAppearanceRound,
    setIsAppearanceRound,
    score,
    setScore,
    setAppearanceData,
  } = useContext(GameContext);
  // props
  const { answerList, setAnswerList, setIsValidAnswer } = answerData;

  // everything else
  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const checkActorApp = () => {
    return checkAppearance(inputAnswer, filmography);
    // get filmog from state
  };

  // check to see if input movie is correct
  const handleAppearanceInput = () => {
    const getResult = checkAppearance(inputAnswer, filmography);
    if (getResult.isValid) {
      getCastList(getResult.title_id).then((result) => {
        setAppearanceData(result);
        // this is where the new answers array will be changed
        // push an Appearance component with appearanceData as the prop
        setIsAppearanceRound(false);
      });
    }
  };

  const handleActorInput = () => {};

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (inputAnswer.length === 0) {
      // set validation method later
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
