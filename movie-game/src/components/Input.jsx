import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography } from "../utils/api";
import { checkAppearance } from "../utils/game-utils";

export const Input = ({ answerData }) => {
  // state
  const [inputAnswer, setInputAnswer] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [appearanceTitleID, setAppearanceTitleID] = useState("");
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

    // get rid of query id, replace with actorQueryID (state)
    // on game init, set start actor id

    checkActorApp(queryID)
      .then((result) => {
        setIsChecking(false);
        setInputAnswer("");
        setAnswerList([
          ...answerList,
          { text: inputAnswer, isValid: result.isValid },
        ]);
        return result;
      })
      .then((result) => {
        console.log(result);
        if (result.isValid) {
          setIsAppearanceRound(false);
          setAppearanceTitleID(result.title_id);
          // get the cast of the title
        } else {
          // make sure the actor id stays the same
          setActorQueryID(queryID);
        }
        console.log(queryID);
      })
      .catch((err) => {
        // error handling
        setScore((currScore) => {
          return currScore - 1;
        });
      });
  };

  const handleActorInput = () => {
    console.log("pick an actor in the title");
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    setScore((currScore) => {
      return currScore + 1;
    });
    setIsChecking(true);
    if (isAppearanceRound) {
      handleAppearanceInput();
    } else {
      handleActorInput();
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
