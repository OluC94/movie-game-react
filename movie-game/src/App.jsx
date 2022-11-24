// import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/Header";
import { GamePage } from "./pages/GamePage";
import { ActorContext, GameContext } from "./context";
import { useState } from "react";

function App() {
  const [startActor, setStartActor] = useState({});
  const [endActor, setEndActor] = useState({});
  const [gameOver, setGameOver] = useState(null); // implement start button, init this as true until start is pressed
  const [round, setRound] = useState(true); // true/false for check filmog/cast
  const [score, setScore] = useState(0);

  return (
    <ActorContext.Provider
      value={{ startActor, setStartActor, endActor, setEndActor }}
    >
      <GameContext.Provider
        value={{ gameOver, setGameOver, round, setRound, score, setScore }}
      >
        <section className="App">
          <Header />
          <GamePage />
        </section>
      </GameContext.Provider>
    </ActorContext.Provider>
  );
}

export default App;
