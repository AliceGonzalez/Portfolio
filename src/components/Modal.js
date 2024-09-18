import React from 'react';
import '../styles/modal.css'; // Ensure this path is correct

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="modal-left">
          <img src={project.image} alt={project.name} className="modal-image" />
        </div>
        <div className="modal-right">
          <h3 className="modal-name">{project.name}</h3>
          <p className="modal-description">{project.description}</p>
          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="modal-tech">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;