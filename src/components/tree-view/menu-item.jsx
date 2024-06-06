import React, { useState } from 'react'
import MenuList from './menu-list'
import {FaMinus, FaPlus} from 'react-icons/fa'

function MenuItem({ item }) {
  const [showCurrentChildren, setShowCurrentChildren] = useState({});

  function handleTogglechildren(getLabel) {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getLabel]: !showCurrentChildren[getLabel]
    })
  }

  return (
    <li >
      <div className='menu-item'>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length > 0 ? <span onClick={() => handleTogglechildren(item.label)}>
            {showCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />}
          </span> : null
        }
      </div>
      {item.children && item.children.length > 0 && showCurrentChildren[item.label] ?
        <MenuList list={item.children} />
        : null}
    </li>
  )
}

export default MenuItem
