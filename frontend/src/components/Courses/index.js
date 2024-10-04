import React, { useState } from 'react';
import './CoursesForm.css'; // Ensure to import the CSS file
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const CoursesForm = () => {
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    platform: '',
    specialization: '',
    totalCourses: '',
    courseDuration: '',
    courseType: '',
    completionStatus: '',
    additionalCourses: '',
  });

  // States for confirmation, submission, and loading status
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For loading indication
  const [submissionMessage, setSubmissionMessage] = useState(""); // Success or failure messages

  // Dropdown options for course types
  const courseTypes = [
    'Online Course',
    'In-Person Course',
    'Hybrid Course',
    'Self-Paced Course',
    'Instructor-Led Course',
  ];

  // Dropdown options for completion status
  const completionStatuses = [
    'Completed',
    'In Progress',
    'Not Started',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevState) => ({
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
    setIsConfirmVisible(false); // Hide confirmation dialog

    try {
      const { data, status } = await axios.post('http://127.0.0.1:8080/api/courses', {
        data: courseDetails,
        token: localStorage.getItem("userConfig"),
      });

      if (status === 201) {
        setSubmissionMessage("Successfully submitted the courses form!"); // Success message
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
    <div className="courses-form-container">
      <h2 className="form-title">Courses Assessment</h2>
      
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="courses-form">
            <div className="form-group">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={courseDetails.courseName}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="platform" className="form-label">Platform (e.g., Coursera, edX, Udacity)</label>
              <input
                type="text"
                id="platform"
                name="platform"
                value={courseDetails.platform}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization" className="form-label">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={courseDetails.specialization}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalCourses" className="form-label">Total Number of Courses</label>
              <input
                type="number"
                id="totalCourses"
                name="totalCourses"
                value={courseDetails.totalCourses}
                onChange={handleChange}
                required
                className="form-input"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="courseDuration" className="form-label">Duration of the Course (in hours)</label>
              <input
                type="number"
                id="courseDuration"
                name="courseDuration"
                value={courseDetails.courseDuration}
                onChange={handleChange}
                required
                className="form-input"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="courseType" className="form-label">Type of Course</label>
              <select
                id="courseType"
                name="courseType"
                value={courseDetails.courseType}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select Course Type</option>
                {courseTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="completionStatus" className="form-label">Completion Status</label>
              <select
                id="completionStatus"
                name="completionStatus"
                value={courseDetails.completionStatus}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="" disabled>Select Completion Status</option>
                {completionStatuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="additionalCourses" className="form-label">Additional Courses (comma-separated)</label>
              <input
                type="text"
                id="additionalCourses"
                name="additionalCourses"
                value={courseDetails.additionalCourses}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>

          {isConfirmVisible && (
            <div className="confirmation-card">
              <p>Do you want to submit your course details?</p>
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

export default CoursesForm;
