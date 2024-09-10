import "../Component-Styles/About.css"
import photo from "../assets/Samed Shukurov.jpg"
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h1 className="section-heading">About me</h1>
        <div>
          <img src={photo} alt="profile photo" />

          <article>
            <h1>Curious about me? Here you have it:</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Maxime quos illum possimus minima officiis, inventore libero cumque earum fugit natus obcaecati optio! Ducimus laboriosam nisi dolores. Deserunt recusandae autem quia ratione ullam nobis voluptatem perspiciatis ea minima iure aliquid asperiores eum id, facere, sit neque praesentium obcaecati possimus vitae minus libero laudantium explicabo optio! Pariatur, facere modi dolores at odio deserunt cum incidunt, laudantium minus ratione architecto quidem nemo nisi, reprehenderit dolore error nostrum quod culpa? Quis, sequi quaerat eveniet unde eaque tempora veniam maiores, ullam ea soluta voluptatum saepe rem voluptas, hic minus perferendis dolorem similique. Ex, rem magni.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Maxime quos illum possimus minima officiis, inventore libero cumque earum fugit natus obcaecati optio! Ducimus laboriosam nisi dolores. Deserunt recusandae autem quia ratione ullam nobis voluptatem perspiciatis ea minima iure aliquid asperiores eum id, facere, sit neque praesentium obcaecati possimus vitae minus libero laudantium explicabo optio! Pariatur, facere modi dolores at odio deserunt cum incidunt, laudantium minus ratione architecto quidem nemo nisi, reprehenderit dolore error nostrum quod culpa? Quis, sequi quaerat eveniet unde eaque tempora veniam maiores, ullam ea soluta voluptatum saepe rem voluptas, hic minus perferendis dolorem similique. Ex, rem magni.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Maxime quos illum possimus minima officiis, inventore libero cumque earum fugit natus obcaecati optio! Ducimus laboriosam nisi dolores. Deserunt recusandae autem quia ratione ullam nobis voluptatem perspiciatis ea minima iure aliquid asperiores eum id, facere, sit neque praesentium obcaecati possimus vitae minus libero laudantium explicabo optio! Pariatur, facere modi dolores at odio deserunt cum incidunt, laudantium minus ratione architecto quidem nemo nisi, reprehenderit dolore error nostrum quod culpa? Quis, sequi quaerat eveniet unde eaque tempora veniam maiores, ullam ea soluta voluptatum saepe rem voluptas, hic minus perferendis dolorem similique. Ex, rem magni.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About