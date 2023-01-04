import React from "react";
import { useContext } from "react";
import { ActorContext, GameContext } from "../context";

export const Retry = ({ setAnswerList }) => {
  const { setScore, setIsAppearanceRound, setGameWon, setIsEmptyAnswer } =
    useContext(GameContext);
  const { setFilmography, startActorFilmography } = useContext(ActorContext);

  const handleRetry = () => {
    if (window.confirm("Would you like to start again?")) {
      setAnswerList([]);
      setScore(0);
      setIsAppearanceRound(true);
      setFilmography(startActorFilmography);
      setGameWon(false);
      setIsEmptyAnswer(false);
      window.scrollTo(0, 0);
    }
  };
  return (
    <button className="custom-button" onClick={handleRetry}>
      Retry?
    </button>
  );
};
