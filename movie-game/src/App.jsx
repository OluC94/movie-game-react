// import logo from "./logo.svg";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";

function App() {
  return (
    <section className="App">
      <Header />
      <Game />
    </section>
  );
}

export default App;
