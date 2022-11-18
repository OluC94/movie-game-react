import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getActorFilmography } from "../game-logic/api-initial-test";

export const Game = () => {
  const [firstTest, setFirstTest] = useState("");

  useEffect(() => {
    const test = getActorFilmography();
    setFirstTest(test);
  }, []);

  return (
    <section>
      <section>game page</section>
      {/* <section>{firstTest}</section> */}
    </section>
  );
};
