
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetail';
import AdminHeader from './AdminNav';
import Sidebar from './sidebar';
// import Header from './Header'; // Import the Header component

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
            if (click !== '') {
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
    }, [click]);

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>Error: {error}</div>; // Show error message

    return (
        <div>
            <AdminHeader/>
            {/* <AdminNav /> Admin Navigation */}
            {
                click === '' ? (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                      }}>
                        <Sidebar/>
                        <UserDetails setClick={setClick} />
                    </div>
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
                            <tbody>
                                {Array.isArray(achievements) && achievements.length > 0 ? (
                                    achievements.map((achievement) => (
                                        <tr key={achievement._id}>
                                            <td>{achievement.achievementTitle}</td>
                                            <td>{achievement.organization}</td>
                                            <td>{new Date(achievement.dateAchieved).toLocaleDateString()}</td>
                                            <td>{achievement.description}</td>
                                            <td>{achievement.category}</td>
                                            <td>{achievement.additionalAchievements}</td>
                                        </tr>
                                    ))
                                ) : <p>No achievements available.</p>}
                            </tbody>
                        </table>

                        {/* Similar table structure for Certifications, Courses, Project Skills, Soft Skills, Technical Skills */}
                        {/* Certifications Table */}
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
                                {certifications.length > 0 && certifications.map((certification) => (
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

                        {/* Similar table structures for Courses, Project Skills, Soft Skills, and Technical Skills */}
                    </div>
                )
            }
        </div>
    );
}
