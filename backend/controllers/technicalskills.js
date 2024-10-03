const TechnicalSkill = require('../models/technicalskills');
const jwt = require('jsonwebtoken');
// Create a new Technical Skill
const createTechnicalSkill = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const technicalSkill = new TechnicalSkill(data);
    await technicalSkill.save();
    res.status(201).json(technicalSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Technical Skills
const getAllTechnicalSkills = async (req, res) => {
  try {
    const skills = await TechnicalSkill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a Technical Skill by ID
const getTechnicalSkillById = async (req, res) => {
  const {userId} = req.params
  try {
    const skill = await TechnicalSkill.findOne({userId:userId});
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a Technical Skill
const updateTechnicalSkill = async (req, res) => {
  try {
    const skill = await TechnicalSkill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Technical Skill
const deleteTechnicalSkill = async (req, res) => {
  try {
    const skill = await TechnicalSkill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTechnicalSkill,
  getAllTechnicalSkills,
  getTechnicalSkillById,
  updateTechnicalSkill,
  deleteTechnicalSkill,
};
