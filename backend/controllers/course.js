// controllers/courseController.js
const jwt = require('jsonwebtoken');
const Course = require('../models/course');

// Create a new Course
exports.createCourse = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const newCourse = new Course(data);
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully!', newCourse });
  } catch (error) {
    res.status(400).json({ message: 'Error creating course', error });
  }
};

// Get all Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};



// Retrieve a soft skills entry by ID
exports.getCourseById = async (req, res) => {
  const {userId} = req.query
  const { id } = jwt.verify(userId, process.env.JWT_SECRET);
  
  try {
    console.log("djf")
    const CourseEntry = await Course.findOne({userId:id});
    
    if (!CourseEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json(CourseEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving soft skills entry', error: error.message });
  }
};


// Update a Course by ID
exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course updated successfully!', updatedCourse });
  } catch (error) {
    res.status(400).json({ message: 'Error updating course', error });
  }
};

// Delete a Course by ID
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};


exports.getCourse = async (req, res) => {

  const {userId} = req.params
  try {
    console.log(userId)
    const Courses = await Course.findOne({userId:userId});
    console.log(Course);
    res.status(200).json(Courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


