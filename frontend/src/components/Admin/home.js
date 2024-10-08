// import React, { useState, useEffect } from 'react';
// import { Card } from 'primereact/card';
// import { Chart } from 'primereact/chart';
// import axios from 'axios';
// import Header from './AdminNav'; // Assuming you have a Header component for the top navigation
// import Sidebar from './sidebar'; // Assuming you have a Sidebar component
// import './Home.css'; // Import the CSS file for custom styles

// const Home = () => {
//     const [softSkills, setSoftSkills] = useState([]);
//     const [technicalSkills, setTechnicalSkills] = useState([]);
//     const [projectSkills, setProjectSkills] = useState([]);
//     const [courses, setCourses] = useState([]);
//     const [achievements, setAchievements] = useState([]);
//     const [certifications, setCertifications] = useState([]);
//     const [employeeData, setEmployeeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const responses = await Promise.all([
//                     axios.get('http://127.0.0.1:8080/api/softskills/all'),
//                     axios.get('http://127.0.0.1:8080/api/technical/all'),
//                     axios.get('http://127.0.0.1:8080/api/project/all'),
//                     axios.get('http://127.0.0.1:8080/api/courses/all'),
//                     axios.get('http://127.0.0.1:8080/api/achievements/all'),
//                     axios.get('http://127.0.0.1:8080/api/certifications/certifications/all'),
//                     axios.get('http://127.0.0.1:8080/api/personal/all'),
//                 ]);

//                 setSoftSkills(responses[0].data);
//                 setTechnicalSkills(responses[1].data);
//                 setProjectSkills(responses[2].data);
//                 setCourses(responses[3].data);
//                 setAchievements(responses[4].data);
//                 setCertifications(responses[5].data);
//                 setEmployeeData(responses[6].data);
//             } catch (err) {
//                 console.error('Error fetching data:', err.message);
//             }
//         };
//         fetchData();
//     }, []);

//     // Find the employee with the most courses
// const employeeWithMostCourses = courses.reduce((max, course) => {
//     if (!max || course.totalCourses > max.totalCourses) {
//         return course;
//     }
//     return max;
// }, null);

// // Find the corresponding employee name from employeeData using the employeeID
// const mostCoursesEmployeeName = employeeWithMostCourses 
//     ? `${employeeData.find(emp => emp.employeeid === employeeWithMostCourses.employeeid)?.employeeName || 'Unknown'} (${employeeWithMostCourses.totalCourses} courses)` 
//     : 'N/A';


//     const competencyLevels = {
//         beginner: 0,
//         intermediate: 0,
//         advanced: 0,
//     };

//     certifications.forEach(cert => {
//         if (cert.competencyLevel === 'Beginner') competencyLevels.beginner++;
//         else if (cert.competencyLevel === 'Intermediate') competencyLevels.intermediate++;
//         else if (cert.competencyLevel === 'Advanced') competencyLevels.advanced++;
//     });

//     const calculateSoftSkillsScore = (skill) => {
//         const numericFields = ['communication', 'problemSolving', 'timeManagement'];
//         const numericScore = numericFields.reduce((sum, field) => sum + skill[field], 0);

//         const categoricalFields = ['teamwork', 'adaptability', 'criticalThinking', 'creativity', 'leadership', 'interpersonalSkills', 'emotionalIntelligence'];
//         const categoricalScore = categoricalFields.reduce((sum, field) => {
//             const proficiencyLevels = [
//                 'Not at all proficient',
//                 'Slightly proficient',
//                 'Moderately proficient',
//                 'Very proficient',
//                 'Extremely proficient',
//                 'Expert',
//                 'Master',
//                 'Leader',
//                 'Innovator',
//                 'Visionary'
//             ];
//             return sum + proficiencyLevels.indexOf(skill[field]);
//         }, 0);

//         return numericScore + categoricalScore;
//     };

//     const highestSoftSkills = softSkills.reduce((max, skill) => {
//         const totalScore = calculateSoftSkillsScore(skill);
//         return totalScore > max.totalScore ? { ...skill, totalScore } : max;
//     }, { totalScore: 0 });

