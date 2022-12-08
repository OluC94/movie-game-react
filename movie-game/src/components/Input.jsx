import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getCastList } from "../utils/api";
import { checkAppearance, checkCast } from "../utils/game-utils";
import { matchCheck } from "../utils/inputProcessor";
import { Appearance } from "./Appearance";
import { Incorrect } from "./Incorrect";

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
    } else {
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
  };

  const handleActorInput = () => {
    const getResult = checkCast(inputAnswer, "where is the cast list data?");
    // create check Cast function
    // bring the cast list from Little Women into state
  };

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
