import React from "react";

export const DisplayInputs = ({ answerList }) => {
  return (
    <>
      <section className="answers">
        <ul className="answer-list">
          {answerList.map((answer, index) => {
            return <li key={index}>{answer}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