//     const calculateTechnicalSkillsScore = (skill) => {
//         const numericFields = ['programmingLanguages', 'webDevelopment', 'databaseManagement'];
//         const numericScore = numericFields.reduce((sum, field) => sum + skill[field], 0);

//         const categoricalFields = ['cloudComputing', 'versionControl', 'machineLearning', 'dataAnalysis', 'cybersecurity'];
//         const categoricalScore = categoricalFields.reduce((sum, field) => {
//             const proficiencyLevels = [
//                 'Not at all proficient',
//                 'Slightly proficient',
//                 'Moderately proficient',
//                 'Very proficient',
//                 'Extremely proficient',
//                 'Expert',
//                 'Master',
//                 'Leader',
//                 'Innovator',
//                 'Visionary'
//             ];
//             return sum + proficiencyLevels.indexOf(skill[field]);
//         }, 0);

//         return numericScore + categoricalScore;
//     };

//     const highestTechnicalSkills = technicalSkills.reduce((max, skill) => {
//         const totalScore = calculateTechnicalSkillsScore(skill);
//         return totalScore > max.totalScore ? { ...skill, totalScore } : max;
//     }, { totalScore: 0 });

//     return (
//         <div style={{ display: 'flex', height: '100vh' }}>
//             <Sidebar />
//             <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//                 <Header />
//                 <div className="dashboard-content" style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
//                     <Card title="Total Employees" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Total Employees: {totalEmployees}</p>
//                     </Card>

//                     <Card title="Top Employee in Courses" style={{ width: '25%', margin: '1rem' }}>
//                         <p>{mostCoursesEmployeeName}</p>
//                     </Card>

//                     <Card title="Competency Levels" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Beginner: {competencyLevels.beginner}</p>
//                         <p>Intermediate: {competencyLevels.intermediate}</p>
//                         <p>Advanced: {competencyLevels.advanced}</p>
//                     </Card>

//                     <Card title="Top Skills" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Top Soft Skills Employee: {highestSoftSkills.employeeName || 'N/A'} ({highestSoftSkills.totalScore} points)</p>
//                         <p>Top Technical Skills Employee: {highestTechnicalSkills.employeeName || 'N/A'} ({highestTechnicalSkills.totalScore} points)</p>
//                     </Card>

//                     <div className="competency-chart" style={{ width: '50%', margin: '1rem' }}>
//                         <h3>Competency Levels Distribution</h3>
//                         <Chart
//                             type="pie"
//                             data={{
//                                 labels: ['Beginner', 'Intermediate', 'Advanced'],
//                                 datasets: [{
//                                     data: [
//                                         competencyLevels.beginner,
//                                         competencyLevels.intermediate,
//                                         competencyLevels.advanced
//                                     ],
//                                     backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
//                                 }]
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { Card } from 'primereact/card';
// import { Chart } from 'primereact/chart';
// import axios from 'axios';
// import Header from './AdminNav'; // Assuming you have a Header component for the top navigation
// import Sidebar from './sidebar'; // Assuming you have a Sidebar component
// import './Home.css'; // Import the CSS file for custom styles

// const Home = () => {
//     const [softSkills, setSoftSkills] = useState([]);
//     const [technicalSkills, setTechnicalSkills] = useState([]);
//     const [projectSkills, setProjectSkills] = useState([]);
//     const [courses, setCourses] = useState([]);
//     const [achievements, setAchievements] = useState([]);
//     const [certifications, setCertifications] = useState([]);
//     const [employeeData, setEmployeeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const responses = await Promise.all([
//                     axios.get('http://127.0.0.1:8080/api/softskills/all'),
//                     axios.get('http://127.0.0.1:8080/api/technical/all'),
//                     axios.get('http://127.0.0.1:8080/api/project/all'),
//                     axios.get('http://127.0.0.1:8080/api/courses/all'),
//                     axios.get('http://127.0.0.1:8080/api/achievements/all'),
//                     axios.get('http://127.0.0.1:8080/api/certifications/certifications/all'),
//                     axios.get('http://127.0.0.1:8080/api/personal/all'),
//                 ]);

