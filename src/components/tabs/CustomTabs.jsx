import React, { useState } from 'react'
function CustomTabs({ tabsContent, onChange }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  function handleOnclick(index) {
    setSelectedTabIndex(index);
    onChange(index);
  }
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent && tabsContent.length > 0 && tabsContent.map((item, index) =>
          <div key={item.label} onClick={() => handleOnclick(index)} className={`tab-item ${selectedTabIndex === index ? "active" : ""}`}>
            <span className='label'>{item.label}</span>
          </div>)
        }
      </div>
      <div className='content' style={{ color: "red" }}>
        {tabsContent[selectedTabIndex] && tabsContent[selectedTabIndex].content}
      </div>

    </div>
  )
}

export default CustomTabs
