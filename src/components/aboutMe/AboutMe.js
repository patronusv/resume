import AboutMeStyled from './AboutMeStyled';
import data from '../../data/data';

const AboutMe = () => {
  return (
    <AboutMeStyled>
      <div className="info-container">
        <h1 className="name">Viktor Gorokhov</h1>
        <h2 className="profession">Front-End Developer</h2>
        <h2 className="profession">Kyiv, Ukraine</h2>
        <p className="description">
          Aspiring graduate of Fullstack development courses looking for a position as a junior frontend developer to provide great results for my
          future team and improve my skills as a developer.
        </p>
      </div>

      <div className="projects-container">
        <h3 className="about-me-title">Projects</h3>
        <ol>
          {data.projects.map((item, idx) => (
            <li className="projects-item" key={idx}>
              <a className="projects-link" href={item.link} rel="noreferrer noopener" target="_blank">
                {item.link}
              </a>
              <span className="dots"></span>
              <span>
                <b>[</b> <span className="tech-name">{item.techStack}</span> <b>]</b>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="about-me-title">Work Experience</h3>

        <div>
          <h4 className="profession-title">
            Front-End Developer <span className="profession-company">Student at GoIT</span>
          </h4>
          <span className="about-me-period">
            September 2020 - up to now <span className="about-me-divider">|</span> Ukraine
          </span>
          {/* <ul className="profession-duties">
            <li className="profession-duties-item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li className="profession-duties-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="profession-duties-item">Risus commodo viverra maecenas.</li>
            <li className="profession-duties-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
          </ul> */}
        </div>
      </div>

      <div className="education-container">
        <h3 className="about-me-title">Education</h3>
        <ul className="list">
          {data.education.map((item, idx) => (
            <li className="education-list-item" key={idx}>
              <p className="education-title">{item.establishment}</p>
              <p className="education-specialty">{item.speciality}</p>
              <span className="about-me-period">
                {item.period} <span className="about-me-divider">|</span> {item.country}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
