import React, { useState } from 'react';
import './CertificationsForm.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CertificationsForm = () => {
  const navigate = useNavigate();
  const [certifications, setCertifications] = useState({
    certificationTitle: '',
    platform: '',
    specialization: '',
    dateObtained: '',
    duration: '',
    additionalCertifications: '',
  });

  // States for confirmation, submission, loading status, and messages
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For loading indication
  const [submissionMessage, setSubmissionMessage] = useState(""); // Success or failure messages

  // Dropdown options for specializations
  const specializations = [
    'Data Science',
    'Web Development',
    'Mobile App Development',
    'Cloud Computing',
    'Machine Learning',
    'Cybersecurity',
    'Project Management',
    'AI & Deep Learning',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertifications((prevState) => ({
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
      const res = await axios.post('http://127.0.0.1:8080/api/certifications/certifications', {
        data: certifications,
        token: localStorage.getItem("userConfig"),
      });

      if (res.status === 201) {
        setSubmissionMessage("Successfully submitted the certifications form!"); // Success message
        setIsSubmitted(true); // Trigger the success message view
        setTimeout(() => {
          navigate('/dashboard', { replace: true });
        }, 3000); // Redirect after 3 seconds
      } else {
        setSubmissionMessage("Error occurred during form submission.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionMessage("Error occurred during form submission.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="certifications-form-container">
      <h2 className="form-title">Certifications Assessment</h2>

      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="certifications-form">
            <div className="form-group">
              <label htmlFor="certificationTitle" className="form-label">
                Certification Title
              </label>
              <input
                type="text"
                id="certificationTitle"
                name="certificationTitle"
                value={certifications.certificationTitle}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="platform" className="form-label">
                Platform
              </label>
              <input
                type="text"
                id="platform"
                name="platform"
                value={certifications.platform}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization" className="form-label">
                Specialization
              </label>
              <select
                id="specialization"
                name="specialization"
                value={certifications.specialization}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select Specialization</option>
                {specializations.map((spec, index) => (
                  <option key={index} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateObtained" className="form-label">
                Date Obtained
              </label>
              <input
                type="date"
                id="dateObtained"
                name="dateObtained"
                value={certifications.dateObtained}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="form-label">
                Duration (in hours)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={certifications.duration}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="additionalCertifications" className="form-label">
                Additional Certifications (comma-separated)
              </label>
              <input
                type="text"
                id="additionalCertifications"
                name="additionalCertifications"
                value={certifications.additionalCertifications}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>

          {isConfirmVisible && (
            <div className="confirmation-card">
              <p>Do you want to submit your certifications?</p>
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

export default CertificationsForm;
