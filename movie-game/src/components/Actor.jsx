import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getActorFilmography } from "../utils/api";
import { Loading } from "./Loading";

export const Actor = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setFilmography, fetchedActorData } = props;
  // const [actorInfo, setActorInfo] = useState({});
  let actorInfo;

  if (props.fetchedActorData) {
    // setActorInfo(fetchedActorData);
    actorInfo = fetchedActorData;
  } else {
    // setActorInfo(props.startActor || props.endActor);
    actorInfo = props.startActor || props.endActor;
  }

  useEffect(() => {
    console.log(props);
    setIsLoading(true);
    getActorFilmography(actorInfo.actor_id).then((filmographyData) => {
      if (props.startActor || props.fetchedActorData) {
        setFilmography(filmographyData);
        // THIS SHOULD WORK NOW, ADDED THE PROPS TO THE NEW ACTOR COMPONENT
      }
      setIsLoading(false);
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