//                 setSoftSkills(responses[0].data);
//                 setTechnicalSkills(responses[1].data);
//                 setProjectSkills(responses[2].data);
//                 setCourses(responses[3].data);
//                 setAchievements(responses[4].data);
//                 setCertifications(responses[5].data);
//                 setEmployeeData(responses[6].data);
//             } catch (err) {
//                 console.error('Error fetching data:', err.message);
//             }
//         };
//         fetchData();
//     }, []);

//     // Define totalEmployees within the component
//     const totalEmployees = employeeData ? new Set(employeeData.map(emp => emp.employeeid)).size : 0;

//     // Find employee with the most courses
//     const employeeWithMostCourses = courses.reduce((max, course) => {
//         if (!max || course.totalCourses > max.totalCourses) {
//             return course;
//         }
//         return max;
//     }, null);

//     // Find the corresponding employee name from employeeData using employeeWithMostCourses
//     const mostCoursesEmployeeName = employeeWithMostCourses
//         ? `${employeeData.find(emp => emp.employeeid === employeeWithMostCourses.employeeid)?.employeeName || 'Unknown'} (${employeeWithMostCourses.totalCourses} courses)`
//         : 'N/A';

//     const competencyLevels = {
//         beginner: 0,
//         intermediate: 0,
//         advanced: 0,
//     };

//     certifications.forEach(cert => {
//         if (cert.competencyLevel === 'Beginner') competencyLevels.beginner++;
//         else if (cert.competencyLevel === 'Intermediate') competencyLevels.intermediate++;
//         else if (cert.competencyLevel === 'Advanced') competencyLevels.advanced++;
//     });

//     const calculateSoftSkillsScore = (skill) => {
//         const numericFields = ['communication', 'problemSolving', 'timeManagement'];
//         const numericScore = numericFields.reduce((sum, field) => sum + skill[field], 0);

//         const categoricalFields = ['teamwork', 'adaptability', 'criticalThinking', 'creativity', 'leadership', 'interpersonalSkills', 'emotionalIntelligence'];
//         const categoricalScore = categoricalFields.reduce((sum, field) => {
//             const proficiencyLevels = [
//                 'Not at all proficient',
//                 'Slightly proficient',
//                 'Moderately proficient',
//                 'Very proficient',
//                 'Extremely proficient',
//                 'Expert',
//                 'Master',
//                 'Leader',
//                 'Innovator',
//                 'Visionary'
//             ];
//             return sum + proficiencyLevels.indexOf(skill[field]);
//         }, 0);

//         return numericScore + categoricalScore;
//     };

//     const highestSoftSkills = softSkills.reduce((max, skill) => {
//         const totalScore = calculateSoftSkillsScore(skill);
//         return totalScore > max.totalScore ? { ...skill, totalScore } : max;
//     }, { totalScore: 0 });

//     const calculateTechnicalSkillsScore = (skill) => {
//         const numericFields = ['programmingLanguages', 'webDevelopment', 'databaseManagement'];
//         const numericScore = numericFields.reduce((sum, field) => sum + skill[field], 0);

//         const categoricalFields = ['cloudComputing', 'versionControl', 'machineLearning', 'dataAnalysis', 'cybersecurity'];
//         const categoricalScore = categoricalFields.reduce((sum, field) => {
//             const proficiencyLevels = [
//                 'Not at all proficient',
//                 'Slightly proficient',
//                 'Moderately proficient',
//                 'Very proficient',
//                 'Extremely proficient',
//                 'Expert',
//                 'Master',
//                 'Leader',
//                 'Innovator',
//                 'Visionary'
//             ];
//             return sum + proficiencyLevels.indexOf(skill[field]);
//         }, 0);

//         return numericScore + categoricalScore;
//     };

//     const highestTechnicalSkills = technicalSkills.reduce((max, skill) => {
//         const totalScore = calculateTechnicalSkillsScore(skill);
//         return totalScore > max.totalScore ? { ...skill, totalScore } : max;
//     }, { totalScore: 0 });

//     return (
        
//         <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//         <Header />
//         <div style={{ display: 'flex', flexGrow: 1 }}>
//             <Sidebar />
//                 <div className="dashboard-content" style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
//                     <Card title="Total Employees" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Total Employees: {totalEmployees}</p>
//                     </Card>

