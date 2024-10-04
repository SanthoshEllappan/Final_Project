import React, { useState } from 'react';
import axios from 'axios';
import './SoftSkillsForm.css'; // Ensure to import the CSS file
import { useNavigate } from 'react-router-dom';

const SoftSkillsForm = () => {
  const navigate = useNavigate();
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

  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For loading indication
  const [submissionMessage, setSubmissionMessage] = useState(""); // For success/failure messages

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

  const numericSkills = ['communication', 'problemSolving', 'timeManagement'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoftSkills((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmVisible(true); // Show confirmation dialog
  };

  const confirmSubmission = async () => {
    setIsLoading(true); // Show loading spinner
    setIsConfirmVisible(false); // Hide the confirmation card

    try {
      const { data, status } = await axios.put('http://127.0.0.1:8080/api/softskills', {
        data: softSkills,
        token: localStorage.getItem("userConfig"),
      });

      if (status === 201) {
        setSubmissionMessage("Successfully submitted the soft skill form!"); // Success message
        setIsSubmitted(true); // Trigger the success message view
        setIsLoading(false); // Stop loading

        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      } else if(status ==200){
        setSubmissionMessage("Successfully updated the soft skill form!"); // Success message
        setIsSubmitted(true); // Trigger the success message view
        setIsLoading(false); // Stop loading

        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      }else {
        console.log("Error: Form not submitted correctly.");
        setSubmissionMessage("Error occurred during form submission.");
        setIsLoading(false); // Stop loading on failure
      }
    } catch (error) {
      console.error("API submission error:", error);
      setSubmissionMessage("Error occurred during form submission.");
      setIsLoading(false); // Stop loading on failure
    }
  };

  return (
    <div className="soft-skills-form-container">
      <h2 className="form-title">Soft Skills Form</h2>

      {!isSubmitted ? (
        <>
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

          {isConfirmVisible && (
            <div className="confirmation-card">
              <p>Do you want to submit your soft skills?</p>
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

export default SoftSkillsForm;
