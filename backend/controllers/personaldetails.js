// controllers/employeeController.js
const Employee = require('../models/personaldetails'); // Adjust the path as necessary
const jwt = require('jsonwebtoken');
// Create a new employee entry
exports.createEmployee = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully', employee });
  } catch (error) {
    res.status(400).json({ message: 'Error creating employee', error: error.message });
  }
};

// Retrieve all employee entries
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving employees', error: error.message });
  }
};

// Retrieve an employee entry by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving employee', error: error.message });
  }
};

// Update an employee entry by ID
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.status(200).json({ message: 'Employee updated successfully', employee });
  } catch (error) {
    res.status(400).json({ message: 'Error updating employee', error: error.message });
  }
};

// Delete an employee entry by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
};
