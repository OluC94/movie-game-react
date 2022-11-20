import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ActorContext } from "../context";
import { getBio } from "../utils";
import { Actor } from "./Actor";
import { Loading } from "./Loading";

export const Game = () => {
  const { startActor, setStartActor } = useContext(ActorContext);
  const { endActor, setEndActor } = useContext(ActorContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const start = getBio("nm6073955");
    const target = getBio("nm5939164");

    Promise.all([start, target]).then((actors) => {
      setStartActor(actors[0]);
      setEndActor(actors[1]);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <section className="game-page">
      <h2>game page</h2>
      <Actor startActor={startActor} />
      <Actor endActor={endActor} />
    </section>
  );
};
