import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";

export const NewGame = () => {
  const { setInitGame, setScore } = useContext(GameContext);
  const handleNewGame = () => {
    if (window.confirm("Would you like to start a new game?")) {
      setInitGame((currValue) => !currValue);
      setScore(0);
    }
  };

  return (
    <button className="custom-button" onClick={handleNewGame}>
      New Game
    </button>
  );
};
