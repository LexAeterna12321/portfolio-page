import PropTypes from 'prop-types';
const Project = ({ name, img, live, git }) => {
  return (
    <article className="portfolio__projects__project">
    <figure>
    <img src={`/static/${img}`} alt={`${name} Project`} />
      <div className="portfolio__projects__project__description">
        <figcaption className="portfolio__projects__project__description--shown">
          {name}
        </figcaption>
        <p className="portfolio__projects__project__description--hidden">
          <a target="_blank" href={live}>
            Live
          </a>
          <a target="_blank" href={git}>
            Github
          </a>
        </p>
      </div>
    </figure>
     
    </article>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
}
export default Project;
