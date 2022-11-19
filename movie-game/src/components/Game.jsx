import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActorFilmography, getBio, getMostPopular } from "../utils/api";

export const Game = () => {
  const [firstTest, setFirstTest] = useState(false);
  const [startActor, setStartActor] = useState({});

  useEffect(() => {
    setFirstTest(false);
    // const test = getBio("nm6073955");
    setFirstTest(true);
  }, []);

  return (
    <section className="game-page">
      <section>game page</section>
      <section>{firstTest ? "true" : "false"}</section>
    </section>
  );
};
