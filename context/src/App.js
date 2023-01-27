import Intervalo from "./components/intervalo";
import Soma from "./components/soma";
import './global/style.css'
import Sorteio from './components/sorteio';
import Media from "./components/media";

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>

      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>

    </div>
  );
}

export default App;
