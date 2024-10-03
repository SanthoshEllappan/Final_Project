const SoftSkills = require('../models/softskills'); // Adjust the path as necessary
const jwt = require('jsonwebtoken');

// Create a new soft skills entry
 const createSoftSkills = async (req, res) => {
  try {

    const {data,token} = req.body

    const {id} = jwt.verify(token, process.env.JWT_SECRET);
    data.userId = id
    const softSkills = new SoftSkills(data);
    await softSkills.save();
    res.status(201).json({ message: 'Soft skills entry created successfully', softSkills });
  } catch (error) {
    res.status(400).json({ message: 'Error creating soft skills entry', error: error.message });
  }
};

// Retrieve all soft skills entries
 const getSoftSkills = async (req, res) => {
  try {
    const softSkillsEntries = await SoftSkills.find();
    res.status(200).json(softSkillsEntries);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving soft skills entries', error: error.message });
  }
};

// Retrieve a soft skills entry by ID
const getSoftSkillsById = async (req, res) => {
  const {userId} = req.params
  try {
    const softSkillsEntry = await SoftSkills.findOne({userId:userId});
    
    if (!softSkillsEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json(softSkillsEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving soft skills entry', error: error.message });
  }
};





// Update a soft skills entry by ID
 const updateSoftSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const softSkillsEntry = await SoftSkills.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    
    if (!softSkillsEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json({ message: 'Soft skills entry updated successfully', softSkillsEntry });
  } catch (error) {
    res.status(400).json({ message: 'Error updating soft skills entry', error: error.message });
  }
};

// Delete a soft skills entry by ID
const deleteSoftSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const softSkillsEntry = await SoftSkills.findByIdAndDelete(id);
    
    if (!softSkillsEntry) {
      return res.status(404).json({ message: 'Soft skills entry not found' });
    }
    
    res.status(200).json({ message: 'Soft skills entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting soft skills entry', error: error.message });
  }
};

module.exports= {
    deleteSoftSkills,createSoftSkills,updateSoftSkills,getSoftSkills,getSoftSkillsById
}