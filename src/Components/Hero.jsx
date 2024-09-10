import "../Component-Styles/Hero.css"
import profile from "../assets/Samed Shukurov.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter"
const Hero = () => {
  const [text] = useTypewriter(
    {
      words: ['React Developer', 'Samed', 'Programmer'],
      loop: {},
      typeSpeed: 150,
      deleteSpeed: 60,
    }
  )
  return (
    <section id="hero">
      <article>
        <div>
          <h1 className="hero-article-heading">Hi, <i class="fa-light fa-hand-wave emoji"></i></h1>
          <h1 className="hero-article-heading second">I'm <span>{text}</span>  <Cursor /></h1>
        </div>
        <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 1 year, I still love it as if it was something new.</p>
        <div className="hero-info">
          <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <a href="https://en.wikipedia.org/wiki/Baku">Baku, Azerbaijan</a>
          </div>
          <div>
            <i><div></div></i>
            Available for new projects
          </div>
        </div>
        <div className="icon-box">
          <a href="https://github.com/SamedShukurov"><i class="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/samed-shukurov/"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://medium.com/@semedshukurov"><i class="fa-brands fa-medium"></i></a>
        </div>

      </article>
      <img src={profile} alt="profile photo" />
    </section>
  )
}

export default Hero