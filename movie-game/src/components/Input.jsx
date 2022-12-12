import React, { useState } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getCastList } from "../utils/api";
import {
  checkAppearance,
  checkCast,
  updateFilmography,
} from "../utils/game-utils";
import { Actor } from "./Actor";
import { Appearance } from "./Appearance";
import { Incorrect } from "./Incorrect";

export const Input = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [actorQueryID, setActorQueryID] = useState("");

  // context
  const { startActor, endActor, filmography, setFilmography } =
    useContext(ActorContext);
  const {
    isAppearanceRound,
    setIsAppearanceRound,
    score,
    setScore,
    setAppearanceData,
    appearanceData,
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
    console.log(filmography);
  };

  // check to see if input actor is correct
  const handleActorInput = () => {
    const getResult = checkCast(inputAnswer, appearanceData);
    if (getResult.isValid) {
      // figure out state that needs to be set here
      setAnswerList([
        ...answerList,
        <Actor fetchedActorData={getResult} setFilmography={setFilmography} />,
      ]);
      // the actor component sets the new filmography
      console.log(getResult);

      setIsAppearanceRound(true); // flip back to app round
      setInputAnswer("");
    } else {
      setAnswerList([...answerList, <Incorrect inputAnswer={inputAnswer} />]);
    }
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
