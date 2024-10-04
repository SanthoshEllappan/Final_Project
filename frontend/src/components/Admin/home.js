// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from './AdminNav';
// import { Outlet } from 'react-router-dom'; 
// import Sidebar from './sidebar'; // Import the dashboard
// import axios from 'axios';

// const Home = () => { // Change here from home to Home
//     // const location = useLocation();

//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const { data, status } = await axios.get('http://127.0.0.1:8080/api/softskills/all');
//                 console.log(data);
//             } catch (err) {
//                 console.log(err.message);
//             }
//         };
//         fetch();
//     }, []);

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//             <Header />
//             <div style={{ display: 'flex', flexGrow: 1 }}>
//                 <Sidebar />
//                 <main className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
//                     {/* {location.pathname === '/dashboard' && <p>safsd</p>} Only show dashboard on its specific route */}
//                     {/* <Outlet />  */}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Home; // Also change here to match the new name


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './AdminNav';
import Sidebar from './sidebar'; // Import the dashboard
import axios from 'axios';

const Home = () => {
    const [softSkills, setSoftSkills] = useState([]);
    const [personalDetails, setPersonalDetails] = useState([]);
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
                const data1 = response1.data;
                setSoftSkills(data1);

                // Fetch personal details
                // const response2 = await axios.get('http://127.0.0.1:8080/api/personal/all');
                // const data2 = response2.data;                
                // setPersonalDetails(data2);

                // Fetch technical skills
                const response3 = await axios.get('http://127.0.0.1:8080/api/technical/all');
                const data3 = response3.data;
                setTechnicalSkills(data3);

                // // Fetch project skills
                const response4 = await axios.get('http://127.0.0.1:8080/api/project/all');
                const data4 = response4.data;
                setProjectSkills(data4);

                // // Fetch courses
                // const { data: coursesData } = await axios.get('http://127.0.0.1:8080/api/courses/all');
                // console.log(data);
                // setCourses(coursesData);
                const response5 = await axios.get('http://127.0.0.1:8080/api/courses/all');
                const data5 = response5.data;
                setCourses(data5);

                // // Fetch achievements
                // const { data: achievementsData } = await axios.get('http://127.0.0.1:8080/api/achievements/all');
                // console.log(data);
                // setAchievements(achievementsData);
                const response6 = await axios.get('http://127.0.0.1:8080/api/achievements/all');
                const data6 = response6.data;
                setAchievements(data6);

                // // Fetch certifications
                // const { data: certificationsData } = await axios.get('http://127.0.0.1:8080/api/certifications/all');
                
                // setCertifications(certificationsData);
                const response7 = await axios.get('http://127.0.0.1:8080/api/certifications/certifications/all');
                const data7 = response7.data;
                setCertifications(data7);
                
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
                    {/* Render your data as tables */}
                    <h2>Soft Skills</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {softSkills.map((skill, index) => (
                                <tr key={index}>
                                    <td>{skill.name}</td>
                                    <td>{skill.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Technical Skills</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Technology</th>
                                <th>Proficiency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technicalSkills.map((skill, index) => (
                                <tr key={index}>
                                    <td>{skill.technology}</td>
                                    <td>{skill.proficiency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Project Skills</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projectSkills.map((project, index) => (
                                <tr key={index}>
                                    <td>{project.name}</td>
                                    <td>{project.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Courses</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Institution</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.name}</td>
                                    <td>{course.institution}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Achievements</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Achievement</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {achievements.map((achievement, index) => (
                                <tr key={index}>
                                    <td>{achievement.name}</td>
                                    <td>{achievement.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Certifications</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Certification Name</th>
                                <th>Issuing Organization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map((cert, index) => (
                                <tr key={index}>
                                    <td>{cert.name}</td>
                                    <td>{cert.organization}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
};

export default Home;