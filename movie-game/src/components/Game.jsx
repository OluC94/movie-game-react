import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ActorContext, GameContext } from "../context";
import { getBio } from "../utils/api";
import { gameInit } from "../utils/game-utils";
import { Actor } from "./Actor";
import { InputArea } from "./InputArea";
import { Loading } from "./Loading";
import { ErrorComponent } from "./ErrorComponent";

export const Game = () => {
  const { startActor, setStartActor, endActor, setEndActor } =
    useContext(ActorContext);
  const { initGame } = useContext(GameContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

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
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
    // const start = getBio("nm6073955");
    // const target = getBio("nm5939164");
  }, [initGame]);
  if (isLoading) return <Loading />;
  if (isError) return <ErrorComponent />;
  return (
    <section className="game-area">
      <Actor startActor={startActor} />
      <InputArea />
      <Actor endActor={endActor} />
    </section>
  );
};
