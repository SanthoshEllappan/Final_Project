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
        <li style={{ fontWeight: 'bold', marginBottom: '10px' }}>User Details</li>
        {[
          { name: 'User Details', path: '/admin/adminHome', icon: <FaUser /> },
          
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
