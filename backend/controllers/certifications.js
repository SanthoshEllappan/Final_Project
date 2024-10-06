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

// Get all ProjectSkills
exports.getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find();
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Project Skills', error });
  }
};


// Retrieve a soft skills entry by ID
exports.getCertificationsById = async (req, res) => {
  const {userId} = req.query
  const { id } = jwt.verify(userId, process.env.JWT_SECRET);
  console.log("djf")
  try {
    const CertificationsEntry = await Certification.findOne({userId:id});
    
    if (!CertificationsEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json(CertificationsEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving soft skills entry', error: error.message });
  }
};