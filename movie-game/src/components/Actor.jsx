import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getActorFilmography } from "../utils/api";
import { Loading } from "./Loading";

export const Actor = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setFilmography, fetchedActorData } = props;

  let actorInfo;
  if (props.fetchedActorData) {
    actorInfo = fetchedActorData;
  } else {
    actorInfo = props.startActor || props.endActor;
  }

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
  }, [actorInfo]);

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
