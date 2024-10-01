// controllers/certificationController.js
const Certification = require('../models/certification');

// Handle the upload and save for certifications
exports.uploadCertifications = async (req, res) => {
    try {
        console.log("sadgas")
        const { names, domains, issueDates, platforms } = req.body;
        // Process uploaded files if necessary
        // const files = req.files; // Array of files if using multer
        console.log('Uploaded files:', files);

        // Save each certification to the database
        for (let i = 0; i < names.length; i++) {
            const newCertification = new Certification({
                name: names[i] ,
                domain: domains[i],
                issueDate: issueDates[i],
                platform: platforms[i],
                // Include any other fields as necessary
            });

            await newCertification.save();
        }

        res.status(200).json({ message: 'Certificates uploaded successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading certificates.' });
    }
};
