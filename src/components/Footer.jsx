import React from 'react';
import '../styles/footer.css'; // Link to your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and Developed by Alice Gonzalez  (Copyright &copy; {new Date().getFullYear()} AG)</p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;