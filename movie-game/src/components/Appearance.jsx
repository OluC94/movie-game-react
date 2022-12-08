import React from "react";

export const Appearance = ({ props }) => {
  const { title_id, title, titleType, cast } = props;
  return <section className="correct-answer">{title}</section>;
};
