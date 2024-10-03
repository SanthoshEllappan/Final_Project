import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLightbulb, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaClipboardList, FaHistory, FaBookOpen, FaUsers, FaChartLine } from 'react-icons/fa'; // Added FaUsers and FaChartLine

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/personal-details'); // Track the active path

  // Define a function to handle navigation
  const handleNavigation = (path) => {
    setActivePath(path); // Update active path
    navigate(path);
  };

  return (
    <aside className="sidebar" style={{ 
      width: '250px', 
      background: '#f4f4f4', 
      padding: '15px', 
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    }}>
      {/* Sidebar Items */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Group 1: Personal Info */}
        <li style={{ fontWeight: 'bold', marginBottom: '10px' }}>Personal Information</li>
        {[
          { name: 'Personal Details', path: '/details', icon: <FaUser /> },
          
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              padding: '10px 10px', 
              borderRadius: '4px',
              backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center', 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Group 2: Skills */}
        <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Skills</li>
        {[
          { name: 'Soft Skills', path: '/soft', icon: <FaLightbulb /> },
          { name: 'Technical Skills', path: '/technical', icon: <FaCode /> },
          { name: 'Training History', path: '/training-history', icon: <FaHistory /> },
          { name: 'Skill Development Plans', path: '/skill-development-plans', icon: <FaBookOpen /> },
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              padding: '10px 10px', 
              borderRadius: '4px',
              backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center', 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Group 3: Projects */}
        <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Projects</li>
        {[
          { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
          { name: 'Course Completions', path: '/courses', icon: <FaCertificate /> },
          { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
          { name: 'Certifications', path: '/certifications', icon: <FaClipboardList /> },
          { name: 'Feedback Review', path: '/feedback-review', icon: <FaClipboardList /> },
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              padding: '10px 10px', 
              borderRadius: '4px',
              backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center', 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Group 4: Employee Management */}
        <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Employee Management</li>
        {[
          { name: 'Employee Management', path: '/employee-management', icon: <FaUsers /> },
          { name: 'Employee Performance', path: '/employee-performance-review', icon: <FaChartLine /> },
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              padding: '10px 10px', 
              borderRadius: '4px',
              backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center', 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
          
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