//                     <Card title="Top Employee in Courses" style={{ width: '25%', margin: '1rem' }}>
//                         <p>{mostCoursesEmployeeName}</p>
//                     </Card>

//                     <Card title="Competency Levels" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Beginner: {competencyLevels.beginner}</p>
//                         <p>Intermediate: {competencyLevels.intermediate}</p>
//                         <p>Advanced: {competencyLevels.advanced}</p>
//                     </Card>

//                     <Card title="Top Skills" style={{ width: '25%', margin: '1rem' }}>
//                         <p>Top Soft Skills Employee: {highestSoftSkills.employeeName || 'N/A'} ({highestSoftSkills.totalScore} points)</p>
//                         <p>Top Technical Skills Employee: {highestTechnicalSkills.employeeName || 'N/A'} ({highestTechnicalSkills.totalScore} points)</p>
//                     </Card>

//                     <div className="competency-chart" style={{ width: '50%', margin: '1rem' }}>
//                         <h3>Competency Levels Distribution</h3>
//                         <Chart
//                             type="pie"
//                             data={{
//                                 labels: ['Beginner', 'Intermediate', 'Advanced'],
//                                 datasets: [{
//                                     data: [
//                                         competencyLevels.beginner,
//                                         competencyLevels.intermediate,
//                                         competencyLevels.advanced
//                                     ],
//                                     backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
//                                 }]
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import axios from 'axios';
import Header from './AdminNav';
import Sidebar from './sidebar';
import './Home.css';

