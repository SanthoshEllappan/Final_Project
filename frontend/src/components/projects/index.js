import React, { useState } from 'react';
import './ProjectSkillsForm.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectSkillsForm = () => {
  const navigate = useNavigate();
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

  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const projectTypes = [
    'Full Stack Development', 'Data Analysis', 'Data Engineering', 'Data Science',
    'Machine Learning', 'Web Development', 'Mobile Development', 'Cybersecurity',
    'Cloud Solutions', 'Other',
  ];

  const tools = [
    'Python', 'JavaScript', 'Java', 'SQL', 'R', 'Node.js', 'React', 'Django', 
    'Tableau', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmVisible(true); // Show confirmation dialog
  };

  const confirmSubmission = async () => {
    setIsLoading(true);
    setIsConfirmVisible(false);

    try {
      const { data, status } = await axios.put('http://127.0.0.1:8080/api/project', {
        data: projectSkills,
        token: localStorage.getItem("userConfig"),
      });

      if (status === 201) {
        setSubmissionMessage("Project skills submitted successfully!");
        setIsSubmitted(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      } else if(status ==200){
        setSubmissionMessage("Successfully updated the Project skills form!"); // Success message
        setIsSubmitted(true); // Trigger the success message view
        setIsLoading(false); // Stop loading

        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      } else {
        console.log("Error: Form submission failed.");
        setSubmissionMessage("Error occurred during submission.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("API submission error:", error);
      setSubmissionMessage("Error occurred during submission.");
      setIsLoading(false);
    }
  };

  return (
    <div className="project-skills-form-container">
      <h2 className="form-title">Project Skills Assessment</h2>

      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="project-skills-form">
            {Object.keys(projectSkills).map((skill, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={skill} className="form-label">
                  {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                {skill === 'projectType' ? (
                  <select
                    id={skill}
                    name={skill}
                    value={projectSkills[skill]}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select Project Type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                ) : skill === 'toolsUsed' ? (
                  <select
                    id={skill}
                    name={skill}
                    value={projectSkills[skill]}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select Tools Used</option>
                    {tools.map((tool, index) => (
                      <option key={index} value={tool}>{tool}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={skill.includes('Projects') ? "number" : "text"}
                    id={skill}
                    name={skill}
                    value={projectSkills[skill]}
                    onChange={handleChange}
                    required
                    className="form-input"
                    min={skill.includes('Projects') ? "0" : undefined}
                  />
                )}
              </div>
            ))}
            <button type="submit" className="submit-button">Submit</button>
          </form>

          {isConfirmVisible && (
            <div className="confirmation-card">
              <p>Do you want to submit your project skills?</p>
              <button className="confirm-button" onClick={confirmSubmission}>Yes, Submit</button>
              <button className="cancel-button" onClick={() => setIsConfirmVisible(false)}>Cancel</button>
            </div>
          )}
        </>
      ) : (
        <div className="success-message">
          <p>{submissionMessage}</p>
        </div>
      )}

      {isLoading && <div className="loading">Submitting...</div>}
    </div>
  );
};

export default ProjectSkillsForm;
