import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";
import { NewGame } from "./NewGame";

export const Winner = () => {
  const { score } = useContext(GameContext);
  return (
    <section className="game-won">
      <h4>You Win</h4>
      <h5>You scored {score}!</h5>
      <NewGame />
    </section>
  );
};
