import React from 'react';

const EmployeeDashboard = () => {
  // Sample employee data
  const employeeData = {
    name: "John Doe",
    employeeId: "E123456",
    designation: "Software Engineer",
    workExperience: "3 years",
    department: "IT",
    company: "Tech Innovations Ltd.",
    contact: "john.doe@example.com",
    joiningDate: "2021-01-15",
    skills: ["JavaScript", "React", "Node.js"],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Employee Dashboard</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <Card title="General Information">
          <p><strong>Name:</strong> {employeeData.name}</p>
          <p><strong>Employee ID:</strong> {employeeData.employeeId}</p>
          <p><strong>Designation:</strong> {employeeData.designation}</p>
          <p><strong>Department:</strong> {employeeData.department}</p>
          <p><strong>Joining Date:</strong> {employeeData.joiningDate}</p>
        </Card>
        <Card title="Work Experience">
          <p><strong>Experience:</strong> {employeeData.workExperience}</p>
          <p><strong>Skills:</strong> {employeeData.skills.join(', ')}</p>
        </Card>
        <Card title="Contact Information">
          <p><strong>Email:</strong> {employeeData.contact}</p>
        </Card>
      </div>
    </div>
  );
};

// Card Component for styling consistency
const Card = ({ title, children }) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      margin: '10px',
      flex: '1 1 calc(30% - 20px)', // Responsive card width
      minWidth: '250px' // Minimum width for smaller screens
    }}>
      <h3 style={{ margin: '0 0 15px' }}>{title}</h3>
      {children}
    </div>
  );
};

export default EmployeeDashboard;
