const Achievement = require('../models/achievements');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
// Add a new achievement
exports.addAchievement = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const newAchievement = new Achievement(data);
    await newAchievement.save();
    res.status(201).json({ message: 'Achievement added successfully', achievement: newAchievement });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all achievements
exports.getAchievements = async (req, res) => {

  const {userId} = req.params
  try {
    console.log(userId)
    const achievements = await Achievement.findOne({userId:userId});
    console.log(achievements);
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllAchievements = async (req, res) => {
  try {
    const Achievements = await Achievement.find();
    res.status(200).json(Achievements);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Project Skills', error });
  }
};


// Retrieve a soft skills entry by ID
exports.getAchievementsById = async (req, res) => {
  const {userId} = req.query
  const { id } = jwt.verify(userId, process.env.JWT_SECRET);
  console.log("djf")
  try {
    const AchievementsEntry = await Achievement.findOne({userId:id});
    
    if (!AchievementsEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json(AchievementsEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving soft skills entry', error: error.message });
  }
};