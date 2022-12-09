import React from "react";

export const Appearance = ({ props }) => {
  const { title_id, title, titleType, img, cast } = props;
  console.log(props);
  return (
    <section className="appearance">
      <h3>{title}</h3>
      <section>
        <img
          className="appearance-img"
          src={img}
          alt="little women movie poster"
        />
      </section>
    </section>
  );
};
