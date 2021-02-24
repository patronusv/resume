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
              <div className="projects-link-container">
                <a className="projects-link" href={item.link} rel="noreferrer noopener" target="_blank">
                  {item.link}
                </a>
                <span className="dots"></span>
                <span>
                  <b>[</b> <span className="tech-name">{item.techStack}</span> <b>]</b>
                </span>
              </div>
              <p className="description">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="about-me-title">Work Experience</h3>
        <ul className="list">
          {data.work.map((item, idx) => (
            <li>
              <h4 className="profession-title">
                {item.title} <span className="profession-company">{item.company}</span>
              </h4>
              <span className="about-me-period">
                {item.period} <span className="about-me-divider">|</span> {item.country}
              </span>
              <ul className="profession-duties">
                {item.duties.map(duty => (
                  <li className="profession-duties-item">{duty}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
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
