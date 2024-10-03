// controllers/projectSkillController.js
const jwt = require('jsonwebtoken');
const ProjectSkill = require('../models/project');

// Create a new ProjectSkill
exports.createProjectSkill = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const newProjectSkill = new ProjectSkill(data);
    await newProjectSkill.save();
    res.status(201).json({ message: 'Project Skill created successfully!', newProjectSkill });
  } catch (error) {
    res.status(400).json({ message: 'Error creating Project Skill', error });
  }
};

// Get all ProjectSkills
exports.getAllProjectSkills = async (req, res) => {
  try {
    const projectSkills = await ProjectSkill.find();
    res.status(200).json(projectSkills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Project Skills', error });
  }
};

// Get a ProjectSkill by ID
exports.getProjectSkillById = async (req, res) => {
  const {userId} = req.params
  try {

    const projectSkill = await ProjectSkill.findOne({userId:userId});
    if (!projectSkill) {
      return res.status(404).json({ message: 'Project Skill not found' });
    }
    res.status(200).json(projectSkill);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Project Skill', error });
  }
};



// Update a ProjectSkill by ID
exports.updateProjectSkill = async (req, res) => {
  try {
    const updatedProjectSkill = await ProjectSkill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProjectSkill) {
      return res.status(404).json({ message: 'Project Skill not found' });
    }
    res.status(200).json({ message: 'Project Skill updated successfully!', updatedProjectSkill });
  } catch (error) {
    res.status(400).json({ message: 'Error updating Project Skill', error });
  }
};

// Delete a ProjectSkill by ID
exports.deleteProjectSkill = async (req, res) => {
  try {
    const deletedProjectSkill = await ProjectSkill.findByIdAndDelete(req.params.id);
    if (!deletedProjectSkill) {
      return res.status(404).json({ message: 'Project Skill not found' });
    }
    res.status(200).json({ message: 'Project Skill deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Project Skill', error });
  }
};
