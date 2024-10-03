// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  startDate: { type: Date, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  skills: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
