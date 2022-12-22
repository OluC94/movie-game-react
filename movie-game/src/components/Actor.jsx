import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ActorContext, GameContext } from "../context";
import { getActorFilmography } from "../utils/api";
import { Loading } from "./Loading";

export const Actor = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { fetchedActorData } = props;
  const { setFilmography, setTargetFilmography, setStartActorFilmography } =
    useContext(ActorContext);
  let actorInfo;

  if (props.fetchedActorData) {
    actorInfo = fetchedActorData;
  } else {
    actorInfo = props.startActor || props.endActor;
  }

  useEffect(() => {
    setIsLoading(true);
    getActorFilmography(actorInfo.actor_id).then((filmographyData) => {
      if (props.startActor) {
        setFilmography(filmographyData);
        setStartActorFilmography(filmographyData);
      } else if (props.fetchedActorData) {
        setFilmography(filmographyData);
      }
      setIsLoading(false);

      if (props.endActor) {
        setTargetFilmography(filmographyData);
      }
    });
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
