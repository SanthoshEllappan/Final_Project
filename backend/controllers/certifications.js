const Certification = require('../models/certifications');
const jwt = require('jsonwebtoken');
// Add a new certification
exports.addCertification = async (req, res) => {
  try {
    const {data,token} = req.body
    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const newCertification = new Certification(data);
    await newCertification.save();
    res.status(201).json({ message: 'Certification added successfully', certification: newCertification });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all certifications
exports.getCertifications = async (req, res) => {
  const {userId} = req.params
  
  try {
    const certifications = await Certification.findOne({userId:userId});
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
