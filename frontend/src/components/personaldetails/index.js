import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    startDate: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    employmentStatus: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API or log to console)
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input 
            type="tel" 
            className="form-control" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="position" className="form-label">Position</label>
            <input 
              type="text" 
              className="form-control" 
              id="position" 
              name="position" 
              value={formData.position} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <input 
              type="text" 
              className="form-control" 
              id="department" 
              name="department" 
              value={formData.department} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input 
            type="date" 
            className="form-control" 
            id="startDate" 
            name="startDate" 
            value={formData.startDate} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input 
            type="date" 
            className="form-control" 
            id="dateOfBirth" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select 
            className="form-select" 
            id="gender" 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea 
            className="form-control" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            rows="3" 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
          <select 
            className="form-select" 
            id="employmentStatus" 
            name="employmentStatus" 
            value={formData.employmentStatus} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Status</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="intern">Intern</option>
          </select>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;
