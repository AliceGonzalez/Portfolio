import React, { useState } from 'react';
import '../styles/education.css'; // Ensure you link to the correct CSS file
import EducationTitle from '../assets/titles/education.png';


const educationData = [
  {
    institution: 'Zip Code Wilmington',
    location: 'Wilmington, DE',
    degree: 'Full Stack Java Software Development Certificate',
    date: 'May 2024',
  },
  {
    institution: 'Philadelphia College of Osteopathic Medicine',
    location: 'Philadelphia, PA',
    degree: 'Master of Science in Forensic Medicine',
    date: 'Aug 2021',
  },
  {
    institution: 'Purdue University',
    location: 'Indianapolis, IN',
    degree: 'Bachelor of Science in Health Sciences',
    gpa: 'GPA: 3.42',
    date: 'Feb 2018',
  },
  {
    institution: 'Berks Technical Institute',
    location: 'Wyomissing, PA',
    degree: 'Associate of Applied Science in Medical Assisting',
    gpa: 'GPA: 3.79',
    date: 'Mar 2013',
  },
];

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="timeline-container">
      <img src={EducationTitle} alt="EducationTitle" />
      <div className="timeline-content">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <button className="timeline-button" onClick={() => handleClick(index)}>
              {item.institution}
            </button>
            {activeIndex === index && (
              <div className="timeline-details">
                <p>{item.location}</p>
                <p>{item.degree}</p>
                {item.gpa && <p>{item.gpa}</p>}
                <p>{item.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
