import React, { useState } from 'react';
import './TechnicalSkillsForm.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TechnicalSkillsForm = () => {
  const navigate = useNavigate()
  const [technicalSkills, setTechnicalSkills] = useState({
    programmingLanguages: '',
    webDevelopment: '',
    databaseManagement: '',
    cloudComputing: '',
    versionControl: '',
    machineLearning: '',
    dataAnalysis: '',
    cybersecurity: '',
  });

  // Categorical options for the dropdown
  const categories = [
    'Not at all proficient',
    'Slightly proficient',
    'Moderately proficient',
    'Very proficient',
    'Extremely proficient',
    'Expert',
    'Master',
    'Leader',
    'Innovator',
    'Visionary',
  ];

  // Array of skills that will use numerical ratings
  const numericSkills = ['programmingLanguages', 'webDevelopment', 'databaseManagement'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechnicalSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Technical Skills:', technicalSkills);
    const res = await axios.post('http://127.0.0.1:8080/api/technical', {data:technicalSkills,token:localStorage.getItem("userConfig")});
    if (res.status == 201) {
      
      navigate('/dashboard', { replace: true });
  } else {
      console.log("Error");
}
  };

  return (
    <div className="technical-skills-form-container">
      <h2 className="form-title">Technical Skills Assessment</h2>
      <form onSubmit={handleSubmit} className="technical-skills-form">
        {Object.entries(technicalSkills).map(([skill, value]) => (
          <div className="form-group" key={skill}>
            <label htmlFor={skill} className="form-label">
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' ')}
            </label>
            {numericSkills.includes(skill) ? (
              <select
                id={skill}
                name={skill}
                value={value}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select proficiency level (1-10)</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            ) : (
              <select
                id={skill}
                name={skill}
                value={value}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select proficiency level</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default TechnicalSkillsForm;
