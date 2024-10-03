const express = require('express');
const {
  createTechnicalSkill,
  getAllTechnicalSkills,
  getTechnicalSkillById,
  updateTechnicalSkill,
  deleteTechnicalSkill,
} = require('../controllers/technicalskills');

const router = express.Router();

router.post('/', createTechnicalSkill);            // Create a new Technical Skill
router.get('/', getAllTechnicalSkills);            // Get all Technical Skills
router.get('/:userId', getTechnicalSkillById);         // Get a Technical Skill by ID
router.put('/:id', updateTechnicalSkill);          // Update a Technical Skill
router.delete('/:id', deleteTechnicalSkill);       // Delete a Technical Skill

module.exports = router;