const Home = () => {
    const [softSkills, setSoftSkills] = useState([]);
    const [technicalSkills, setTechnicalSkills] = useState([]);
    const [projectSkills, setProjectSkills] = useState([]);
    const [courses, setCourses] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    axios.get('http://127.0.0.1:8080/api/softskills/all'),
                    axios.get('http://127.0.0.1:8080/api/technical/all'),
                    axios.get('http://127.0.0.1:8080/api/project/all'),
                    axios.get('http://127.0.0.1:8080/api/courses/all'),
                    axios.get('http://127.0.0.1:8080/api/achievements/all'),
                    axios.get('http://127.0.0.1:8080/api/certifications/certifications/all'),
                    axios.get('http://127.0.0.1:8080/api/personal/all'),
                ]);

                setSoftSkills(responses[0].data);
                setTechnicalSkills(responses[1].data);
                setProjectSkills(responses[2].data);
                setCourses(responses[3].data);
                setAchievements(responses[4].data);
                setCertifications(responses[5].data);
                setEmployeeData(responses[6].data);
            } catch (err) {
                console.error('Error fetching data:', err.message);
            }
        };
        fetchData();
    }, []);

    const getEmployeeInfo = (userId) => {
        const employee = employeeData.find(emp => emp.userId === userId);
        return employee ? { name: `${employee.firstName} ${employee.lastName}`, id: employee.employeeid } : { name: 'N/A', id: 'N/A' };
    };

    const addEmployeeInfoToData = (dataArray) => {
        return dataArray.map(item => {
            const { name, id } = getEmployeeInfo(item.userId);
            return { ...item, employeeName: name, employeeId: id };
        });
    };

    const enrichedCourses = addEmployeeInfoToData(courses);

    const totalEmployees = employeeData.length;

    const employeeWithMostCourses = enrichedCourses.reduce((max, course) => {
        if (!max || course.totalCourses > max.totalCourses) {
            return course;
        }
        return max;
    }, null);

    const mostCoursesEmployeeName = employeeWithMostCourses
        ? `${employeeWithMostCourses.employeeName || 'Unknown'} (${employeeWithMostCourses.totalCourses} courses)`
        : 'N/A';

    const competencyLevels = {
        beginner: 0,
        intermediate: 0,
        advanced: 0,
    };

    certifications.forEach(cert => {
        if (cert.competencyLevel === 'Beginner') competencyLevels.beginner++;
        else if (cert.competencyLevel === 'Intermediate') competencyLevels.intermediate++;
        else if (cert.competencyLevel === 'Advanced') competencyLevels.advanced++;
    });

    // Function to calculate soft skills score
    const calculateSoftSkillsScore = (softSkill) => {
        // Assuming numerical values are assigned for categorical skills (1-10)
        const numericalValues = {
            communication: softSkill.communication,
            problemSolving: softSkill.problemSolving,
            timeManagement: softSkill.timeManagement,
            adaptability: softSkill.adaptability === 'Expert' ? 10 : 0, // Add mapping as per requirement
            criticalThinking: softSkill.criticalThinking === 'Expert' ? 10 : 0,
            creativity: softSkill.creativity === 'Expert' ? 10 : 0,
            leadership: softSkill.leadership === 'Expert' ? 10 : 0,
            interpersonalSkills: softSkill.interpersonalSkills === 'Expert' ? 10 : 0,
            emotionalIntelligence: softSkill.emotionalIntelligence === 'Expert' ? 10 : 0,
        };

        return Object.values(numericalValues).reduce((acc, score) => acc + score, 0);
    };

    // Function to calculate technical skills score
    const calculateTechnicalSkillsScore = (technicalSkill) => {
        // Assuming numerical values are assigned for technical skills (1-10)
        const numericalValues = {
            programmingLanguages: technicalSkill.programmingLanguages,
            webDevelopment: technicalSkill.webDevelopment,
            databaseManagement: technicalSkill.databaseManagement,
            cloudComputing: technicalSkill.cloudComputing === 'Expert' ? 10 : 0, // Add mapping as per requirement
            versionControl: technicalSkill.versionControl === 'Expert' ? 10 : 0,
            machineLearning: technicalSkill.machineLearning === 'Expert' ? 10 : 0,
            dataAnalysis: technicalSkill.dataAnalysis === 'Expert' ? 10 : 0,
            cybersecurity: technicalSkill.cybersecurity === 'Expert' ? 10 : 0,
        };

        return Object.values(numericalValues).reduce((acc, score) => acc + score, 0);
    };

    const highestSoftSkills = softSkills.reduce((max, skill) => {
        const totalScore = calculateSoftSkillsScore(skill);
        return totalScore > max.totalScore ? { ...skill, totalScore } : max;
    }, { totalScore: 0 });

    const topSoftSkillsEmployee = getEmployeeInfo(highestSoftSkills.userId);

    const highestTechnicalSkills = technicalSkills.reduce((max, skill) => {
        const totalScore = calculateTechnicalSkillsScore(skill);
        return totalScore > max.totalScore ? { ...skill, totalScore } : max;
    }, { totalScore: 0 });

    const topTechnicalSkillsEmployee = getEmployeeInfo(highestTechnicalSkills.userId);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flexGrow: 1 }}>
            <Sidebar />
                <div className="dashboard-content" style={{  flexWrap: 'wrap', padding: '20px',flexGrow: 1, padding: '20px' }}>

                    <Card title="Total Employees" style={{ width: '25%', margin: '1rem' }}>
                        <p>Total Employees: {totalEmployees}</p>
                    </Card>

                    <Card title="Top Employee in Courses" style={{ width: '25%', margin: '1rem' }}>
                        <p>{mostCoursesEmployeeName}</p>
                    </Card>

                    <Card title="Competency Levels" style={{ width: '25%', margin: '1rem' }}>
                        <p>Beginner: {competencyLevels.beginner}</p>
                        <p>Intermediate: {competencyLevels.intermediate}</p>
                        <p>Advanced: {competencyLevels.advanced}</p>
                    </Card>

                    <Card title="Top Skills" style={{ width: '25%', margin: '1rem' }}>
                        <p>Top Soft Skills Employee: {topSoftSkillsEmployee.name} ({highestSoftSkills.totalScore} points)</p>
                        <p>Top Technical Skills Employee: {topTechnicalSkillsEmployee.name} ({highestTechnicalSkills.totalScore} points)</p>
                    </Card>

                    <div className="competency-chart" style={{ width: '50%', margin: '1rem' }}>
                        <h3>Competency Levels Distribution</h3>
                        <Chart
                            type="pie"
                            data={{
                                labels: ['Beginner', 'Intermediate', 'Advanced'],
                                datasets: [{
                                    data: [
                                        competencyLevels.beginner,
                                        competencyLevels.intermediate,
                                        competencyLevels.advanced
                                    ],
                                    backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
                                }]
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;



