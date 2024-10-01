// controllers/projectAchievementController.js
const ProjectAchievement = require('../models/ProjectAchievement');

// Create a new project achievement
exports.createProjectAchievement = async (req, res) => {
  const {
    projectName,
    description,
    technologiesUsed,
    role,
    duration,
    teamSize,
    keyAchievements,
    challengesFaced,
    outcomes,
    lessonsLearned,
  } = req.body;

  try {
    const newAchievement = new ProjectAchievement({
      projectName,
      description,
      technologiesUsed,
      role,
      duration,
      teamSize,
      keyAchievements,
      challengesFaced,
      outcomes,
      lessonsLearned,
    });

    await newAchievement.save();
    res.status(201).json({ message: 'Project achievement saved successfully', newAchievement });
  } catch (error) {
    res.status(500).json({ message: 'Error saving project achievement', error });
  }
};
