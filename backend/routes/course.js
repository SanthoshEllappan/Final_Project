// routes/courses.js

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');

// Define the routes for Courses
router.post('/', courseController.createCourse);
router.get('/all', courseController.getAllCourses);
router.get('/:userId', courseController.getCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
