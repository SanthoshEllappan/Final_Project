import React, { useState } from 'react';
import './SoftSkillsForm.css'; // Ensure to import the CSS file

const SoftSkillsForm = () => {
  const [softSkills, setSoftSkills] = useState({
    communication: '',
    teamwork: '',
    problemSolving: '',
    adaptability: '',
    timeManagement: '',
    criticalThinking: '',
    creativity: '',
    leadership: '',
    interpersonalSkills: '',
    emotionalIntelligence: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoftSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Soft Skills:', softSkills);
  };

  return (
    <div className="soft-skills-form-container">
      <h2 className="form-title">Soft Skills Form</h2>
      <form onSubmit={handleSubmit} className="soft-skills-form">
        {Object.entries(softSkills).map(([skill, value]) => (
          <div className="form-group" key={skill}>
            <label htmlFor={skill} className="form-label">
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              id={skill}
              name={skill}
              value={value}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SoftSkillsForm;
