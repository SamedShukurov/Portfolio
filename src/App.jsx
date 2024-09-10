import './App.css'
// Hooks 
import { useEffect, useState } from "react"
// Components
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {
  //! DarkMode
  const [darkMode, setdarkMode] = useState(false)
  const darkModeToggle = () => {
    setdarkMode(!darkMode)
  }
  useEffect(()=>{

    if (darkMode) {
      document.querySelector(".App").id = "dark"
    }
    else {
      document.querySelector(".App").id = "light"
  }
  },[darkMode])


  return (
    <div className='App' id="light">
      <Header darkModeToggle={darkModeToggle} />
      <Hero />
    </div>
  )
}

export default App
