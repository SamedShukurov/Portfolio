import './App.css'
// Hooks 
import { useEffect, useState } from "react"
// Components
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
function App() {

  /*=========================== scroll sections active links =============================*/
  // let sections = document.querySelectorAll("section");
  // let navLinks = document.querySelectorAll("header nav a");
  // window.onscroll = () => {
  //   sections.forEach((sec) => {
  //     let top = window.scrollY;
  //     let offset = sec.offsetTop - 150;
  //     let height = sec.offsetHeight;
  //     let id = sec.getAttribute("id");

  //     if (top >= offset && top < offset + height) {
  //       navLinks.forEach((links) => {
  //         links.classList.remove("active");
  //         document
  //           .querySelector("header nav a[href*=" + id + "]")
  //           .classList.add("active");
  //       });
  //     }
  //   })
  // };

  /*=========================== scroll reveal =============================*/

  // ScrollReveal({
  //   // reset: true,
  //   distance: "80px",
  //   duration: 2000,
  //   delay: 200
  // });

  // ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
  // ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form', { origin: "bottom" });
  // ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
  // ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

  //! DarkMode
  const [darkMode, setdarkMode] = useState(false)
  const darkModeToggle = () => {
    setdarkMode(!darkMode)
  }
  useEffect(() => {
    if (darkMode) {
      document.querySelector(".App").id = "dark"
    }
    else {
      document.querySelector(".App").id = "light"
    }
  }, [darkMode])
  return (
    <div className='App' id="light">
      <Header darkModeToggle={darkModeToggle} />
      <Hero />
      <About />
      <Skills darkModeBoolean={darkMode}/>
      <Experience/>
    </div>
  )
}

export default App
