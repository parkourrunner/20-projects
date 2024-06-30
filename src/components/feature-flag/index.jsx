import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LightDarkMode from '../dark-light-mode'
import TreeView from '../tree-view'
import Accordion from '../Accordion'
import RandomColor from '../random-color'
import TicTacToe from '../toc-tac-toe'
import menus from '../tree-view/data'

const componentsToRender = [
  {
    key: "showLightDarkMode",
    component: <LightDarkMode />
  },
  {
    key: "showTicTocToe",
    component: <TicTacToe />
  },
  {
    key: "showRandomColor",
    component: <RandomColor />
  },
  {
    key: "showAccordion",
    component: <Accordion />
  },
  {
    key: "showTreeView",
    component: <TreeView  menus={menus} />,
  },
]

function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  if (loading) return <div>Loading, please wait</div>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {enabledFlags && componentsToRender.filter(item => enabledFlags[item.key] === true).map(item =>
        <div key={item.key}>
          {item.component}
        </div>)}
    </div>
  )
}

export default FeatureFlags
