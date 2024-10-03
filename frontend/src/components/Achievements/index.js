import React, { useState } from 'react';
import './index.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AchievementsForm = () => {
  const navigate = useNavigate()
  const [achievements, setAchievements] = useState({
    achievementTitle: '',
    organization: '',
    dateAchieved: '',
    description: '',
    category: '',
    additionalAchievements: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Achievements:', achievements);
    const res = await axios.post('http://127.0.0.1:8080/api/achievements/achievements',{data:achievements,token:localStorage.getItem("userConfig")});
    if (res.status == 201) {
      
      navigate('/dashboard', { replace: true });
  } else {
      console.log("Error");
}
  };

  return (
    <div className="achievements-form-container">
      <h2 className="form-title">Achievements Assessment</h2>
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
    </div>
  );
};

export default AchievementsForm;
