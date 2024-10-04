const express = require('express');
const { addAchievement, getAchievements,getAllAchievements } = require('../controllers/achievements');
const router = express.Router();

// POST route to add an achievement
router.post('/achievements', addAchievement);

// GET route to retrieve all achievements
router.get('/achievements/:userId', getAchievements);
router.get('/all', getAllAchievements);

module.exports = router;
