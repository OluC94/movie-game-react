import React from "react";

/* `This will be an array containing: \n1. All answers input by the user\n2. Correct answers will either be an Actor or Appearance component\n3. Incorrect answers will just be the text that they user has input` */

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
