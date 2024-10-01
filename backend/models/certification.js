const Certification = require('../models/certification');


// models/Certification.js
const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  name: String,
  domain: String,
  issueDate: Date,
  platform: String,
  // Add more fields as necessary
});

const certification = mongoose.model('Certification', CertificationSchema);
module.exports = certification;
