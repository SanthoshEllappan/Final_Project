// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLightbulb, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaClipboardList, FaHistory, FaBookOpen, FaUsers, FaChartLine } from 'react-icons/fa'; // Added FaUsers and FaChartLine

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [activePath, setActivePath] = useState('/personal-details'); // Track the active path

//   // Define a function to handle navigation
//   const handleNavigation = (path) => {
//     setActivePath(path); // Update active path
//     navigate(path);
//   };

//   return (
//     <aside className="sidebar" style={{ 
//       width: '250px', 
//       background: '#f4f4f4', 
//       padding: '15px', 
//       height: '100vh',
//       boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//     }}>
//       {/* Sidebar Items */}
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {/* Group 1: Personal Info */}
//         <li style={{ fontWeight: 'bold', marginBottom: '10px' }}>Personal Information</li>
//         {[
//           { name: 'Personal Details', path: '/details', icon: <FaUser /> },
          
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               padding: '10px 10px', 
//               borderRadius: '4px',
//               backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
//               transition: 'background-color 0.3s',
//               display: 'flex', 
//               alignItems: 'center', 
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         {/* Group 2: Skills */}
//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Skills</li>
//         {[
//           { name: 'Soft Skills', path: '/soft', icon: <FaLightbulb /> },
//           { name: 'Technical Skills', path: '/technical', icon: <FaCode /> },
//           { name: 'Training History', path: '/training-history', icon: <FaHistory /> },
//           { name: 'Skill Development Plans', path: '/skill-development-plans', icon: <FaBookOpen /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               padding: '10px 10px', 
//               borderRadius: '4px',
//               backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
//               transition: 'background-color 0.3s',
//               display: 'flex', 
//               alignItems: 'center', 
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         {/* Group 3: Projects */}
//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Projects</li>
//         {[
//           { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
//           { name: 'Course Completions', path: '/courses', icon: <FaCertificate /> },
//           { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
//           { name: 'Certifications', path: '/certifications', icon: <FaClipboardList /> },
//           { name: 'Feedback Review', path: '/feedback-review', icon: <FaClipboardList /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               padding: '10px 10px', 
//               borderRadius: '4px',
//               backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
//               transition: 'background-color 0.3s',
//               display: 'flex', 
//               alignItems: 'center', 
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         {/* Group 4: Employee Management */}
//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px' }}>Employee Management</li>
//         {[
//           { name: 'Employee Management', path: '/employee-management', icon: <FaUsers /> },
//           { name: 'Employee Performance', path: '/employee-performance-review', icon: <FaChartLine /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               padding: '10px 10px', 
//               borderRadius: '4px',
//               backgroundColor: activePath === item.path ? '#d0e1f9' : 'transparent',
//               transition: 'background-color 0.3s',
//               display: 'flex', 
//               alignItems: 'center', 
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#d0e1f9' : 'transparent'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
          
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLightbulb, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaClipboardList, FaHistory, FaBookOpen, FaUsers, FaChartLine } from 'react-icons/fa';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [activePath, setActivePath] = useState('/personal-details');

//   const handleNavigation = (path) => {
//     setActivePath(path);
//     navigate(path);
//   };

//   return (
//     <aside className="sidebar" style={{ 
//       width: '250px', 
//       background: '#ffffff', // White background for sidebar
//       padding: '15px', 
//       height: '100vh',
//       boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//     }}>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         <li style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '16px', color: '#000000' }}>Personal Information</li>
//         {[
//           { name: 'Personal Details', path: '/details', icon: <FaUser /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               marginBottom: '10px',
//               borderRadius: '8px',
//               backgroundColor: activePath === item.path ? '#3a4e69' : '#ffffff', // Card-like style for active items
//               boxShadow: activePath === item.path ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
//               padding: '10px 15px',
//               transition: 'background-color 0.3s, box-shadow 0.3s',
//               display: 'flex', 
//               alignItems: 'center',
//               color: activePath === item.path ? '#ffffff' : '#000000', // White text for better visibility
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#f0f0f0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#ffffff'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px', fontSize: '16px', color: '#000000' }}>Skills</li>
//         {[
//           { name: 'Soft Skills', path: '/soft', icon: <FaLightbulb /> },
//           { name: 'Technical Skills', path: '/technical', icon: <FaCode /> },
//           { name: 'Training History', path: '/training-history', icon: <FaHistory /> },
//           { name: 'Skill Development Plans', path: '/skill-development-plans', icon: <FaBookOpen /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               marginBottom: '10px',
//               borderRadius: '8px',
//               backgroundColor: activePath === item.path ? '#3a4e69' : '#ffffff', 
//               boxShadow: activePath === item.path ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
//               padding: '10px 15px',
//               transition: 'background-color 0.3s, box-shadow 0.3s',
//               display: 'flex', 
//               alignItems: 'center',
//               color: activePath === item.path ? '#ffffff' : '#000000',
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#f0f0f0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#ffffff'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px', fontSize: '16px', color: '#000000' }}>Projects</li>
//         {[
//           { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
//           { name: 'Course Completions', path: '/courses', icon: <FaCertificate /> },
//           { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
//           { name: 'Certifications', path: '/certifications', icon: <FaClipboardList /> },
//           { name: 'Feedback Review', path: '/feedback-review', icon: <FaClipboardList /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               marginBottom: '10px',
//               borderRadius: '8px',
//               backgroundColor: activePath === item.path ? '#3a4e69' : '#ffffff', 
//               boxShadow: activePath === item.path ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
//               padding: '10px 15px',
//               transition: 'background-color 0.3s, box-shadow 0.3s',
//               display: 'flex', 
//               alignItems: 'center',
//               color: activePath === item.path ? '#ffffff' : '#000000',
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#f0f0f0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#ffffff'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
//             {item.name}
//           </li>
//         ))}

