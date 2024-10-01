import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar" style={{ width: '250px', background: '#f4f4f4', padding: '15px', height: '100vh' }}>
      <h3>Employee Skill Set</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li 
          onClick={() => navigate('/certifications')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Certifications
        </li>
        <li 
          onClick={() => navigate('/work-experience')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Work Experience
        </li>
        <li 
          onClick={() => navigate('/skills-assessment')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Skills Assessment
        </li>
        <li 
          onClick={() => navigate('/training-development')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Training & Development
        </li>
        <li 
          onClick={() => navigate('/projects-achievements')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Projects & Achievements
        </li>
        <li 
          onClick={() => navigate('/additional-skills')} 
          style={{ cursor: 'pointer', padding: '15px 10px' }} // Increased padding
        >
          Additional Skills & Interests
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
