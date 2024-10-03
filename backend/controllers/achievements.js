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
  console.log("Asdfasfad")
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
