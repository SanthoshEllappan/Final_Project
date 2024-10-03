const express = require('express');
const { addCertification, getCertifications } = require('../controllers/certifications');
const router = express.Router();

// POST route to add a certification
router.post('/certifications', addCertification);

// GET route to retrieve all certifications
router.get('/:userId', getCertifications);

module.exports = router;
