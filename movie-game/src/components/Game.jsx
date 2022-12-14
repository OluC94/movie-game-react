import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getBio } from "../utils/api";
import { Actor } from "./Actor";
import { Appearance } from "./Appearance";
import { InputArea } from "./InputArea";
import { Loading } from "./Loading";
import { Winner } from "./Winner";

export const Game = () => {
  const { startActor, setStartActor, endActor, setEndActor, setFilmography } =
    useContext(ActorContext);
  const { initGame } = useContext(GameContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const start = getBio("nm6073955"); // nm5939164
    const target = getBio("nm5939164"); //nm6073955

    Promise.all([start, target]).then((actors) => {
      setStartActor(actors[0]);
      setEndActor(actors[1]);
      setIsLoading(false);
    });
  }, [initGame]);
  if (isLoading) return <Loading />;
  return (
    <section className="game-area">
      <h2>game page</h2>
      <Actor startActor={startActor} />
      <InputArea />
      <Actor endActor={endActor} />
    </section>
  );
};
