import React, { useState } from 'react';
import './CertificationsForm.css'; // Ensure to import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CertificationsForm = () => {
  const navigate = useNavigate()
  const [certifications, setCertifications] = useState({
    certificationTitle: '',
    platform: '',
    specialization: '',
    dateObtained: '',
    duration: '',
    additionalCertifications: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Certifications:', certifications);
    const res  = await axios.post('http://127.0.0.1:8080/api/certifications/certifications',{data:certifications,token:localStorage.getItem("userConfig")});
    if (res.status == 201) {
      
      navigate('/dashboard', { replace: true });
  } else {
      console.log("Error");}
  };

  return (
    <div className="certifications-form-container">
      <h2 className="form-title">Certifications Assessment</h2>
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
    </div>
  );
};

export default CertificationsForm;
