// 
import React, { useState } from 'react';
import axios from 'axios';
import './SoftSkillsForm.css'; // Ensure to import the CSS file
import { useNavigate } from 'react-router-dom';

const SoftSkillsForm = () => {
  const navigate = useNavigate()
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
  const numericSkills = ['communication', 'problemSolving', 'timeManagement'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoftSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show confirmation dialog
    const isConfirmed = window.confirm('Do you want to submit your soft skills?');

    if (isConfirmed) {
      console.log('Submitted Soft Skills:', softSkills);
      
      try {
        const { data } = await axios.post('http://127.0.0.1:8080/api/softskills', {data:softSkills,token:localStorage.getItem("userConfig")});
        if (data.status === 201) {
          console.log(data);
          navigate('/dashboard', { replace: true });
        } else {
          console.log("Error in submission");
        }
      } catch (error) {
        console.error("Error during API call", error);
      }
    } else {
      console.log('Submission canceled');
    }
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

export default SoftSkillsForm;
