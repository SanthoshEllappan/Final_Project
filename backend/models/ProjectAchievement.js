// models/ProjectAchievement.js
const mongoose = require('mongoose');

const ProjectAchievementSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  technologiesUsed: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: Number, required: true },
  teamSize: { type: Number, required: true },
  keyAchievements: { type: String, required: true },
  challengesFaced: { type: String, required: true },
  outcomes: { type: String, required: true },
  lessonsLearned: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProjectAchievement', ProjectAchievementSchema);
