
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
                        <h2>Soft Skills</h2>
                    <div className="p-grid">
                        {softSkills.map((skill, index) => (
                            <div className="p-col-12 p-md-4" key={index}>
                                <Card title={`Skill ${index + 1}`} style={{ marginBottom: '20px' }}>
                                    <p>Communication: {skill.communication}</p>
                                    <p>Teamwork: {skill.teamwork}</p>
                                    <p>Problem Solving: {skill.problemSolving}</p>
                                    <p>Adaptability: {skill.adaptability}</p>
                                    <p>Time Management: {skill.timeManagement}</p>
                                    <p>Critical Thinking: {skill.criticalThinking}</p>
                                    <p>Creativity: {skill.creativity}</p>
                                    <p>Leadership: {skill.leadership}</p>
                                    <p>Interpersonal Skills: {skill.interpersonalSkills}</p>
                                    <p>Emotional Intelligence: {skill.emotionalIntelligence}</p>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Technical Skills DataTable */}
                    <h2>Technical Skills</h2>
                    <DataTable value={technicalSkills} paginator rows={5}>
                        <Column field="programmingLanguages" header="Programming Languages" />
                        <Column field="webDevelopment" header="Web Development" />
                        <Column field="databaseManagement" header="Database Management" />
                        <Column field="cloudComputing" header="Cloud Computing" />
                        <Column field="versionControl" header="Version Control" />
                        <Column field="machineLearning" header="Machine Learning" />
                        <Column field="dataAnalysis" header="Data Analysis" />
                        <Column field="cybersecurity" header="Cybersecurity" />
                    </DataTable>

                    {/* Project Skills DataTable */}
                    <h2>Project Skills</h2>
                    <DataTable value={projectSkills} paginator rows={5}>
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

                    {/* Courses DataTable */}
                    <h2>Courses</h2>
                    <DataTable value={courses} paginator rows={5}>
                        <Column field="courseName" header="Course Name" />
                        <Column field="platform" header="Platform" />
                        <Column field="specialization" header="Specialization" />
                        <Column field="totalCourses" header="Total Courses" />
                        <Column field="courseDuration" header="Duration (Months)" />
                        <Column field="courseType" header="Course Type" />
                        <Column field="completionStatus" header="Completion Status" />
                        <Column field="additionalCourses" header="Additional Courses" />
                        <Column field="createdAt" header="Created At" body={(rowData) => new Date(rowData.createdAt).toLocaleDateString()} />
                    </DataTable>

                    {/* Achievements DataTable */}
                    <h2>Achievements</h2>
                    <DataTable value={achievements} paginator rows={5}>
                        <Column field="achievementTitle" header="Title" />
                        <Column field="organization" header="Organization" />
                        <Column field="dateAchieved" header="Date Achieved" body={(rowData) => new Date(rowData.dateAchieved).toLocaleDateString()} />
                        <Column field="description" header="Description" />
                        <Column field="category" header="Category" />
                        <Column field="additionalAchievements" header="Additional Achievements" />
                    </DataTable>

                    {/* Certifications DataTable */}
                    <h2>Certifications</h2>
                    <DataTable value={certifications} paginator rows={5}>
                        <Column field="certificationTitle" header="Title" />
                        <Column field="platform" header="Platform" />
                        <Column field="specialization" header="Specialization" />
                        <Column field="duration" header="Duration (Months)" />
                        <Column field="additionalCertifications" header="Additional Certifications" />
                        <Column field="dateObtained" header="Date Obtained" body={(rowData) => new Date(rowData.dateObtained).toLocaleDateString()} />
                    </DataTable>
                        

                        {/* Similar table structures for Courses, Project Skills, Soft Skills, and Technical Skills */}
                    </div>
                )
            }
        </div>
    );
}



