import React, { useState } from 'react';
import '../styles/projects.css'; // Import the CSS file for styling
import Modal from '../components/Modal'; // Import the Modal component
import Type from '../components/Typing';

import MorganBank from '../assets/projects/morganbank_1.png';
import Balancer from '../assets/projects/balance_login_form.png';
import MediForm from '../assets/projects/mediform_2.png';
import Meme from '../assets/projects/meme.png';
import TekTrack from '../assets/projects/TekTrackUX.png';
import MultiRoute from '../assets/projects/multuroute.png';
import projectTitle from '../assets/titles/projects.png';

const projects = [
  {
    name: 'Morgan Bank',
    image: MorganBank,
    technologies: ['Java, Spring Boot, MySQL, React, H2 Server'],
    description: 'Developed a comprehensive money management application featuring front-end design, navigation, transaction operations, login/registration, and a ChatBox for user interactions. The application includes a Savings Tracker tool, allowing users to monitor and manage their finances. Once authenticated, users can submit transactions, view account details, and track their savings, providing a seamless and secure financial management experience.',
  },
//   {
//     name: 'Multi-Routes',
//     image: MultiRoute,
//     technologies: ['Angular, MySQL, Python'],
//     description: 'Developed a comprehensive transportation business solution aimed at optimizing routes for school buses and other transportation services. The software streamlines route planning and management, ensuring efficient and cost-effective operations. It provides real-time updates, route tracking, and scheduling to ensure safe and timely transportation for students. The solution is designed to enhance both operational efficiency and user experience, providing schools and transportation companies with the tools they need for effective route management',
//   },
  {
    name: 'Balancer',
    image: Balancer,
    technologies: ['Python, Django, MySQL, Docker'],
    description: 'As part of a collaborative team, I played a key role in developing the front-end using React and Tailwind CSS, ensuring a responsive and user-friendly design. On the server side, I integrated components to create efficient endpoints for seamless communication with a PostgreSQL database,',
  },
  {
    name: 'Meme Generator',
    image: Meme,
    technologies: ['JavaScript, DOM, HTML, CSS'],
    description: 'A fun and easy-to-use tool that allows users to create custom memes by uploading an image URL and adding personalized text. The interface makes it simple to generate multiple memes with different layouts and styles. Users can quickly share their creations across social media or save them for later use, making it a great platform for both casual and creative meme enthusiasts.',
  },  {
    name: 'MediForm (in Progress)',
    image: MediForm,
    technologies: ['Angular, MySQL, Python'],
    description: 'Developing an innovative application aimed at modernizing and streamlining medical processes. Developed independently, this app enhances medical services by enabling the screening of patient medical histories to determine the necessity of physical visits. It facilitates efficient healthcare management through features such as real-time tracking of form statuses, availability of electronic form templates, and support for multilingual accessibility.',
  },

  {
    name: 'TekTrack (in Progress)',
    image: TekTrack,
    technologies: ['Angular, MySQL, Python'],
    description: 'A mobile app designed to assist new developers with the job and internship application process. TekTrack enables users to organize and manage their application journey on the go. The application features database management and user authentication, allowing users to input job details, track application statuses, and manage related notes. With its intuitive interface, users can easily update the status of their applications and stay organized throughout their job search journey.',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      {/* <img src={projectTitle} alt="ProjectTitle"/> */}
      <p className='project-title'>Projects</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal 
          isOpen={!!selectedProject} 
          onClose={handleCloseModal} 
          project={selectedProject} 
        />
      )}
      <Type/>
    </div>
  );
};

export default Projects;
