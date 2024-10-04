// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8080/api/softskills',{
//           params:{userId:localStorage.getItem("userConfig")}
//         });
        
//         setEmployeeData(response.data); // Assuming the response contains employee data
//       } catch (error) {
//         setError(error.response ? error.response.data.message : 'Error fetching data');
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!employeeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between'
//       }}>
        
//       {Object.keys(employeeData).length !== 0 && (
//         <>
//           <Card title="General Information">
//             <p><strong>Name:</strong> {employeeData.name}</p>
//             <p><strong>Employee ID:</strong> {employeeData.employeeId}</p>
//             <p><strong>Designation:</strong> {employeeData.designation}</p>
//             <p><strong>Department:</strong> {employeeData.department}</p>
//           </Card>
//           <Card title="Soft Skills">
//             <p><strong>Communication:</strong> {employeeData.communication}/10</p>
//             <p><strong>Teamwork:</strong> {employeeData.teamwork}</p>
//             <p><strong>Problem Solving:</strong> {employeeData.problemSolving}/10</p>
//             <p><strong>Adaptability:</strong> {employeeData.adaptability}</p>
//             <p><strong>Time Management:</strong> {employeeData.timeManagement}/10</p>
//             <p><strong>Critical Thinking:</strong> {employeeData.criticalThinking}</p>
//             <p><strong>Creativity:</strong> {employeeData.creativity}</p>
//             <p><strong>Leadership:</strong> {employeeData.leadership}</p>
//             <p><strong>Interpersonal Skills:</strong> {employeeData.interpersonalSkills}</p>
//             <p><strong>Emotional Intelligence:</strong> {employeeData.emotionalIntelligence}</p>
//           </Card>
//           <Card title="Contact Information">
//             <p><strong>Email:</strong> {employeeData.contact}</p>
//           </Card>
//             </>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// // Card Component for styling consistency
// const Card = ({ title, children }) => {
//   return (
//     <div style={{
//       background: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//       padding: '15px',
//       margin: '10px',
//       flex: '1 1 calc(30% - 20px)', // Responsive card width
//       minWidth: '250px' // Minimum width for smaller screens
//     }}>
//       <h3 style={{ margin: '0 0 15px' }}>{title}</h3>
//       {children}
//     </div>
//   );
// };

// export default EmployeeDashboard;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [technicalSkills, setTechnicalSkills] = useState(null); // New state for technical skills
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const userId = localStorage.getItem("userConfig");

        // Fetch soft skills data
        const softSkillsResponse = await axios.get('http://127.0.0.1:8080/api/softskills', {
          params: { userId }
        });
        setEmployeeData(softSkillsResponse.data);

        // Fetch technical skills data
        const technicalSkillsResponse = await axios.get('http://127.0.0.1:8080/api/technical', {
          params: { userId }
        });
        setTechnicalSkills(technicalSkillsResponse.data);

      } catch (error) {
        setError(error.response ? error.response.data.message : 'Error fetching data');
      }
    };

    fetchEmployeeData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!employeeData || !technicalSkills) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        
      {Object.keys(employeeData).length !== 0 && (
        <>
          <Card title="General Information">
            <p><strong>Name:</strong> {employeeData.name}</p>
            <p><strong>Employee ID:</strong> {employeeData.employeeId}</p>
            <p><strong>Designation:</strong> {employeeData.designation}</p>
            <p><strong>Department:</strong> {employeeData.department}</p>
          </Card>
          <Card title="Soft Skills">
            <p><strong>Communication:</strong> {employeeData.communication}/10</p>
            <p><strong>Teamwork:</strong> {employeeData.teamwork}/10</p>
            <p><strong>Problem Solving:</strong> {employeeData.problemSolving}/10</p>
            <p><strong>Adaptability:</strong> {employeeData.adaptability}/10</p>
            <p><strong>Time Management:</strong> {employeeData.timeManagement}/10</p>
            <p><strong>Critical Thinking:</strong> {employeeData.criticalThinking}/10</p>
            <p><strong>Creativity:</strong> {employeeData.creativity}/10</p>
            <p><strong>Leadership:</strong> {employeeData.leadership}/10</p>
            <p><strong>Interpersonal Skills:</strong> {employeeData.interpersonalSkills}/10</p>
            <p><strong>Emotional Intelligence:</strong> {employeeData.emotionalIntelligence}/10</p>
          </Card>
          <Card title="Technical Skills"> {/* New Card for Technical Skills */}
            <p><strong>Programming Languages:</strong> {technicalSkills.programmingLanguages}/10</p>
            <p><strong>Web Development:</strong> {technicalSkills.webDevelopment}/10</p>
            <p><strong>Database Management:</strong> {technicalSkills.databaseManagement}/10</p>
            <p><strong>Cloud Computing:</strong> {technicalSkills.cloudComputing}</p>
            <p><strong>Version Control:</strong> {technicalSkills.versionControl}</p>
            <p><strong>Machine Learning:</strong> {technicalSkills.machineLearning}</p>
            <p><strong>Data Analysis:</strong> {technicalSkills.dataAnalysis}</p>
            <p><strong>Cybersecurity:</strong> {technicalSkills.cybersecurity}</p>
          </Card>
          <Card title="Contact Information">
            <p><strong>Email:</strong> {employeeData.contact}</p>
          </Card>
            </>
          )
        }
      </div>
    </div>
  );
};

// Card Component for styling consistency
const Card = ({ title, children }) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      margin: '10px',
      flex: '1 1 calc(30% - 20px)', // Responsive card width
      minWidth: '250px' // Minimum width for smaller screens
    }}>
      <h3 style={{ margin: '0 0 15px' }}>{title}</h3>
      {children}
    </div>
  );
};

export default EmployeeDashboard;
