import Git from '../assets/icons/Git';
import LinkedIn from '../assets/icons/LinkedIn';
import Mail from '../assets/icons/Mail';
import Tel from '../assets/icons/Tel';
import Telegram from '../assets/icons/Telegram';

export default {
  contacts: [
    { icon: Tel(), link: 'tel:380502797410', text: ' +38 050 279 74 10' },
    { icon: Mail(), link: 'mailto:patronusv@gmail.com', text: 'patronusv@gmail.com' },
    { icon: Git(), link: 'https://github.com/patronusv', text: 'github.com/patronusv' },
    { icon: LinkedIn(), link: 'https://www.linkedin.com/in/viktor-gorokhov/', text: 'linkedin.com/in/viktor-gorokhov/' },
    { icon: Telegram(), link: 'https://t.me/ViktorGorokhov', text: '@ViktorGorokhov' },
  ],
  techSkills: ['HTML5', 'CSS3', 'GIT', 'WebPack', 'JavaScript', 'React.js', 'Node.js', 'Scrum', 'Agile'],
  // 'Node.js',
  softSkills: ['Responsibility', 'Critical-thinking', 'Problem solving', 'Result-oriented', 'Teamwork'],
  languageSkills: ['English - fluent', 'Ukrainian - native', 'Russian - native'],
  projects: [
    {
      link: 'https://patronusv.github.io/parcel-project-template/',
      techStack: 'HTML, CSS',
      description: 'The idea of this project is an adaptive webpage on english tutoring made using knowledge of HTML and CSS(SASS).',
    },
    {
      link: 'https://patronusv.github.io/js-teamproject-olx/',
      techStack: 'Javascript',
      description: 'The idea of this project is an adaptive functioning callboard web-app made using knowledge of Javascript.',
    },
    {
      link: 'https://team3-slimmom.netlify.app',
      techStack: 'React.js',
      description:
        'The idea of this project is an adaptive functioning web-app for diet-planning and calories calculation made using knowledge of React and Redux.',
    },
    {
      link: 'https://bookreading-team2.netlify.app',
      techStack: 'Node.js, React.js',
      description:
        'The idea of this project is an adaptive functioning web-app for creating your library and planning trainings where you must read books in a certain period you set. Made using knowledge of Node.js and React.',
    },
  ],
  work: [
    {
      title: 'Fullstack Developer',
      company: 'Student at GoIT',
      period: 'September 2020 - May 2021',
      country: 'Ukraine',
      duties: ['Teamlead in 4 team projects.'],
    },
    {
      title: 'Junior Category Manager',
      company: 'LLC “Expansiya”',
      period: 'January 2019 – March 2019',
      country: 'Ukraine',
      duties: [
        'Planning supply for the shops',
        'Holding tenders and placing orders',
        'Negotiating terms of cooperation with suppliers',
        'Planning promo activities',
        'Providing analytics and category performance reports',
        'Pricing control',
      ],
    },
    {
      title: 'Manager Assistant',
      company: 'LLC “Expansiya”',
      period: 'October 2012 – December 2018',
      country: 'Ukraine',
      duties: [
        'Working process optimization by creating automated Excel templates and developing complex formulas for order calculation',
        'Consolidation of working data into a single database',
        'Maintaining the contract base',
        'Providing analytics and category performance reports',
        'Interaction with suppliers and store personnel on resolving issues',
        'Calculating and placing orders, pricing',
      ],
    },
  ],
  education: [
    {
      establishment: 'GoIT',
      speciality: 'Fullstack JS Developer',
      period: 'September 2020 - May 2021',
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
