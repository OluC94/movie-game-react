import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";

export const DisplayInputs = ({ answerList, setAnswerList }) => {
  const { isChecking } = useContext(GameContext);

  return (
    <section className="answers">
      <ul className="answer-list">
        {answerList.map((answer, index) => {
          return (
            <li key={index}>
              <section>{answer}</section>
            </li>
          );
        })}
      </ul>
      {/* <section>{isChecking ? "..." : null}</section> */}
    </section>
  );
};
