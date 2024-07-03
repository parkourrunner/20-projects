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
import Autocomplete from './components/autocomplete';
import TicTacToe from './components/toc-tac-toe';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import TestUseFetchHook from './components/use-fetch/test';

function App() {
  const [app, setApp] = useState("TestUseFetchHook");
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
        <button onClick={() => setApp("Autocomplete")}>Autocomplete</button>
        <button onClick={() => setApp("TicTacToe")}>TicTacToe</button>
        <button onClick={() => setApp("FeatureFlags")}>FeatureFlags</button>
        <button onClick={() => setApp("TestUseFetchHook")}>TestUseFetchHook</button>
      </div>
      {app === "Accordion" && <Accordion />}
      {app === "RandomColor" && <RandomColor />}
      {app === "StarRating" && <StarRating noOfStarts={10} />}
      {app === "ImageSlider" && <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />}
      {app === "LoadMore" && <LoadMore />}
      {app === "TreeView" && <TreeView menus={menus} />}
      {app === "QRGenerator" && <QRGenerator menus={menus} />}
      {app === "LightDarkMode" && <LightDarkMode />}
      {app === "ScrollIndicator" && <ScrollIndicator url="https://dummyjson.com/products?limit=100" />}
      {app === "TabTest" && <TabTest />}
      {app === "ModalTest" && <ModalTest />}
      {app === "GithubProfileFinder" && <GithubProfileFinder />}
      {app === "Autocomplete" && <Autocomplete />}
      {app === "TicTacToe" && <TicTacToe />}
      {app === "FeatureFlags" &&
        <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState>
      }
      {app === "TestUseFetchHook" && <TestUseFetchHook />}
    </div>
  );
}

export default App;
