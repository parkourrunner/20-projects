import React from 'react'
import UseLocalStorage from './UseLocalStorage.jsx'
import "./style.css"
function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme)
  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>hellooooo</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
