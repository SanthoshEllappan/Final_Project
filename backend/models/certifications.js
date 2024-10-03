const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  certificationTitle: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  dateObtained: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  additionalCertifications: {
    type: String,
    default: '',
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Certification = mongoose.model('Certification', CertificationSchema);

module.exports = Certification;
