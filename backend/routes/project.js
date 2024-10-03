// routes/projectSkills.js

const express = require('express');
const router = express.Router();
const projectSkillController = require('../controllers/project');

// Define the routes for Project Skills
router.post('/', projectSkillController.createProjectSkill);
router.get('/', projectSkillController.getAllProjectSkills);
router.get('/:userId', projectSkillController.getProjectSkillById);
router.put('/:id', projectSkillController.updateProjectSkill);
router.delete('/:id', projectSkillController.deleteProjectSkill);

module.exports = router;
