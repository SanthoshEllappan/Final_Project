// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [technicalSkills, setTechnicalSkills] = useState(null);
//   const [achievements, setAchievements] = useState(null);
//   const [certifications, setCertifications] = useState(null);
//   const [courses, setCourses] = useState(null);
//   const [projectSkills, setProjectSkills] = useState(null);
//   const [softSkills, setSoftSkills] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const userId = localStorage.getItem("userConfig");

//         // Fetch soft skills data
//         const softSkillsResponse = await axios.get('http://127.0.0.1:8080/api/softskills', {
//           params: { userId }
//         });
//         setSoftSkills(softSkillsResponse.data);
        
        
//         // Fetch technical skills data
//         const technicalSkillsResponse = await axios.get('http://127.0.0.1:8080/api/technical', {
//           params: { userId }
//         });
//         setTechnicalSkills(technicalSkillsResponse.data);
        

//         // Fetch achievements data
//         const achievementsResponse = await axios.get('http://127.0.0.1:8080/api/achievements/id', {
//           params: { userId }
//         });
//         setAchievements(achievementsResponse.data);
    
//         // Fetch certifications data
//         const certificationsResponse = await axios.get('http://127.0.0.1:8080/api/certifications/certifications/id', {
//           params: { userId }
//         });
//         setCertifications(certificationsResponse.data);
        

//         // Fetch courses data
//         const courseResponse = await axios.get('http://127.0.0.1:8080/api/courses', {
//           params: { userId }
//         });     
//         setCourses(courseResponse.data);

//         // Fetch project skills data
//         const projectSkillResponse = await axios.get('http://127.0.0.1:8080/api/project', {
//           params: { userId }
//         });
//         setProjectSkills(projectSkillResponse.data);
        

//         // Fetch employee data
//         const employeeResponse = await axios.get('http://127.0.0.1:8080/api/personal/byid', {
//           params: { userId }
//         });
//         setEmployeeData(employeeResponse.data);
        

