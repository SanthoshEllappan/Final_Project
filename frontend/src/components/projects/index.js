import React, { useState } from 'react';
import './ProjectSkillsForm.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProjectSkillsForm = () => {
  const navigate = useNavigate()
  const [projectSkills, setProjectSkills] = useState({
    softwareEngineerProjects: '',
    consultantProjects: '',
    fullStackProjects: '',
    dataAnalystProjects: '',
    dataEngineerProjects: '',
    dataScienceProjects: '',
    otherProjects: '',
    projectType: '',
    toolsUsed: '',
    favoriteProject: '',
  });

  // Dropdown options for project types
  const projectTypes = [
    'Full Stack Development',
    'Data Analysis',
    'Data Engineering',
    'Data Science',
    'Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cybersecurity',
    'Cloud Solutions',
    'Other',
  ];

  // Sample tools used in projects
  const tools = [
    'Python',
    'JavaScript',
    'Java',
    'SQL',
    'R',
    'Node.js',
    'React',
    'Django',
    'Tableau',
    'AWS',
    'Azure',
    'GCP',
    'Docker',
    'Kubernetes',
    'Git',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Project Skills:', projectSkills);
    const res = await axios.post('http://127.0.0.1:8080/api/project',{data:projectSkills,token:localStorage.getItem("userConfig")});
    if (res.status == 201) {
      
      navigate('/dashboard', { replace: true });
  } else {
      console.log("Error");
}
  };

  return (
    <div className="project-skills-form-container">
      <h2 className="form-title">Project Skills Assessment</h2>
      <form onSubmit={handleSubmit} className="project-skills-form">
        <div className="form-group">
          <label htmlFor="softwareEngineerProjects" className="form-label">
            Number of Projects Worked as Software Engineer
          </label>
          <input
            type="number"
            id="softwareEngineerProjects"
            name="softwareEngineerProjects"
            value={projectSkills.softwareEngineerProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="consultantProjects" className="form-label">
            Number of Projects Worked as Consultant
          </label>
          <input
            type="number"
            id="consultantProjects"
            name="consultantProjects"
            value={projectSkills.consultantProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fullStackProjects" className="form-label">
            Number of Full Stack Projects
          </label>
          <input
            type="number"
            id="fullStackProjects"
            name="fullStackProjects"
            value={projectSkills.fullStackProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataAnalystProjects" className="form-label">
            Number of Data Analyst Projects
          </label>
          <input
            type="number"
            id="dataAnalystProjects"
            name="dataAnalystProjects"
            value={projectSkills.dataAnalystProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataEngineerProjects" className="form-label">
            Number of Data Engineer Projects
          </label>
          <input
            type="number"
            id="dataEngineerProjects"
            name="dataEngineerProjects"
            value={projectSkills.dataEngineerProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataScienceProjects" className="form-label">
            Number of Data Science Projects
          </label>
          <input
            type="number"
            id="dataScienceProjects"
            name="dataScienceProjects"
            value={projectSkills.dataScienceProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="otherProjects" className="form-label">
            Number of Other Projects
          </label>
          <input
            type="number"
            id="otherProjects"
            name="otherProjects"
            value={projectSkills.otherProjects}
            onChange={handleChange}
            required
            className="form-input"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType" className="form-label">
            Type of Projects Worked On
          </label>
          <select
            id="projectType"
            name="projectType"
            value={projectSkills.projectType}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select Project Type</option>
            {projectTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="toolsUsed" className="form-label">
            Tools Used in Projects
          </label>
          <select
            id="toolsUsed"
            name="toolsUsed"
            value={projectSkills.toolsUsed}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select Tools Used</option>
            {tools.map((tool, index) => (
              <option key={index} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="favoriteProject" className="form-label">
            What was Your Favorite Project?
          </label>
          <input
            type="text"
            id="favoriteProject"
            name="favoriteProject"
            value={projectSkills.favoriteProject}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ProjectSkillsForm;
