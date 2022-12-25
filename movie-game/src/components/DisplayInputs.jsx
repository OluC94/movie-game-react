import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";

export const DisplayInputs = ({ answerList, setAnswerList }) => {
  // const { gameWon, setIsAppearanceRound, setScore } = useContext(GameContext);

  // const handleDelete = () => {
  //   setAnswerList((currVal) => {
  //     currVal.pop();
  //     return currVal;
  //   });
  //   setIsAppearanceRound((currVal) => !currVal);
  //   setScore((currVal) => currVal + 10);
  // };

  return (
    <section className="answers">
      <ul className="answer-list">
        {answerList.map((answer, index) => {
          return (
            <li key={index}>
              <section>
                {answer}
                {/* {index === answerList.length - 1 &&
                !gameWon &&
                answer.props.inputAnswer === undefined ? (
                  <button className="custom-button" onClick={handleDelete}>
                    Delete
                  </button>
                ) : null} */}
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