//         setLoading(false); // Data loaded
//       } catch (error) {
//         setError(error.response ? error.response.data.message : 'Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between'
//       }}>
//         {/* General Information */}
//         {Object.keys(employeeData).length!=0 ? (
//           <Card title="General Information">
//             <p><strong>First Name:</strong> {employeeData.firstName}</p>
//             <p><strong>Last Name:</strong> {employeeData.lastName}</p>
//             <p><strong>Email:</strong> {employeeData.email}</p>
//             <p><strong>Phone Number:</strong> {employeeData.phone}</p>
//             <p><strong>Position:</strong> {employeeData.position}</p>
//             <p><strong>Employee ID:</strong> {employeeData.employeeid}</p>
//             <p><strong>Start Date:</strong> {employeeData.startDate && new Date(employeeData.startDate).toLocaleDateString()}</p>
//             <p><strong>Date of Birth:</strong> {employeeData.dateOfBirth && new Date(employeeData.dateOfBirth).toLocaleDateString()}</p>
//             <p><strong>Gender:</strong> {employeeData.gender}</p>
//             <p><strong>Address:</strong> {employeeData.address}</p>
//             <p><strong>Employment Status:</strong> {employeeData.employmentStatus}</p>
//           </Card>
//         ) : (
//           <Card title="General Information">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Soft Skills */}
//         {Object.keys(softSkills).length!=0 ? (
//           <Card title="Soft Skills">
//             <p><strong>Communication:</strong> {softSkills.communication}/10</p>
//             <p><strong>Teamwork:</strong> {softSkills.teamwork}</p>
//             <p><strong>Problem Solving:</strong> {softSkills.problemSolving}/10</p>
//             <p><strong>Adaptability:</strong> {softSkills.adaptability}</p>
//             <p><strong>Time Management:</strong> {softSkills.timeManagement}/10</p>
//             <p><strong>Critical Thinking:</strong> {softSkills.criticalThinking}</p>
//             <p><strong>Creativity:</strong> {softSkills.creativity}</p>
//             <p><strong>Leadership:</strong> {softSkills.leadership}</p>
//             <p><strong>Interpersonal Skills:</strong> {softSkills.interpersonalSkills}</p>
//             <p><strong>Emotional Intelligence:</strong> {softSkills.emotionalIntelligence}</p>
//           </Card>
//         ) : (
//           <Card title="Soft Skills">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Technical Skills */}
//         {Object.keys(technicalSkills).length!=0 ? (
//           <Card title="Technical Skills">
//             <p><strong>Programming Languages:</strong> {technicalSkills.programmingLanguages}/10</p>
//             <p><strong>Web Development:</strong> {technicalSkills.webDevelopment}/10</p>
//             <p><strong>Database Management:</strong> {technicalSkills.databaseManagement}/10</p>
//             <p><strong>Cloud Computing:</strong> {technicalSkills.cloudComputing}</p>
//             <p><strong>Version Control:</strong> {technicalSkills.versionControl}</p>
//             <p><strong>Machine Learning:</strong> {technicalSkills.machineLearning}</p>
//             <p><strong>Data Analysis:</strong> {technicalSkills.dataAnalysis}</p>
//             <p><strong>Cybersecurity:</strong> {technicalSkills.cybersecurity}</p>
//           </Card>
//         ) : (
//           <Card title="Technical Skills">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Project Skills */}
//         {Object.keys(projectSkills).length!=0 ? (
//           <Card title="Projects">
//             <p><strong>Favorite Project:</strong> {projectSkills.favoriteProject}</p>
//             <p><strong>Project Type:</strong> {projectSkills.projectType}</p>
//             <p><strong>Tools Used:</strong> {projectSkills.toolsUsed}</p>
//             <p><strong>Software Engineer Projects:</strong> {projectSkills.softwareEngineerProjects}</p>
//             <p><strong>Consultant Projects:</strong> {projectSkills.consultantProjects}</p>
//             <p><strong>Data Science Projects:</strong> {projectSkills.dataScienceProjects}</p>
//             <p><strong>Full Stack Projects:</strong> {projectSkills.fullStackProjects}</p>
//             <p><strong>Data Analyst Projects:</strong> {projectSkills.dataAnalystProjects}</p>
//             <p><strong>Data Engineer Projects:</strong> {projectSkills.dataEngineerProjects}</p>
//           </Card>
//         ) : (
//           <Card title="Projects">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Courses */}
//         {Object.keys(courses).length!=0 ? (
//           <Card title="Courses">
//             <p><strong>Course Name:</strong> {courses.courseName}</p>
//             <p><strong>Platform:</strong> {courses.platform}</p>
//             <p><strong>Specialization:</strong> {courses.specialization}</p>
//             <p><strong>Total Courses:</strong> {courses.totalCourses}</p>
//             <p><strong>Course Duration:</strong> {courses.courseDuration} months</p>
//             <p><strong>Completion Status:</strong> {courses.completionStatus}</p>
//           </Card>
//         ) : (
//           <Card title="Courses">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Certifications */}
//         {Object.keys(certifications).length!=0 ? (
//           <Card title="Certifications">
//             <p><strong>Certification Title:</strong> {certifications.certificationTitle}</p>
//              <p><strong>Platform:</strong> {certifications.platform}</p>
//              <p><strong>Specialization:</strong> {certifications.specialization}</p>
//              <p><strong>Date Obtained:</strong> {new Date(certifications.dateObtained).toLocaleDateString()}</p>
//              <p><strong>Duration:</strong> {certifications.duration} months</p>
//           </Card>
//         ) : (
//           <Card title="Certifications">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}

