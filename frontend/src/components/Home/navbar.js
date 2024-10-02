// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//   const navigate = useNavigate();

//   // Define a function to handle navigation
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <aside className="sidebar" style={{ 
//       width: '250px', 
//       background: '#f4f4f4', 
//       padding: '15px', 
//       height: '100vh',
//       boxShadow: '2px 0 5px rgba(0,0,0,0.1)', // Add a subtle shadow for depth
//     }}>
      
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {[
//           { name: 'Personal Details', path: '/personal-details' },
//           { name: 'Soft Skills', path: '/soft-skills' },
//           { name: 'Technical Skills', path: '/technical-skills' },
//           { name: 'Course Completions', path: '/course-completions' },
//           { name: 'Projects', path: '/projects' },
//           { name: 'Specialization', path: '/specialization' },
//           { name: 'Achievements', path: '/achievements' },
//           { name: 'Feedback Review', path: '/feedback-review' },
//           { name: 'Training History', path: '/training-history' },
//           { name: 'Skill Development Plans', path: '/skill-development-plans' },
//           { name: 'Certifications', path: '/certifications' },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               padding: '15px 10px', 
//               borderRadius: '4px',
//               transition: 'background-color 0.3s', // Smooth transition for hover effect
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} // Light gray on hover
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} // Reset to transparent
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLightbulb, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaClipboardList, FaHistory, FaBookOpen } from 'react-icons/fa'; // Replace FaSkills with FaBookOpen or another icon

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
      {/* <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h2> */}
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Group 1: Personal Info */}
        <li 
          style={{ fontWeight: 'bold', marginBottom: '10px' }}>Personal Information
        </li>
        {[
          { name: 'Personal Details', path: '/details', icon: <FaUser /> },
          { name: 'Soft Skills', path: '/soft', icon: <FaLightbulb /> },
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
        <li 
          style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Skills
        </li>
        {[
          { name: 'Technical Skills', path: '/technical-skills', icon: <FaCode /> },
          { name: 'Training History', path: '/training-history', icon: <FaHistory /> },
          { name: 'Skill Development Plans', path: '/skill-development-plans', icon: <FaBookOpen /> }, // Changed to FaBookOpen
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
        <li 
          style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Projects
        </li>
        {[
          { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
          { name: 'Course Completions', path: '/course-completions', icon: <FaCertificate /> },
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
      </ul>
    </aside>
  );
};

export default Sidebar;
