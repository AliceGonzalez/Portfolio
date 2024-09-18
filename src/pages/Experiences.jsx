import React from 'react';
import{ VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/experience.css'; // Import the CSS file

import Teleperformance from '../assets/images/teleperformance.png';
import ZipCode from '../assets/images/zipcode.png';
import Omdena from '../assets/images/omdena.png';
import CodeForPhilly from '../assets/images/codeforphilly.png';
import ExperienceTitle from '../assets/titles/experiences.png';

const experiences = [
  {
    logo: Omdena,
    company: 'Omdena',
    role: 'Lead Software Developer Volunteer',
    dates: 'Aug 2024 - Present',
     // Path to the logo image
    responsibilities: [
      'Engineering a custom automated transportation optimization system to refine student pick-up and drop-off routes, minimizing driver waiting times and delays, which boosts operational efficiency and supports program enrollment growth.',
      'Developing backend services in Java, creating efficient algorithms for route optimization, and managing data with MySQL, utilizing REST APIs for seamless integration.',
      'Building a responsive front-end interface with Angular to enhance user interaction and data visualization for the routing system and database administration.'
    ]
  },
  {
    company: 'CodeForPhilly',
    role: 'Software Developer Volunteer',
    dates: 'Jul 2024 - Sept 2024',
    logo: CodeForPhilly, // Path to the logo image
    responsibilities: [
      'Strengthened full-stack application Balancer Project utilizing AI technology to suggest personalized medication treatments, enhancing the accuracy and efficiency of the treatment process.',
      'Integrated server-side components to create endpoints for efficient communication with the database, ensuring seamless data handling and integration.',
      'Refined responsive design with Tailwind CSS as part of a team using React, Django, and PostgreSQL, implementing secure authentication.'
    ]
  },
  {
    company: 'Zip Code Wilmington',
    role: 'Software Developer Trainee',
    dates: 'Feb 2024 - May 2024',
    logo: ZipCode, // Path to the logo image
    responsibilities: [
      'Engineered and deployed a banking money management platform for Morgan Bank, integrating secure user authentication, transaction capabilities, a chatbox, and a customizable savings tracker.',
      'Developed backend services with Java and Spring Boot, and designed dynamic, responsive user interfaces using React, HTML, and JavaScript. Utilized RESTful APIs for seamless frontend-backend communication within a team of five.',
      'Completed over 1000 hours of intensive full-stack development training, focusing on backend technologies, databases, object-oriented programming, and Agile methodologies.'
    ]
  },
  {
    company: 'Teleperformance',
    role: 'EAP Care Manager',
    dates: 'Oct 2018 - Oct 2023',
    logo: Teleperformance, // Path to the logo image
    responsibilities: [
      'Implemented IT system changes and features for Spanish-speaking members, making it easier for them to seek care by enhancing the user experience.',
      'Provided technical support for user authentication issues and website troubleshooting.',
      'Resolved over 100 cases per month and managed a caseload of 50 cases per week on average; achieved these results by providing crisis intervention and delivering custom Disruptive Event Management (DEM).'
    ]
  },

];

const Experience = () => {
  return (
    <div className="experience-container">
     {/* <img src={ExperienceTitle} alt="title" /> */}
     {/* <p className='project-title'>Experiences</p> */}
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#' }}
            contentArrowStyle={{ borderRight: '7px solid #007bff' }}
            iconStyle={{ background: '#FFF', color: '#fff' }}
            icon={<img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />}
          >
            <h3 className="vertical-timeline-element-title">{exp.company}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.role}</h4>
            <p className="employment-dates">{exp.dates}</p>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;