import PropTypes from "prop-types";
import Skills from "./Skills";
import Education from "./Education";
const About = ({ siteChange }) => {
  return (
    <section className="about">
      <div className="about__container">
        <header className="about__header">I'm a novice programmer</header>
        <article>
          <ul className="about__basic-info">
            <li>
              Name:{" "}
              <span>
                <strong>Rafał Cieślik</strong>
              </span>
            </li>
            <li>
              Job: <span>IT Specialist</span>
            </li>
            <li>
              Age: <span>30 Years</span>
            </li>
            <li>
              Residence: <span>Wrocław</span>
            </li>
          </ul>
        </article>
        <article className="about__description">
          <p>
            Hi There, I'm self taught web developer. I'm refactoring myself from
            scratch. I've fallen in love with Frontend world, especially
            JavaScript and its massive library - React.
          </p>

          <button
            className="about__description__button"
            onClick={() => siteChange("contact")}
          >
            Hire Me
          </button>
        </article>
        <h2 className="about__h2">My skills</h2>
        <Skills />
        <h2 className="about__h2">My education</h2>
        <Education />
      </div>
    </section>
  );
};

About.propTypes = {
  siteChange: PropTypes.func.isRequired,
};
export default About;
