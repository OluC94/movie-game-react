// import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/Header";
import { GamePage } from "./pages/GamePage";
import { ActorContext, GameContext } from "./context";
import { useState } from "react";

function App() {
  const [startActor, setStartActor] = useState({});
  const [filmography, setFilmography] = useState([]);
  const [endActor, setEndActor] = useState({});

  //game context
  const [gameOver, setGameOver] = useState(null); // implement start button, init this as true until start is pressed
  const [isAppearanceRound, setIsAppearanceRound] = useState(true); // true/false for check filmog/cast
  const [score, setScore] = useState(0);
  const [appearanceData, setAppearanceData] = useState({});

  return (
    <ActorContext.Provider
      value={{
        startActor,
        setStartActor,
        endActor,
        setEndActor,
        filmography,
        setFilmography,
      }}
    >
      <GameContext.Provider
        value={{
          gameOver,
          setGameOver,
          isAppearanceRound,
          setIsAppearanceRound,
          score,
          setScore,
          appearanceData,
          setAppearanceData,
        }}
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
