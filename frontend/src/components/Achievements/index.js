import React, { useState } from 'react';
import './index.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AchievementsForm = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState({
    achievementTitle: '',
    organization: '',
    dateAchieved: '',
    description: '',
    category: '',
    additionalAchievements: '',
  });

  // States for confirmation and submission messages
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Dropdown options for achievement categories
  const achievementCategories = [
    'Academic',
    'Professional',
    'Community Service',
    'Sports',
    'Certifications',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievements((prevState) => ({
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
    setIsConfirmVisible(false); // Hide confirmation card

    try {
      const res = await axios.post('http://127.0.0.1:8080/api/achievements/achievements', {
        data: achievements,
        token: localStorage.getItem("userConfig"),
      });

      if (res.status === 201) {
        setSubmissionMessage("Successfully submitted the achievements form!");
        setIsSubmitted(true); // Trigger the success message view
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      } else {
        setSubmissionMessage("Error occurred during form submission.");
      }
    } catch (error) {
      console.error("API submission error:", error);
      setSubmissionMessage("Error occurred during form submission.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="achievements-form-container">
      <h2 className="form-title">Achievements Assessment</h2>

      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="achievements-form">
            <div className="form-group">
              <label htmlFor="achievementTitle" className="form-label">
                Achievement Title
              </label>
              <input
                type="text"
                id="achievementTitle"
                name="achievementTitle"
                value={achievements.achievementTitle}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization" className="form-label">
                Organization/Institution
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={achievements.organization}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateAchieved" className="form-label">
                Date Achieved
              </label>
              <input
                type="date"
                id="dateAchieved"
                name="dateAchieved"
                value={achievements.dateAchieved}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description of Achievement
              </label>
              <textarea
                id="description"
                name="description"
                value={achievements.description}
                onChange={handleChange}
                required
                className="form-input"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category of Achievement
              </label>
              <select
                id="category"
                name="category"
                value={achievements.category}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select Achievement Category</option>
                {achievementCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="additionalAchievements" className="form-label">
                Additional Achievements (comma-separated)
              </label>
              <input
                type="text"
                id="additionalAchievements"
                name="additionalAchievements"
                value={achievements.additionalAchievements}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>

          {isConfirmVisible && (
            <div className="confirmation-card">
              <p>Do you want to submit your achievements?</p>
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

export default AchievementsForm;