//         {/* Achievements */}
//         {Object.keys(achievements).length!=0 ? (
//           <Card title="Achievements">
//             <p><strong>Achievement Title:</strong> {achievements.achievementTitle}</p>
//            <p><strong>Organization:</strong> {achievements.organization}</p>
//            <p><strong>Date Achieved:</strong> {new Date(achievements.dateAchieved).toLocaleDateString()}</p>
//            <p><strong>Category:</strong> {achievements.category}</p>
//            <p><strong>Description:</strong> {achievements.description}</p>
//           </Card>
//         ) : (
//           <Card title="Achievements">
//             <p>No information available. Please fill the mandatory forms.</p>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, children }) => {
//   return (
//     <div style={{
//       border: '1px solid #ccc',
//       borderRadius: '8px',
//       padding: '20px',
//       margin: '10px',
//       flex: '1 1 30%',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       backgroundColor: '#fff'
//     }}>
//       <h3 style={{ marginBottom: '10px' }}>{title}</h3>
//       {children}
//     </div>
//   );
// };

// export default EmployeeDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar, Radar } from 'react-chartjs-2'; // Import charts from 'react-chartjs-2'
// import 'chart.js/auto';

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [technicalSkills, setTechnicalSkills] = useState(null);
//   const [achievements, setAchievements] = useState(null);
//   const [certifications, setCertifications] = useState(null);
//   const [courses, setCourses] = useState(null);
//   const [projectSkills, setProjectSkills] = useState(null);
//   const [softSkills, setSoftSkills] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const userId = localStorage.getItem("userConfig");

//         const [softSkillsResponse, technicalSkillsResponse, achievementsResponse, certificationsResponse, courseResponse, projectSkillResponse, employeeResponse] = await Promise.all([
//           axios.get('http://127.0.0.1:8080/api/softskills', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/technical', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/achievements/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/certifications/certifications/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/courses', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/project', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/personal/byid', { params: { userId } })
//         ]);

//         setSoftSkills(softSkillsResponse.data);
//         setTechnicalSkills(technicalSkillsResponse.data);
//         setAchievements(achievementsResponse.data);
//         setCertifications(certificationsResponse.data);
//         setCourses(courseResponse.data);
//         setProjectSkills(projectSkillResponse.data);
//         setEmployeeData(employeeResponse.data);

//         setLoading(false);
//       } catch (error) {
//         setError(error.response ? error.response.data.message : 'Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Data for Bar Chart (Projects)
//   const projectData = {
//     labels: [
//       'Software Engineer Projects',
//       'Consultant Projects',
//       'Data Science Projects',
//       'Full Stack Projects',
//       'Data Analyst Projects',
//       'Data Engineer Projects',
//     ],
//     datasets: [
//       {
//         label: 'Number of Projects',
//         data: [
//           projectSkills.softwareEngineerProjects || 0,
//           projectSkills.consultantProjects || 0,
//           projectSkills.dataScienceProjects || 0,
//           projectSkills.fullStackProjects || 0,
//           projectSkills.dataAnalystProjects || 0,
//           projectSkills.dataEngineerProjects || 0,
//         ],
//         backgroundColor: '#4CAF50',
//         borderColor: '#388E3C',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for Radar Chart (Skills)
//   const skillsData = {
//     labels: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Time Management', 'Programming', 'Web Development', 'Database Management'],
//     datasets: [
//       {
//         label: 'Soft Skills',
//         data: [
//           softSkills.communication || 0,
//           softSkills.teamwork || 0,
//           softSkills.problemSolving || 0,
//           softSkills.adaptability || 0,
//           softSkills.timeManagement || 0,
//         ],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Technical Skills',
//         data: [
//           technicalSkills.programmingLanguages || 0,
//           technicalSkills.webDevelopment || 0,
//           technicalSkills.databaseManagement || 0,
//           technicalSkills.cloudComputing || 0,
//           technicalSkills.versionControl || 0,
//         ],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>

