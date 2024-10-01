// src/components/Certifications.js
import React, { useState } from 'react';
import axios from 'axios';

const Certifications = () => {
    const [files, setFiles] = useState([]);
    const [names, setNames] = useState(['']); // Array for certificate names
    const [domains, setDomains] = useState(['']); // Array for domains
    const [issueDates, setIssueDates] = useState(['']); // Array for issue dates
    const [platforms, setPlatforms] = useState(['']); // Array for platforms
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files));
    };

    const handleNameChange = (index, event) => {
        const updatedNames = [...names];
        updatedNames[index] = event.target.value;
        setNames(updatedNames);
    };

    const handleDomainChange = (index, event) => {
        const updatedDomains = [...domains];
        updatedDomains[index] = event.target.value;
        setDomains(updatedDomains);
    };

    const handleIssueDateChange = (index, event) => {
        const updatedIssueDates = [...issueDates];
        updatedIssueDates[index] = event.target.value;
        setIssueDates(updatedIssueDates);
    };

    const handlePlatformChange = (index, event) => {
        const updatedPlatforms = [...platforms];
        updatedPlatforms[index] = event.target.value;
        setPlatforms(updatedPlatforms);
    };

    const handleUpload = async () => {
        if (files.length === 0 || names.length === 0) {
            setMessage('Please provide certificate details and select files to upload.');
            return;
        }

        const formData = new FormData();
        files.forEach(file => {
            formData.append('certificates[]', file);
        });

        formData.append('names', JSON.stringify(names)); // Convert arrays to JSON strings
        formData.append('domains', JSON.stringify(domains));
        formData.append('issueDates', JSON.stringify(issueDates));
        formData.append('platforms', JSON.stringify(platforms));

        try {
            console.log(formData,"asgsa")
            const response = await axios.post('/api/certifications/upload',{data:"sdad"}
            //      {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // }
        );
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setMessage('Error uploading certificates. Please try again.');
        }
    };

    const addInputFields = () => {
        setNames([...names, '']);
        setDomains([...domains, '']);
        setIssueDates([...issueDates, '']);
        setPlatforms([...platforms, '']);
    };

    return (
        <div>
            <h1>Upload Your Certificates</h1>
            {names.map((_, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Certificate Name"
                        value={names[index]}
                        onChange={(event) => handleNameChange(index, event)}
                    />
                    <input
                        type="text"
                        placeholder="Domain"
                        value={domains[index]}
                        onChange={(event) => handleDomainChange(index, event)}
                    />
                    <input
                        type="date"
                        value={issueDates[index]}
                        onChange={(event) => handleIssueDateChange(index, event)}
                    />
                    <input
                        type="text"
                        placeholder="Learning Platform"
                        value={platforms[index]}
                        onChange={(event) => handlePlatformChange(index, event)}
                    />
                    <input type="file" onChange={handleFileChange} />
                </div>
            ))}
            <button onClick={addInputFields}>Add More Certification</button>
            <button onClick={handleUpload}>Upload Certificates</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Certifications;
