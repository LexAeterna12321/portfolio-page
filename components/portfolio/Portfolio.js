import Project from "./Project";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__h1">MY WORKS</h1>
      <div className="portfolio__projects">
        <Project
          name="Train Through Life"
          img="TTL.png"
          live="https://lexaeterna12321.github.io/Train-Through-Life/"
          git="https://github.com/LexAeterna12321/Train-Through-Life"
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
      </div>
    </div>
  );
};

export default Portfolio;