//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {/* General Information */}
//         {employeeData && (
//           <Card title="General Information">
//             <p><strong>Name:</strong> {employeeData.firstName} {employeeData.lastName}</p>
//             <p><strong>Employee ID:</strong> {employeeData.employeeid}</p>
//             <p><strong>Position:</strong> {employeeData.position}</p>
//             <p><strong>Status:</strong> {employeeData.employmentStatus}</p>
//           </Card>
//         )}

//         {/* Courses */}
//         <Card title="Total Courses Completed">
//           <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>{courses.totalCourses}</h1>
//         </Card>

//         {/* Certifications */}
//         <Card title="Certifications Specialization">
//           <p>{certifications.specialization}</p>
//         </Card>
//       </div>

//       {/* Charts Section */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {/* Projects Bar Chart */}
//         <div style={{ flex: '1 1 45%', marginBottom: '20px' }}>
//           <Card title="Projects Overview">
//             <Bar data={projectData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
//           </Card>
//         </div>

//         {/* Skills Radar Chart */}
//         <div style={{ flex: '1 1 45%', marginBottom: '20px' }}>
//           <Card title="Skills Overview">
//             <Radar data={skillsData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, children }) => (
//   <div style={{
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '20px',
//     margin: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//     flex: '1 1 30%',
//   }}>
//     <h3 style={{ marginBottom: '10px' }}>{title}</h3>
//     {children}
//   </div>
// );

// export default EmployeeDashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar, Radar } from 'react-chartjs-2';
// import 'chart.js/auto';

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [technicalSkills, setTechnicalSkills] = useState({});
//   const [achievements, setAchievements] = useState(null);
//   const [certifications, setCertifications] = useState(null);
//   const [courses, setCourses] = useState(null);
//   const [projectSkills, setProjectSkills] = useState(null);
//   const [softSkills, setSoftSkills] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const userId = localStorage.getItem("userConfig");

//         const [softSkillsResponse, technicalSkillsResponse, achievementsResponse, certificationsResponse, courseResponse, projectSkillResponse, employeeResponse] = await Promise.all([
//           axios.get('http://127.0.0.1:8080/api/softskills', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/technical', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/achievements/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/certifications/certifications/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/courses', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/project', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/personal/byid', { params: { userId } })
//         ]);

//         setSoftSkills(softSkillsResponse.data);
//         setTechnicalSkills(technicalSkillsResponse.data);
//         setAchievements(achievementsResponse.data);
//         setCertifications(certificationsResponse.data);
//         setCourses(courseResponse.data);
//         setProjectSkills(projectSkillResponse.data);
//         setEmployeeData(employeeResponse.data);

//         setLoading(false);
//       } catch (error) {
//         setError(error.response ? error.response.data.message : 'Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Data for Bar Chart (Projects)
//   const projectData = {
//     labels: [
//       'Software Engineer Projects',
//       'Consultant Projects',
//       'Data Science Projects',
//       'Full Stack Projects',
//       'Data Analyst Projects',
//       'Data Engineer Projects',
//     ],
//     datasets: [
//       {
//         label: 'Number of Projects',
//         data: [
//           projectSkills?.softwareEngineerProjects || 0,
//           projectSkills?.consultantProjects || 0,
//           projectSkills?.dataScienceProjects || 0,
//           projectSkills?.fullStackProjects || 0,
//           projectSkills?.dataAnalystProjects || 0,
//           projectSkills?.dataEngineerProjects || 0,
//         ],
//         backgroundColor: '#4CAF50',
//         borderColor: '#388E3C',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for Radar Chart (Skills)
//   const skillsData = {
//     labels: ['Communication', 'Problem Solving', 'Time Management', 'Programming Languages', 'Web Development', 'Database Management'],
//     datasets: [
//       {
//         label: 'Soft Skills',
//         data: [
          
//           softSkills?.communication || 0,
//           softSkills?.problemSolving || 0,
//           softSkills?.timeManagement || 0,
//           0,
//           0,
//           0,
//         ],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Technical Skills',
//         data: [
//           0, 
//           0, 
//           0,
//           technicalSkills?.programmingLanguages || 0,
          
