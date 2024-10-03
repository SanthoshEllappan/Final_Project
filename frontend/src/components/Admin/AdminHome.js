
import { useState, useEffect } from 'react';
import axios from 'axios';
// import jwt_decode from "jwt-decode";
import AdminNav from './AdminNav';
import UserDetails from './UserDetail';

export default function AdminHome() {
    const [click, setClick] = useState('');
    const [achievements, setAchievements] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [course, setCourse] = useState(null);
    const [projectSkill, setProjectSkill] = useState(null);
    const [softSkills, setSoftSkills] = useState(null);
    const [technicalSkills, setTechnicalSkills] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the backend
    const fetchData = async () => {
        try {
            if(click!=''){

                const id = click;
                
                // Fetch achievements
                const achievementsResponse = await axios.get(`http://127.0.0.1:8080/api/achievements/achievements/${id}`);
                console.log('Achievements:', achievementsResponse.data);
                setAchievements([achievementsResponse.data]);
    
                // Fetch certifications
                const certificationsResponse = await axios.get(`http://127.0.0.1:8080/api/certifications/${id}`);
                console.log('Certifications:', certificationsResponse.data);
                setCertifications([certificationsResponse.data]);
    
               
                const courseResponse = await axios.get(`http://127.0.0.1:8080/api/courses/${id}`);
                console.log('Course:', courseResponse.data);
                setCourse([courseResponse.data]);
    
                // Fetch project skills
                const projectSkillResponse = await axios.get(`http://127.0.0.1:8080/api/project/${id}`);
                console.log('Project Skills:', projectSkillResponse.data);
                setProjectSkill([projectSkillResponse.data]);
    
                // Fetch soft skills
                const softSkillsResponse = await axios.get(`http://127.0.0.1:8080/api/softskills/${id}`);
                console.log('Soft Skills:', softSkillsResponse.data);
                setSoftSkills([softSkillsResponse.data]);
    
                // Fetch technical skills
                const technicalSkillsResponse = await axios.get(`http://127.0.0.1:8080/api/technical/${id}`);
                console.log('Technical Skills:', technicalSkillsResponse.data);
                setTechnicalSkills([technicalSkillsResponse.data]);
    
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // Use useEffect to call the API when the component mounts
    useEffect(() => {
        fetchData();
        // console.log(achievements);
        
    }, [click]);

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>Error: {error}</div>; // Show error message

    return (
        <div>
        <AdminNav />
        {
            click === '' ? (
                <UserDetails setClick={setClick} />
            ) : (
                <div>
                    <h2>Achievements</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Organization</th>
                                <th>Date Achieved</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Additional Achievements</th>
                            </tr>
                        </thead>
                        <tbody>{Array.isArray(achievements) && achievements.length > 0 ?
                            (achievements.map((achievement) => (
                                <tr key={achievement._id}>
                                    <td>{achievement.achievementTitle}</td>
                                    <td>{achievement.organization}</td>
                                    <td>{new Date(achievement.dateAchieved).toLocaleDateString()}</td>
                                    <td>{achievement.description}</td>
                                    <td>{achievement.category}</td>
                                    <td>{achievement.additionalAchievements}</td>
                                </tr>
                            ))):<p>hbwa</p>}
                        </tbody>
                    </table>
    
                    <h2>Certifications</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Platform</th>
                                <th>Specialization</th>
                                <th>Date Obtained</th>
                                <th>Duration</th>
                                <th>Additional Certifications</th>
                            </tr>
                        </thead>
                        <tbody>
                            { certifications.length > 0 && certifications.map((certification) => (
                                <tr key={certification._id}>
                                    <td>{certification.certificationTitle}</td>
                                    <td>{certification.platform}</td>
                                    <td>{certification.specialization}</td>
                                    <td>{new Date(certification.dateObtained).toLocaleDateString()}</td>
                                    <td>{certification.duration} months</td>
                                    <td>{certification.additionalCertifications}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    
                    <h2>Courses</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Platform</th>
                                <th>Specialization</th>
                                <th>Duration</th>
                                <th>Completion Status</th>
                                <th>Additional Courses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {course> 0 && course.map((course) => (
                                <tr key={course._id}>
                                    <td>{course.courseName}</td>
                                    <td>{course.platform}</td>
                                    <td>{course.specialization}</td>
                                    <td>{course.courseDuration} months</td>
                                    <td>{course.completionStatus}</td>
                                    <td>{course.additionalCourses}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>project</h2>
                    <table>
                <thead>
                    <tr>
                        <th>Project Type</th>
                        <th>Software Engineer Projects</th>
                        <th>Consultant Projects</th>
                        <th>Full Stack Projects</th>
                        <th>Data Analyst Projects</th>
                        <th>Data Engineer Projects</th>
                        <th>Data Science Projects</th>
                        <th>Other Projects</th>
                        <th>Favorite Project</th>
                        <th>Tools Used</th>
                    </tr>
                </thead>
                <tbody>
                {projectSkill> 0 && projectSkill.map((skills) => (
                    <tr key={skills._id}>
                        <td>{skills.projectType}</td>
                        <td>{skills.softwareEngineerProjects}</td>
                        <td>{skills.consultantProjects}</td>
                        <td>{skills.fullStackProjects}</td>
                        <td>{skills.dataAnalystProjects}</td>
                        <td>{skills.dataEngineerProjects}</td>
                        <td>{skills.dataScienceProjects}</td>
                        <td>{skills.otherProjects}</td>
                        <td>{skills.favoriteProject}</td>
                        <td>{skills.toolsUsed}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
    
                    <h2>Soft Skills</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Proficiency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(softSkills,"jhgdwjyg")} */}
                            {/* { softSkills.length > 0 ? (
                                softSkills.map((skill) => (
                                    <tr key={skill._id}>
                                        <td>{skill.skillName.charAt(0).toUpperCase() + skill.skillName.slice(1).replace(/([A-Z])/g, ' ')}</td>
                                        <td>{skill.proficiency}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No soft skills available.</td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                    <h2>Technical Skills</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Proficiency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {technicalSkills.length>0 && technicalSkills.map(([skill, level],index) => (
                                <tr key={index}>
                                    <td>{skill.charAt(0).toUpperCase() + skill.slice(1)}</td>
                                    <td>{level}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table> 
                </div>
            )
        }
    </div>
    );
}
