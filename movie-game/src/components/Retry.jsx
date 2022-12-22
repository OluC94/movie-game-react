import React from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";

export const Retry = ({ setAnswerList }) => {
  const { setScore, setIsAppearanceRound } = useContext(GameContext);
  const { setFilmography, startActorFilmography } = useContext(ActorContext);

  const handleRetry = () => {
    if (window.confirm("Would you like to start again?")) {
      setAnswerList([]);
      setScore(0);

      setIsAppearanceRound(true);
      setFilmography(startActorFilmography);
    }
  };
  return (
    <button className="custom-button" onClick={handleRetry}>
      Retry?
    </button>
  );
};
