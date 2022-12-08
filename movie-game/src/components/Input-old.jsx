import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getCastList } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";
import { Appearance } from "./Appearance";

export const InputOld = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [appearanceTitleData, setAppearanceTitleData] = useState({});
  const [actorQueryID, setActorQueryID] = useState("");

  // context
  const { startActor, endActor } = useContext(ActorContext);
  const { isAppearanceRound, setIsAppearanceRound, score, setScore } =
    useContext(GameContext);
  // props
  const { answerList, setAnswerList, setIsValidAnswer } = answerData;

  // everything else
  const handleAnswerInput = (e) => {
    setInputAnswer(e.target.value);
  };

  const checkActorApp = (actorID) => {
    const apps = getActorFilmography(actorID);
    return Promise.all([apps]).then(([appsArr]) => {
      return checkAppearance(inputAnswer, appsArr);
    });
  };

  const handleAppearanceInput = () => {
    let queryID;
    if (answerList.length === 0) {
      queryID = startActor.actor_id;
    } else {
      queryID = actorQueryID;
    }

    checkActorApp(queryID)
      .then((result) => {
        setIsChecking(false);
        setInputAnswer(""); // empty the input box
        // setAnswerList([
        //   ...answerList,
        //   { text: inputAnswer, isValid: result.isValid },
        // ]);
        setAnswerList([...answerList, <Appearance />]);
        // change this to <Appearance /> with props containing appearance title, appearance iD and isValid

        return result;
      })
      .then((result) => {
        if (result.isValid) {
          setIsAppearanceRound(false);
          setAppearanceTitleData({
            title: result.title,
            title_id: result.title_id,
          });
          getCastList(appearanceTitleData.title_id).then((result) => {
            console.log(result);
          });
        } else {
          setActorQueryID(queryID); // make sure the actor id stays the same
        }
        setScore((currScore) => {
          return currScore + 1;
        });
      })
      .catch((err) => {
        // error handling
      });
  };

  const handleActorInput = () => {
    console.log(appearanceTitleData);
  };

  /* 
  1 - get cast for correct answer (get when the correct answer has been found can be done before)
  2 - check cast list function - does input name match any of the cast list
  3 - 
  
  
  
  */

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (inputAnswer.length === 0) {
      // set velidation method
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
