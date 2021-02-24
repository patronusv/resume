import Photo from '../photo/Photo';
import SidebarStyled from './SidebarStyled';
import data from '../../data/data';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Photo />

      <div className="sidebar-container">
        <h3 className="sidebar-title">Contacts</h3>
        <ul className="list">
          {data.contacts.map(item => (
            <li className="sidebar-list-item">
              <a className="contacts-link link" href={item.link} rel="noreferrer noopener" target="_blank">
                <span className="contacts-link-type">{item.icon}</span> <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-container">
        <h3 className="sidebar-title">Tech skills</h3>
        <ul>
          {data.techSkills.map(item => (
            <li className="sidebar-list-item">
              <span className="sidebar-list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-container">
        <h3 className="sidebar-title">Soft skills</h3>
        <ul>
          {data.softSkills.map(item => (
            <li className="sidebar-list-item">
              <span className="sidebar-list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-container">
        <h3 className="sidebar-title">Languges</h3>
        <ul>
          {data.languageSkills.map(item => (
            <li className="sidebar-list-item">
              <span className="sidebar-list-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
