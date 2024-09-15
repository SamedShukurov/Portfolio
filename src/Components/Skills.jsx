import "../Component-Styles/Skills.css"
//! Light
// import expressjsLight from "/public/logos/icon-express.svg"
import typescript from "/public/logos/icon-typescript.svg"
import javascript from "/public/logos/icon-javascript.svg"
import sass from "/public/logos/icon-sass.svg"
import react from "/public/logos/icon-react.svg"
import git from "/public/logos/icon-git.svg"
import tailwindcss from "/public/logos/icon-tailwindcss.svg"
import python from "/public/logos/icon-python.svg"
import figma from "/public/logos/icon-figma.svg"
// import nextjsLight from "/public/logos/icon-nextjs.svg"
// import nodejs from "/public/logos/icon-nodejs.svg"
//! Dark

// import expressjsDark from "/public/logos/icon-express-light.svg"


const Skills = ({ darkModeBoolean }) => {
    let changeIcon = (light, dark) => {
        if (darkModeBoolean == false) {
            return light
        }
        else {
            return dark
        }
    }
    return (
        <section id="skills">
            <div className="skills-container">
                <h1 className="section-heading">Skills</h1>
                <span>The skills,tools and technologies I am really good at: </span>
                <div className="skills-grid-box">
                    {/* <picture className="skill">
                        <a href="https://expressjs.com/"><img src={`${changeIcon(expressjsLight, expressjsDark)}`} loading="lazy" alt="express" /></a>
                        <p>Express js</p>
                    </picture> */}
                    <picture className="skill">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  target="_blank"><img src={javascript} loading="lazy" alt="js" /></a>
                        <p>Javascript</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://www.typescriptlang.org/"  target="_blank"><img src={typescript} loading="lazy" alt="ts" /></a>
                        <p>Typescript</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://react.dev/"  target="_blank"><img src={react} loading="lazy" alt="react" /></a>
                        <p>React</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://www.python.org/" target="_blank"><img src={python} loading="lazy" alt="python" id="python-icon" /></a>
                        <p>Python</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://sass-lang.com/"  target="_blank"><img src={sass} loading="lazy" alt="sass" /></a>
                        <p>Sass</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://git-scm.com/"  target="_blank"><img src={git} loading="lazy" alt="git" /></a>
                        <p>Git</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://tailwindcss.com/"   target="_blank"><img src={tailwindcss} loading="lazy" alt="tailwindcss" /></a>
                        <p>Tailwindcss</p>
                    </picture>
                    <picture className="skill">
                        <a href="https://figma.com/" target="_blank"><img src={figma} loading="lazy" alt="tailwindcss" /></a>
                        <p>Figma</p>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Skills