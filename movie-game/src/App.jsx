// import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/Header";
import { GamePage } from "./pages/GamePage";
import { ActorContext, GameContext } from "./context";
import { useState } from "react";
import { HowToPlay } from "./components/HowToPlay";

function App() {
  // actor context
  const [startActor, setStartActor] = useState({});
  const [filmography, setFilmography] = useState([]);
  const [startActorFilmography, setStartActorFilmography] = useState([]);
  const [endActor, setEndActor] = useState({});
  const [targetFilmography, setTargetFilmography] = useState([]);

  //game context
  const [gameOver, setGameOver] = useState(null);
  const [initGame, setInitGame] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isAppearanceRound, setIsAppearanceRound] = useState(true);
  const [score, setScore] = useState(0);
  const [appearanceData, setAppearanceData] = useState({});
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isEmptyAnswer, setIsEmptyAnswer] = useState(false);

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
        startActorFilmography,
        setStartActorFilmography,
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
          isChecking,
          setIsChecking,
          isCorrect,
          setIsCorrect,
          isEmptyAnswer,
          setIsEmptyAnswer,
          isIncorrect,
          setIsIncorrect,
        }}
      >
        <section className="App">
          <Header />
          <HowToPlay />
          <GamePage />
        </section>
      </GameContext.Provider>
    </ActorContext.Provider>
  );
}

export default App;
