import Skills from "./Skills";
import Education from "./Education";
const About = () => {
  return (
    <div className="about">
      <h1 className="about__h1">I'm a novice programmer</h1>
      <ul className="about__basic-info">
        <li>
          Name: <span>Rafał Cieślik</span>
        </li>
        <li>
          Job: <span>Clerk</span>
        </li>
        <li>
          Age: <span>30 Years</span>
        </li>
        <li>
          Residence:<span>Wrocław</span>
        </li>
        <li>
          Dream Job: <span>Tech Job</span>
        </li>
      </ul>
      <div className="about__description">
        Hi There, I'm self taught web developer. I'm refactoring myself from
        scratch. I've fallen in love with Front end world, especially javaScript
        teamed up with React.js framework.
      </div>
      <h1 className="about__h1">My skills</h1>
      <Skills />
      <h1 className="about__h1">My education</h1>
      <Education />
    </div>
  );
};

export default About;
