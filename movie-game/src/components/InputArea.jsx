import React from "react";
import { useState } from "react";
import { Input } from "./Input";

export const InputArea = () => {
  const [answerList, setAnswerList] = useState([]);
  return (
    <section>
      Input Area
      <Input />
    </section>
  );
};
