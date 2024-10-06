// routes/employeeRoutes.js
const express = require('express');
const { 
  createEmployee, 
  getEmployees, 
  getEmployeeById, 
  updateEmployee, 
  deleteEmployee 
} = require('../controllers/personaldetails'); // Adjust the path based on your directory structure
const route = express.Router();

// Route to create a new employee
route.post("/", createEmployee);

// Route to get all employees
route.get("/", getEmployees);

// Route to get a specific employee by ID
route.get("/byid", getEmployeeById);

// Route to update an employee by ID
route.put("/", updateEmployee);

// Route to delete an employee by ID
route.delete("/:id", deleteEmployee);

module.exports = route;
