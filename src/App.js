import './App.css';
import Accordion from "./components/Accordion";
import RandomColor from './components/random-color';
import { useState } from 'react';
function App() {
  const [app, setApp] = useState("Accordion");
  return (
    <div className="App">
      <div className='app-selector'>
        <button onClick={() => setApp("Accordion")}>Accordion</button>
        <button onClick={() => setApp("RandomColor")}>RandomColor</button>
      </div>
      {app === "Accordion" && <Accordion />}
      {app === "RandomColor" && <RandomColor />}
    </div>
  );
}

export default App;
