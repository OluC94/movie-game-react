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
  const [targetFilmography, setTargetFilmography] = useState([]);

  //game context
  const [gameOver, setGameOver] = useState(null); // implement start button, init this as true until start is pressed
  const [initGame, setInitGame] = useState(false);
  const [gameWon, setGameWon] = useState(false);
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
        targetFilmography,
        setTargetFilmography,
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
          gameWon,
          setGameWon,
          initGame,
          setInitGame,
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
