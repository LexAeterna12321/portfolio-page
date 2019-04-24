import Project from "./Project";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <header className="portfolio__header">MY WORKS</header>
      <article className="portfolio__projects">
        <Project
          name="Train Through Life"
          img="TTL.png"
          live="https://lexaeterna12321.github.io/Train-Through-Life/"
          git="https://github.com/LexAeterna12321/Train-Through-Life"
        />
        <Project
          name="Kitchen-Helper"
          img="kitchen.png"
          live="https://lexaeterna12321.github.io/kitchen-helper/"
          git="https://github.com/LexAeterna12321/kitchen-helper"
        />
        <Project
          name="Adventurer Site"
          img="adv.png"
          live="https://lexaeterna12321.github.io/Adventurer-Site/"
          git="https://github.com/LexAeterna12321/Adventurer-Site"
        />
        <Project
          name="Gym Site"
          img="gym.jpg"
          live="https://lexaeterna12321.github.io/GymSite/"
          git="https://github.com/LexAeterna12321/GymSite"
        />
        <Project
          name="Portfolio Site"
          img="portfolio.png"
          live="#"
          git="https://github.com/LexAeterna12321/portfolio-page"
        />
      </article>
    </section>
  );
};

export default Portfolio;
