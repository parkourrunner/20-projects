import { useState } from "react";
import data from "./data";
import "./styles.css"

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enbaleMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id)
  }
  function handleMultipleSelection(id) {
    let cpyMultipleSelected = [...multipleSelected];
    const selectedItemIndex = cpyMultipleSelected.indexOf(id);
    if (selectedItemIndex !== -1) {
      cpyMultipleSelected.splice(selectedItemIndex, 1);
      setMultipleSelected(cpyMultipleSelected);
    } else {
      setMultipleSelected([...cpyMultipleSelected, id]);
    }
  }

  function toggleMultiSelection() {
    if (enbaleMultiSelection) {
      setMultipleSelected([]);
    } else if (selected) {
      setMultipleSelected([selected]);
      setSelected(null);
    }
    setEnableMultiSelection(!enbaleMultiSelection);
  }
  return (
    <div className='wrapper'>
      <button onClick={toggleMultiSelection}>Enable Multiselection</button>
      <div className='accordion'>
        {
          data && data.length > 0 ?
            data.map(item =>
              <div className='item' key={item.id}>
                <div className='title' onClick={() => enbaleMultiSelection ? handleMultipleSelection(item.id) : handleSingleSelection(item.id)}>
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {(enbaleMultiSelection && multipleSelected.includes(item.id)) || (!enbaleMultiSelection && selected === item.id) ? (
                  <div className="content">{item.answer}</div>)
                  : null
                }
              </div>) :
            <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordion
