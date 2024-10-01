// routes/projectAchievements.js
const express = require('express');
const router = express.Router();
const projectAchievementController = require('../controllers/projectAchievementController');

// Route to create a new project achievement
router.post('/', projectAchievementController.createProjectAchievement);

module.exports = router;
