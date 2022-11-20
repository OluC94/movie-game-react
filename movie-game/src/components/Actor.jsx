import React from "react";

export const Actor = (props) => {
  const actorInfo = props.startActor || props.endActor;

  return (
    <section>
      <h3>{actorInfo.name}</h3>
      <section>
        <img className="actor-img" src={actorInfo.img} />
      </section>
    </section>
  );
};