//           technicalSkills?.webDevelopment || 0,
          
//           technicalSkills?.databaseManagement || 0,
//         ],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>

//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {/* General Information */}
//         {employeeData && (
//           <Card title="General Information">
//             <p><strong>Name:</strong> {employeeData.firstName} {employeeData.lastName}</p>
//             <p><strong>Employee ID:</strong> {employeeData.employeeid}</p>
//             <p><strong>Position:</strong> {employeeData.position}</p>
//             <p><strong>Status:</strong> {employeeData.employmentStatus}</p>
//           </Card>
//         )}

//         {/* Courses */}
//         <Card title="Total Courses Completed">
//           <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>{courses?.totalCourses || 0}</h1>
//         </Card>

//         {/* Certifications */}
//         <Card title="Certifications Specialization">
//           <p>{certifications?.specialization || 'No specializations available'}</p>
//         </Card>
//       </div>

//       {/* Charts Section */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {/* Projects Bar Chart */}
//         <div style={{ flex: '1 1 45%', marginBottom: '20px' }}>
//           <Card title="Projects Overview">
//             <Bar data={projectData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
//           </Card>
//         </div>

//         {/* Skills Radar Chart */}
//         <div style={{ flex: '1 1 45%', marginBottom: '20px' }}>
//           <Card title="Skills Overview">
//             <Radar
//               data={skillsData}
//               options={{
//                 responsive: true,
//                 scales: {
//                   r: {
//                     min: 0,
//                     max: 10,
//                     ticks: {
//                       stepSize: 1,
//                     },
//                   },
//                 },
//                 plugins: {
//                   legend: {
//                     position: 'bottom',
//                   },
//                 },
//               }}
//             />
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, children }) => (
//   <div style={{
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '20px',
//     margin: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#fff',
//     flex: '1 1 30%',
//   }}>
//     <h3 style={{ marginBottom: '10px' }}>{title}</h3>
//     {children}
//   </div>
// );

// export default EmployeeDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar, Radar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './employee.css'; // Import a separate CSS file for better styling

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);
//   const [technicalSkills, setTechnicalSkills] = useState({});
//   const [achievements, setAchievements] = useState(null);
//   const [certifications, setCertifications] = useState(null);
//   const [courses, setCourses] = useState(null);
//   const [projectSkills, setProjectSkills] = useState(null);
//   const [softSkills, setSoftSkills] = useState(null);
  
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchEmployeeData = async () => {
//       try {
//         const userId = localStorage.getItem("userConfig");
//         const responses = await Promise.all([
//           axios.get('http://127.0.0.1:8080/api/softskills', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/technical', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/achievements/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/certifications/certifications/id', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/courses', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/project', { params: { userId } }),
//           axios.get('http://127.0.0.1:8080/api/personal/byid', { params: { userId } })
//         ]);

//         setSoftSkills(responses[0].data);
//         setTechnicalSkills(responses[1].data);
//         setAchievements(responses[2].data);
//         setCertifications(responses[3].data);
//         setCourses(responses[4].data);
//         setProjectSkills(responses[5].data);
//         setEmployeeData(responses[6].data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.response ? error.response.data.message : 'Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchEmployeeData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Data for Bar Chart (Projects)
//   const projectData = {
//     labels: [
//       'Software Engineer Projects',
//       'Consultant Projects',
//       'Data Science Projects',
//       'Full Stack Projects',
//       'Data Analyst Projects',
//       'Data Engineer Projects',
//     ],
//     datasets: [
//       {
//         label: 'Number of Projects',
//         data: [
//           projectSkills?.softwareEngineerProjects || 0,
//           projectSkills?.consultantProjects || 0,
//           projectSkills?.dataScienceProjects || 0,
//           projectSkills?.fullStackProjects || 0,
//           projectSkills?.dataAnalystProjects || 0,
//           projectSkills?.dataEngineerProjects || 0,
//         ],
//         backgroundColor: '#4CAF50',
//         borderColor: '#388E3C',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Data for Radar Chart (Skills)
//   const skillsData = {
//     labels: ['Communication', 'Problem Solving', 'Time Management', 'Programming Languages', 'Web Development', 'Database Management'],
//     datasets: [
//       {
//         label: 'Soft Skills',
//         data: [
//           softSkills?.communication || 0,
//           softSkills?.problemSolving || 0,
//           softSkills?.timeManagement || 0,
//           0,
//           0,
//           0,
//         ],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Technical Skills',
//         data: [
//           0, 
//           0, 
//           0,
//           technicalSkills?.programmingLanguages || 0,
//           technicalSkills?.webDevelopment || 0,
//           technicalSkills?.databaseManagement || 0,
//         ],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-title">Employee Dashboard</h2>

//       <div className="cards-container">
//         {/* General Information */}
//         {employeeData && (
//           <Card title="General Information">
//             <p><strong>Name:</strong> {employeeData.firstName} {employeeData.lastName}</p>
//             <p><strong>Employee ID:</strong> {employeeData.employeeid}</p>
//             <p><strong>Position:</strong> {employeeData.position}</p>
//             <p><strong>Status:</strong> {employeeData.employmentStatus}</p>
//           </Card>
//         )}

// {/* Courses */}
// <Card className="total-courses-card" title="Total Courses Completed">
//   <h1 className="card-count">{courses?.totalCourses || 0}</h1>
// </Card>

// {/* Certifications */}
// <Card className="certifications-card" title="Certifications Specialization">
//   <p>{certifications?.specialization || 'No specializations available'}</p>
// </Card>



//       </div>

//       {/* Charts Section */}
//       <div className="charts-container" style={{ flex: '1 1 35%', maxWidth: '500px', minWidth: '150px', marginBottom: '20px' }}>
//         {/* Projects Bar Chart */}
//         <div className="chart-card">
//           <Card title="Projects Overview">
//             <Bar data={projectData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
//           </Card>
//         </div>

// <div className="chart-card" style={{ flex: '1 1 30%', maxWidth: '400px', minWidth: '150px', marginBottom: '20px' }}>
//   <Card title="Skills Overview">
//     <Radar
//       data={skillsData}
//       options={{
//         responsive: true,
//         scales: {
//           r: {
//             min: 0,
//             max: 10,
//             ticks: {
//               stepSize: 1,
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             position: 'bottom',
//           },
//         },
//       }}
//     />
//   </Card>
// </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, children }) => (
//   <div className="card">
//     <h3 className="card-title">{title}</h3>
//     {children}
//   </div>
// );

// export default EmployeeDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import './employee.css';

const EmployeeDashboard = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [technicalSkills, setTechnicalSkills] = useState({});
  const [softSkills, setSoftSkills] = useState({});
  const [achievements, setAchievements] = useState(null);
  const [certifications, setCertifications] = useState(null);
  const [courses, setCourses] = useState(null);
  const [projectSkills, setProjectSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const userId = localStorage.getItem("userConfig");
        const responses = await Promise.all([
          axios.get('http://127.0.0.1:8080/api/softskills', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/technical', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/achievements/id', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/certifications/certifications/id', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/courses', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/project', { params: { userId } }),
          axios.get('http://127.0.0.1:8080/api/personal/byid', { params: { userId } })
        ]);

        setSoftSkills(responses[0].data);
        setTechnicalSkills(responses[1].data);
        setAchievements(responses[2].data);
        setCertifications(responses[3].data);
        setCourses(responses[4].data);
        setProjectSkills(responses[5].data);
        setEmployeeData(responses[6].data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Error fetching data');
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Prepare data for proficiency level visualization
  const proficiencyLevels = [
    'Not at all proficient', 'Slightly proficient', 'Moderately proficient', 
    'Very proficient', 'Extremely proficient', 'Expert', 'Master', 
    'Leader', 'Innovator', 'Visionary'
  ];

  const countProficiencyLevels = (skills) => {
    return proficiencyLevels.map((level) => 
      Object.values(skills).filter(skill => skill === level).length
    );
  };

  const technicalProficiencyData = countProficiencyLevels(technicalSkills);
  const softProficiencyData = countProficiencyLevels(softSkills);

  const proficiencyChartData = {
    labels: proficiencyLevels,
    datasets: [
      {
        label: 'Technical Skills',
        data: technicalProficiencyData,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Soft Skills',
        data: softProficiencyData,
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const proficiencyChartOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Proficiency Levels' } },
      y: { beginAtZero: true, title: { display: true, text: 'Number of Skills' } }
    },
    plugins: {
      legend: { position: 'top' },
    },
  };

  // Data for Bar Chart (Projects)
  const projectData = {
    labels: [
      'Software Engineer Projects',
      'Consultant Projects',
      'Data Science Projects',
      'Full Stack Projects',
      'Data Analyst Projects',
      'Data Engineer Projects',
    ],
    datasets: [
      {
        label: 'Number of Projects',
        data: [
          projectSkills?.softwareEngineerProjects || 0,
          projectSkills?.consultantProjects || 0,
          projectSkills?.dataScienceProjects || 0,
          projectSkills?.fullStackProjects || 0,
          projectSkills?.dataAnalystProjects || 0,
          projectSkills?.dataEngineerProjects || 0,
        ],
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Data for Radar Chart (Skills)
  const skillsData = {
    labels: ['Communication', 'Problem Solving', 'Time Management', 'Programming Languages', 'Web Development', 'Database Management'],
    datasets: [
      {
        label: 'Soft Skills',
        data: [
          softSkills?.communication || 0,
          softSkills?.problemSolving || 0,
          softSkills?.timeManagement || 0,
          0,
          0,
          0,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Technical Skills',
        data: [
          0, 
          0, 
          0,
          technicalSkills?.programmingLanguages || 0,
          technicalSkills?.webDevelopment || 0,
          technicalSkills?.databaseManagement || 0,
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Employee Dashboard</h2>

      <div className="cards-container">
        {/* General Information */}
        {employeeData && (
          <Card title="General Information">
            <p><strong>Name:</strong> {employeeData.firstName} {employeeData.lastName}</p>
            <p><strong>Employee ID:</strong> {employeeData.employeeid}</p>
            <p><strong>Position:</strong> {employeeData.position}</p>
            <p><strong>Status:</strong> {employeeData.employmentStatus}</p>
          </Card>
        )}

        {/* Courses */}
        <Card className="total-courses-card" title="Total Courses Completed">
          <h1 className="card-count">{courses?.totalCourses || 0}</h1>
        </Card>

        {/* Certifications */}
        <Card className="certifications-card" title="Certifications Specialization">
          <p>{certifications?.specialization || 'No specializations available'}</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        {/* Projects Bar Chart */}
        <div className="chart-card">
          <Card title="Projects Overview">
            <Bar data={projectData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </Card>
        </div>

        {/* Skills Radar Chart */}
        <div className="chart-card">
          <Card title="Skills Overview">
            <Radar
              data={skillsData}
              options={{
                responsive: true,
                scales: {
                  r: { min: 0, max: 10, ticks: { stepSize: 1 } },
                },
                plugins: { legend: { position: 'bottom' } },
              }}
            />
          </Card>
        </div>

        {/* Proficiency Levels Bar Chart */}
        <div className="chart-card">
          <Card title="Skills Proficiency Overview">
            <Bar data={proficiencyChartData} options={proficiencyChartOptions} />
          </Card>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    {children}
  </div>
);

export default EmployeeDashboard;
