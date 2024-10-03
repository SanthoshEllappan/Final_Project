import React, { useState } from 'react';
import './CoursesForm.css'; // Ensure to import the CSS file
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const CoursesForm = () => {
  const navigate = useNavigate()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Course Details:', courseDetails);
    const res = await axios.post('http://127.0.0.1:8080/api/courses',{data:courseDetails,token:localStorage.getItem("userConfig")});
    if (res.status == 201) {
      
      navigate('/dashboard', { replace: true });
  } else {
      console.log("Error");
}
  };

  return (
    <div className="courses-form-container">
      <h2 className="form-title">Courses Assessment</h2>
      <form onSubmit={handleSubmit} className="courses-form">
        <div className="form-group">
          <label htmlFor="courseName" className="form-label">
            Course Name
          </label>
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
          <label htmlFor="platform" className="form-label">
            Platform (e.g., Coursera, edX, Udacity)
          </label>
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
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
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
          <label htmlFor="totalCourses" className="form-label">
            Total Number of Courses
          </label>
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
          <label htmlFor="courseDuration" className="form-label">
            Duration of the Course (in hours)
          </label>
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
          <label htmlFor="courseType" className="form-label">
            Type of Course
          </label>
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
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="completionStatus" className="form-label">
            Completion Status
          </label>
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
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="additionalCourses" className="form-label">
            Additional Courses (comma-separated)
          </label>
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
    </div>
  );
};

export default CoursesForm;
