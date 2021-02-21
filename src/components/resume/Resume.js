import AboutMe from '../aboutMe/AboutMe';
import Photo from '../photo/Photo';
import Sidebar from '../sidebar/Sidebar';
import ResumeWrapper from './ResumeStyled';

const Resume = () => {
  return (
    <>
      <ResumeWrapper>
        <AboutMe />
        <Sidebar />
      </ResumeWrapper>
    </>
  );
};

export default Resume;
