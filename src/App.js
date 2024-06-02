import './App.css';
import Accordion from "./components/Accordion";
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import { useState } from 'react';
function App() {
  const [app, setApp] = useState("");
  return (
    <div className="App">
      <div className='app-selector'>
        <button onClick={() => setApp("Accordion")}>Accordion</button>
        <button onClick={() => setApp("RandomColor")}>RandomColor</button>
        <button onClick={() => setApp("StarRating")}>StarRating</button>
      </div>
      {app === "Accordion" && <Accordion />}
      {app === "RandomColor" && <RandomColor />}
      {app === "StarRating" && <StarRating noOfStarts={10} />}
    </div>
  );
}

export default App;
