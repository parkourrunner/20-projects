import './App.css';
import Accordion from "./components/Accordion";
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import { useState } from 'react';
function App() {
  const [app, setApp] = useState("ImageSlider");
  return (
    <div className="App">
      <div className='app-selector'>
        <button onClick={() => setApp("Accordion")}>Accordion</button>
        <button onClick={() => setApp("RandomColor")}>RandomColor</button>
        <button onClick={() => setApp("StarRating")}>StarRating</button>
        <button onClick={() => setApp("ImageSlider")}>ImageSlider</button>
      </div>
      {app === "Accordion" && <Accordion />}
      {app === "RandomColor" && <RandomColor />}
      {app === "StarRating" && <StarRating noOfStarts={10} />}
      {app === "ImageSlider" && <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />}
    </div>
  );
}

export default App;
