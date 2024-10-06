

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from './AdminNav';
// import Sidebar from './sidebar'; // Import the dashboard
// import axios from 'axios';

// const Home = () => {
//     const [softSkills, setSoftSkills] = useState([]);
//     const [personalDetails, setPersonalDetails] = useState([]);
//     const [technicalSkills, setTechnicalSkills] = useState([]);
//     const [projectSkills, setProjectSkills] = useState([]);
//     const [courses, setCourses] = useState([]);
//     const [achievements, setAchievements] = useState([]);
//     const [certifications, setCertifications] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch soft skills
//                 const response1  = await axios.get('http://127.0.0.1:8080/api/softskills/all');
//                 const data1 = response1.data;
//                 setSoftSkills(data1);

//                 // Fetch personal details
//                 // const response2 = await axios.get('http://127.0.0.1:8080/api/personal/all');
//                 // const data2 = response2.data;                
//                 // setPersonalDetails(data2);

//                 // Fetch technical skills
//                 const response3 = await axios.get('http://127.0.0.1:8080/api/technical/all');
//                 const data3 = response3.data;
//                 setTechnicalSkills(data3);

//                 // // Fetch project skills
//                 const response4 = await axios.get('http://127.0.0.1:8080/api/project/all');
//                 const data4 = response4.data;
//                 setProjectSkills(data4);

              
//                 const response5 = await axios.get('http://127.0.0.1:8080/api/courses/all');
//                 const data5 = response5.data;
//                 setCourses(data5);

               
//                 const response6 = await axios.get('http://127.0.0.1:8080/api/achievements/all');
//                 const data6 = response6.data;
//                 setAchievements(data6);

              
//                 const response7 = await axios.get('http://127.0.0.1:8080/api/certifications/certifications/all');
//                 const data7 = response7.data;
//                 setCertifications(data7);
                
//             } catch (err) {
//                 console.error(err.message);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//             <Header />
//             <div style={{ display: 'flex', flexGrow: 1 }}>
//                 <Sidebar />
//                 <main className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
//                     {/* Render your data as tables */}
//                     <h2>Soft Skills</h2>
//                     <table>
//                         <thead>
//                             <tr>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {softSkills.map((skill, index) => (
//                                 <tr key={index}>
//             <td>{skill.communication}</td>
//             <td>{skill.teamwork}</td>
//             <td>{skill.problemSolving}</td>
//             <td>{skill.adaptability}</td>
//             <td>{skill.timeManagement}</td>
//             <td>{skill.criticalThinking}</td>
//             <td>{skill.creativity}</td>
//             <td>{skill.leadership}</td>
//             <td>{skill.interpersonalSkills}</td>
//             <td>{skill.emotionalIntelligence}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <h2>Technical Skills</h2>
//                     <table>
//                         <thead>
//                             <tr>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {technicalSkills.map((skill, index) => (
//                                 <tr key={index}>
//     <td>{skill.programmingLanguages}</td>
//             <td>{skill.webDevelopment}</td>
//             <td>{skill.databaseManagement}</td>
//             <td>{skill.cloudComputing}</td>
//             <td>{skill.versionControl}</td>
//             <td>{skill.machineLearning}</td>
//             <td>{skill.dataAnalysis}</td>
//             <td>{skill.cybersecurity}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <h2>Project Skills</h2>
//                     <table>
//                         <thead>
//                             <tr>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {projectSkills.map((project, index) => (
//                                 <tr key={index}>
//                                       <td>{project.projectType}</td>
//             <td>{project.softwareEngineerProjects}</td>
//             <td>{project.consultantProjects}</td>
//             <td>{project.fullStackProjects}</td>
//             <td>{project.dataAnalystProjects}</td>
//             <td>{project.dataEngineerProjects}</td>
//             <td>{project.dataScienceProjects}</td>
//             <td>{project.otherProjects}</td>
//             <td>{project.toolsUsed}</td>
//             <td>{project.favoriteProject}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <h2>Courses</h2>
//                     <table>
//                         <thead>
//                             <tr>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {courses.map((course, index) => (
//                                 <tr key={index}>
//                                    <td>{course.courseName}</td>
//                                     <td>{course.platform}</td>
//                                     <td>{course.specialization}</td>
//                                     <td>{course.totalCourses}</td>
//                                     <td>{course.courseDuration} months</td>
//                                     <td>{course.courseType}</td>
//                                     <td>{course.completionStatus}</td>
//                                     <td>{course.additionalCourses}</td>
//                                     <td>{new Date(course.createdAt).toLocaleDateString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <h2>Achievements</h2>
//                     <table>
//                         <thead>
//                             <tr>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {achievements.map((achievement, index) => (
//                                 <tr key={index}>
                                    
//                                     <td>{achievement.achievementTitle}</td>
//                                             <td>{achievement.organization}</td>
//                                             <td>{new Date(achievement.dateAchieved).toLocaleDateString()}</td>
//                                             <td>{achievement.description}</td>
//                                             <td>{achievement.category}</td>
//                                             <td>{achievement.additionalAchievements}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                     <h2>Certifications</h2>
//                     <table>
//                         <thead>
//                             <tr>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {certifications.map((certification, index) => (
//                                 <tr key={index}>
//                                        <td>{certification.courseName}</td>
//                                     <td>{certification.platform}</td>
//                                     <td>{certification.specialization}</td>
//                                     <td>{certification.courseDuration} months</td>
//                                     <td>{certification.courseType}</td>
//                                     <td>{certification.additionalCourses}</td>
//                                     <td>{new Date(certification.createdAt).toLocaleDateString()}</td>
//                                     <td>{certification.completionStatus}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Header from './AdminNav';
import Sidebar from './sidebar'; // Import the dashboard
import axios from 'axios';

