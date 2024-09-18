import React from 'react';
import '../styles/resume.css'; // Add your custom CSS for the resume section
import resumePage1 from '../assets/images/resume1.png'; // Update with actual path
import resumePage2 from '../assets/images/resume2.png'; // Update with actual path
import ResumeTitle from '../assets/titles/resume.png';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* <img src={ ResumeTitle} alt='resume-title' className=''/> */}
      <div className="resume-images">
        <img src={resumePage1} alt="Resume Page 1" className="resume-page" />
        <img src={resumePage2} alt="Resume Page 2" className="resume-page" />
      </div>
    </div>
  );
};

export default Resume;
