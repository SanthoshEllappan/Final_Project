// routes/certificationRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const certificationController = require('../controllers/certificationController');

const storage = multer.memoryStorage(); // Store files in memory for simplicity
const upload = multer({ storage });

// POST route for uploading certifications
router.post('/upload', (req, res, next) => {
    console.log("Request received for uploading certifications");
    next(); // Call the next middleware/controller
}, certificationController.uploadCertifications);

module.exports = router;
