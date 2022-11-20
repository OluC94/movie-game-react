// import logo from "./logo.svg";
import "./App.css";

import { Header } from "./components/Header";
import { GamePage } from "./pages/GamePage";
import { ActorContext } from "./context";
import { useState } from "react";

function App() {
  const [startActor, setStartActor] = useState({});
  const [endActor, setEndActor] = useState({});
  return (
    <ActorContext.Provider
      value={{ startActor, setStartActor, endActor, setEndActor }}
    >
      <section className="App">
        <Header />
        <GamePage />
      </section>
    </ActorContext.Provider>
  );
}

export default App;
