import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography, getBio } from "../utils/api";
import { gameInit } from "../utils/game-utils";
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

    Promise.all([gameInit()])
      .then(([{ start_id, end_id }]) => {
        const start = getBio(start_id);
        const target = getBio(end_id);

        return Promise.all([start, target]);
      })
      .then(([start, target]) => {
        setStartActor(start);
        setEndActor(target);
        setIsLoading(false);
      });
    // const start = getBio("nm6073955");
    // const target = getBio("nm5939164");
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
