import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getActorFilmography } from "../utils/api";
import { Loading } from "./Loading";

export const Actor = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const actorInfo = props.startActor || props.endActor;
  const { setFilmography } = props;

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getActorFilmography(actorInfo.actor_id)]).then(
      (filmographyData) => {
        if (props.startActor) {
          setFilmography(filmographyData[0]);
        }
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section className="actor">
      <h3>{actorInfo.name}</h3>
      <section>
        <img className="actor-img" src={actorInfo.img} />
      </section>
    </section>
  );
};