//         <li style={{ fontWeight: 'bold', margin: '15px 0 10px', fontSize: '16px', color: '#000000' }}>Employee Management</li>
//         {[
//           { name: 'Employee Management', path: '/employee-management', icon: <FaUsers /> },
//           { name: 'Employee Performance', path: '/employee-performance-review', icon: <FaChartLine /> },
//         ].map(item => (
//           <li 
//             key={item.path}
//             onClick={() => handleNavigation(item.path)} 
//             style={{ 
//               cursor: 'pointer', 
//               marginBottom: '10px',
//               borderRadius: '8px',
//               backgroundColor: activePath === item.path ? '#3a4e69' : '#ffffff', 
//               boxShadow: activePath === item.path ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
//               padding: '10px 15px',
//               transition: 'background-color 0.3s, box-shadow 0.3s',
//               display: 'flex', 
//               alignItems: 'center',
//               color: activePath === item.path ? '#ffffff' : '#000000',
//             }} 
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#f0f0f0'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activePath === item.path ? '#3a4e69' : '#ffffff'}
//           >
//             <span style={{ marginRight: '10px' }}>{item.icon}</span>
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
import { FaUser, FaLightbulb, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaClipboardList, FaHistory, FaBookOpen, FaUsers, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/personal-details');

  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <aside className="sidebar" style={{ 
      width: '250px', 
      background: '#ffffff', // White background for sidebar
      padding: '15px', 
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Personal Information Section */}
        <li style={{ 
          fontWeight: 'bold', 
          marginBottom: '10px', 
          fontSize: '16px', 
          color: '#ffffff', 
          backgroundColor: '#3a4e69', // Card-like style for section header
          padding: '10px', 
          borderRadius: '8px',
        }}>
          Personal Information
        </li>
        {[
          { name: 'Personal Details', path: '/details', icon: <FaUser /> },
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#E2F1E7', // Card-like background for items
              padding: '10px 15px',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center',
              color: '#000000', // Black text for item
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1e7e1'} // Lighter shade on hover
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E2F1E7'} // Original color
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Skills Section */}
        <li style={{ 
          fontWeight: 'bold', 
          margin: '15px 0 10px', 
          fontSize: '16px', 
          color: '#ffffff', 
          backgroundColor: '#3a4e69', // Card-like style for section header
          padding: '10px', 
          borderRadius: '8px',
        }}>
          Skills
        </li>
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
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#E2F1E7', // Card-like background for items
              padding: '10px 15px',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center',
              color: '#000000', // Black text for item
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1e7e1'} // Lighter shade on hover
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E2F1E7'} // Original color
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Projects Section */}
        <li style={{ 
          fontWeight: 'bold', 
          margin: '15px 0 10px', 
          fontSize: '16px', 
          color: '#ffffff', 
          backgroundColor: '#3a4e69', // Card-like style for section header
          padding: '10px', 
          borderRadius: '8px',
        }}>
          Projects
        </li>
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
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#E2F1E7', // Card-like background for items
              padding: '10px 15px',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center',
              color: '#000000', // Black text for item
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1e7e1'} // Lighter shade on hover
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E2F1E7'} // Original color
          >
            <span style={{ marginRight: '10px' }}>{item.icon}</span>
            {item.name}
          </li>
        ))}

        {/* Employee Management Section */}
        <li style={{ 
          fontWeight: 'bold', 
          margin: '15px 0 10px', 
          fontSize: '16px', 
          color: '#ffffff', 
          backgroundColor: '#3a4e69', // Card-like style for section header
          padding: '10px', 
          borderRadius: '8px',
        }}>
          Employee Management
        </li>
        {[
          { name: 'Employee Management', path: '/employee-management', icon: <FaUsers /> },
          { name: 'Employee Performance', path: '/employee-performance-review', icon: <FaChartLine /> },
        ].map(item => (
          <li 
            key={item.path}
            onClick={() => handleNavigation(item.path)} 
            style={{ 
              cursor: 'pointer', 
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#E2F1E7', // Card-like background for items
              padding: '10px 15px',
              transition: 'background-color 0.3s',
              display: 'flex', 
              alignItems: 'center',
              color: '#000000', // Black text for item
            }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1e7e1'} // Lighter shade on hover
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E2F1E7'} // Original color
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
