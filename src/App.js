import './App.css';
import Accordion from "./components/Accordion";
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import { useState } from 'react';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRGenerator from './components/qr-generator';
import LightDarkMode from './components/dark-light-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/tabs';
import ModalTest from './components/modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';

function App() {
  const [app, setApp] = useState("GithubProfileFinder");
  return (
    <div className="App">
      <div className='app-selector'>
        <button onClick={() => setApp("Accordion")}>Accordion</button>
        <button onClick={() => setApp("RandomColor")}>RandomColor</button>
        <button onClick={() => setApp("StarRating")}>StarRating</button>
        <button onClick={() => setApp("ImageSlider")}>ImageSlider</button>
        <button onClick={() => setApp("LoadMore")}>LoadMore</button>
        <button onClick={() => setApp("TreeView")}>TreeView</button>
        <button onClick={() => setApp("QRGenerator")}>TreeView</button>
        <button onClick={() => setApp("TabTest")}>TabTest</button>
        <button onClick={() => setApp("ModalTest")}>ModalTest</button>
        <button onClick={() => setApp("GithubProfileFinder")}>GithubProfileFinder</button>
      </div>
      {app === "Accordion" && <Accordion />}
      {app === "RandomColor" && <RandomColor />}
      {app === "StarRating" && <StarRating noOfStarts={10} />}
      {app === "ImageSlider" && <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />}
      {app === "LoadMore" && <LoadMore />}
      {app === "TreeView" && <TreeView menus={menus} />}
      {app === "QRGenerator" && <QRGenerator menus={menus} />}
      {app === "LightDarkMode" && <LightDarkMode/>}
      {app === "ScrollIndicator" && <ScrollIndicator url="https://dummyjson.com/products?limit=100"/>}
      {app === "TabTest" && <TabTest/>}
      {app === "ModalTest" && <ModalTest/>}
      {app === "GithubProfileFinder" && <GithubProfileFinder/>}
    </div>
  );
}

export default App;
