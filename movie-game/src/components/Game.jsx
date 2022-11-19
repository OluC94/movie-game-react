import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActorFilmography, getBio, getMostPopular } from "../utils/api";
import { Loading } from "./Loading";

export const Game = () => {
  const [firstTest, setFirstTest] = useState(false);
  const [startActor, setStartActor] = useState({});
  const [endActor, setEndActor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFirstTest(false);
    setIsLoading(true);
    const start = getBio("nm6073955");
    const target = getBio("nm5939164");

    Promise.all([start, target]).then((actors) => {
      setStartActor(actors[0]);
      setEndActor(actors[1]);
      setIsLoading(false);
      setFirstTest(true);
    });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <section className="game-page">
      <h2>game page</h2>
      <section>
        {startActor.name}
        <img className="actor-img" src={startActor.img} />
      </section>
      <section>
        {endActor.name}
        <img className="actor-img" src={endActor.img} />
      </section>
      <section>{firstTest ? "useEffect running" : "false"}</section>
    </section>
  );
};
