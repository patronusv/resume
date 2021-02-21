import Git from '../assets/icons/Git';
import LinkedIn from '../assets/icons/LinkedIn';
import Mail from '../assets/icons/Mail';
import Tel from '../assets/icons/Tel';

export default {
  contacts: [
    { icon: Tel(), link: 'tel:380502797410', text: ' +38 050 279 74 10' },
    { icon: Mail(), link: 'mailto:patronusv@gmail.com', text: 'patronusv@gmail.com' },
    { icon: Git(), link: 'https://github.com/patronusv', text: 'github.com/patronusv' },
    { icon: LinkedIn(), link: 'https://www.linkedin.com/in/viktor-gorokhov/', text: 'linkedin.com/in/viktor-gorokhov/' },
  ],
  techSkills: ['HTML5', 'CSS3', 'GIT', 'WebPack', 'JavaScript', 'React.js'],
  // 'Node.js',
  softSkills: ['Scrum', 'Agile', 'GTD', 'Teamwork'],
  projects: [
    { link: 'https://patronusv.github.io/parcel-project-template/', techStack: 'HTML, CSS' },
    { link: 'https://patronusv.github.io/js-teamproject-olx/', techStack: 'Javascript' },
    { link: 'https://github.com/patronusv/react-teamproject-slimmom', techStack: 'React.js' },
  ],
  education: [
    {
      establishment: 'GoIT',
      speciality: 'Fullstack JS Developer',
      period: 'September 2020 - April 2021',
      country: 'Ukraine',
    },
    {
      establishment: 'Vadym Hetman Kyiv National Economic University',
      speciality: 'Economic Cybernetics',
      period: 'September 2006 – June 2011',
      country: 'Ukraine',
    },
  ],
};
