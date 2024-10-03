const express = require('express')
const { createSoftSkills } = require('../controllers/softskills')
const { getSoftSkillsById } = require('../controllers/softskills')
const route = express.Router()

route.post("/",createSoftSkills)
route.get('/:userId', getSoftSkillsById); 

module.exports = route;