const Home = () => {
    const [softSkills, setSoftSkills] = useState([]);
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [projectSkills, setProjectSkills] = useState([]);
    const [courses, setCourses] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch soft skills
                const response1  = await axios.get('http://127.0.0.1:8080/api/softskills/all');
                setSoftSkills(response1.data);

                // Fetch technical skills
                const response3 = await axios.get('http://127.0.0.1:8080/api/technical/all');
                setTechnicalSkills(response3.data);

                // Fetch project skills
                const response4 = await axios.get('http://127.0.0.1:8080/api/project/all');
                setProjectSkills(response4.data);

                // Fetch courses
                const response5 = await axios.get('http://127.0.0.1:8080/api/courses/all');
                setCourses(response5.data);

                // Fetch achievements
                const response6 = await axios.get('http://127.0.0.1:8080/api/achievements/all');
                setAchievements(response6.data);

                // Fetch certifications
                const response7 = await axios.get('http://127.0.0.1:8080/api/certifications/certifications/all');
                setCertifications(response7.data);

            } catch (err) {
                console.error(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <Sidebar />
                <main className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
                    {/* Render your data as PrimeReact DataTables */}

                    <h2>Soft Skills</h2>
                    <DataTable value={softSkills} responsiveLayout="scroll">
                        <Column field="communication" header="Communication" />
                        <Column field="teamwork" header="Teamwork" />
                        <Column field="problemSolving" header="Problem Solving" />
                        <Column field="adaptability" header="Adaptability" />
                        <Column field="timeManagement" header="Time Management" />
                        <Column field="criticalThinking" header="Critical Thinking" />
                        <Column field="creativity" header="Creativity" />
                        <Column field="leadership" header="Leadership" />
                        <Column field="interpersonalSkills" header="Interpersonal Skills" />
                        <Column field="emotionalIntelligence" header="Emotional Intelligence" />
                    </DataTable>

                    <h2>Technical Skills</h2>
                    <DataTable value={technicalSkills} responsiveLayout="scroll">
                        <Column field="programmingLanguages" header="Programming Languages" />
                        <Column field="webDevelopment" header="Web Development" />
                        <Column field="databaseManagement" header="Database Management" />
                        <Column field="cloudComputing" header="Cloud Computing" />
                        <Column field="versionControl" header="Version Control" />
                        <Column field="machineLearning" header="Machine Learning" />
                        <Column field="dataAnalysis" header="Data Analysis" />
                        <Column field="cybersecurity" header="Cybersecurity" />
                    </DataTable>

                    <h2>Project Skills</h2>
                    <DataTable value={projectSkills} responsiveLayout="scroll">
                        <Column field="projectType" header="Project Type" />
                        <Column field="softwareEngineerProjects" header="Software Engineer Projects" />
                        <Column field="consultantProjects" header="Consultant Projects" />
                        <Column field="fullStackProjects" header="Full Stack Projects" />
                        <Column field="dataAnalystProjects" header="Data Analyst Projects" />
                        <Column field="dataEngineerProjects" header="Data Engineer Projects" />
                        <Column field="dataScienceProjects" header="Data Science Projects" />
                        <Column field="otherProjects" header="Other Projects" />
                        <Column field="toolsUsed" header="Tools Used" />
                        <Column field="favoriteProject" header="Favorite Project" />
                    </DataTable>

                    <h2>Courses</h2>
                    <DataTable value={courses} responsiveLayout="scroll">
                        <Column field="courseName" header="Course Name" />
                        <Column field="platform" header="Platform" />
                        <Column field="specialization" header="Specialization" />
                        <Column field="totalCourses" header="Total Courses" />
                        <Column field="courseDuration" header="Duration (months)" />
                        <Column field="courseType" header="Course Type" />
                        <Column field="completionStatus" header="Completion Status" />
                        <Column field="additionalCourses" header="Additional Courses" />
                        <Column field="createdAt" header="Created At" body={(rowData) => new Date(rowData.createdAt).toLocaleDateString()} />
                    </DataTable>

                    <h2>Achievements</h2>
                    <DataTable value={achievements} responsiveLayout="scroll">
                        <Column field="achievementTitle" header="Achievement Title" />
                        <Column field="organization" header="Organization" />
                        <Column field="dateAchieved" header="Date Achieved" body={(rowData) => new Date(rowData.dateAchieved).toLocaleDateString()} />
                        <Column field="description" header="Description" />
                        <Column field="category" header="Category" />
                        <Column field="additionalAchievements" header="Additional Achievements" />
                    </DataTable>

                    <h2>Certifications</h2>
                    <DataTable value={certifications} responsiveLayout="scroll">
                        <Column field="certificationTitle" header="certificationTitle" />
                        <Column field="platform" header="Platform" />
                        <Column field="specialization" header="Specialization" />
                        <Column field="duration" header="Duration (months)" />
                        <Column field="additionalCertifications" header="Course" />
                        
                        <Column field="createdAt" header="Created At" body={(rowData) => new Date(rowData.createdAt).toLocaleDateString()} />
                    </DataTable>
                </main>
            </div>
        </div>
    );
};

export default Home;
