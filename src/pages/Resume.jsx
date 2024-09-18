import React from 'react';
import '../styles/resume.css'; // Add your custom CSS for the resume section
import resumePage1 from '../assets/images/resume1.png'; // Update with actual path


const Resume = () => {
  return (
    <div className="resume-container">
      {/* <img src={ ResumeTitle} alt='resume-title' className=''/> */}
      <div className="resume-images">
        <img src={resumePage1} alt="Resume Page 1" className="resume-page" />
      </div>
    </div>
  );
};

export default Resume;
