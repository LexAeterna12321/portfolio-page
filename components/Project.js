const Project = ({ name, img, live, git }) => {
  return (
    <div className="portfolio__projects__project">
      <img src={`/static/${img}`} alt={`${name} Project`} />
      <div className="portfolio__projects__project__description">
        <p className="portfolio__projects__project__description--shown">
          {name}
        </p>
        <p className="portfolio__projects__project__description--hidden">
          <a target="_blank" href={live}>
            Live
          </a>
          <a target="_blank" href={git}>
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
