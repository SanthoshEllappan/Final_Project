import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import './index.css'; // Assuming you will create this CSS file

const FormComponent = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [technologiesUsed, setTechnologiesUsed] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [keyAchievements, setKeyAchievements] = useState('');
  const [challengesFaced, setChallengesFaced] = useState('');
  const [outcomes, setOutcomes] = useState('');
  const [lessonsLearned, setLessonsLearned] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      projectName &&
      description &&
      technologiesUsed &&
      role &&
      duration &&
      teamSize &&
      keyAchievements &&
      challengesFaced &&
      outcomes &&
      lessonsLearned &&
      isChecked
    ) {
      console.log({
        projectName,
        description,
        technologiesUsed,
        role,
        duration,
        teamSize,
        keyAchievements,
        challengesFaced,
        outcomes,
        lessonsLearned,
      });
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Project Achievements</h2>
      <form className={`needs-validation ${submitted ? 'was-validated' : ''}`} onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="projectName" className="text-right">Project Name</label>
            <InputText
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter the project name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="description" className="text-right">Project Description</label>
            <InputTextarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the project"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="technologiesUsed" className="text-right">Technologies Used</label>
            <InputText
              id="technologiesUsed"
              value={technologiesUsed}
              onChange={(e) => setTechnologiesUsed(e.target.value)}
              placeholder="Technologies used in the project"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="role" className="text-right">Your Role</label>
            <InputText
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Your role in the project"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="duration" className="text-right">Duration (months)</label>
            <InputText
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Project duration"
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="teamSize" className="text-right">Team Size</label>
            <InputText
              id="teamSize"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="Size of your team"
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="keyAchievements" className="text-right">Key Achievements</label>
            <InputTextarea
              id="keyAchievements"
              value={keyAchievements}
              onChange={(e) => setKeyAchievements(e.target.value)}
              placeholder="Key achievements in the project"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="challengesFaced" className="text-right">Challenges Faced</label>
            <InputTextarea
              id="challengesFaced"
              value={challengesFaced}
              onChange={(e) => setChallengesFaced(e.target.value)}
              placeholder="Challenges faced during the project"
              rows={3}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="outcomes" className="text-right">Outcomes</label>
            <InputTextarea
              id="outcomes"
              value={outcomes}
              onChange={(e) => setOutcomes(e.target.value)}
              placeholder="Outcomes of the project"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="lessonsLearned" className="text-right">Lessons Learned</label>
            <InputTextarea
              id="lessonsLearned"
              value={lessonsLearned}
              onChange={(e) => setLessonsLearned(e.target.value)}
              placeholder="Lessons learned from the project"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <Checkbox
            inputId="invalidCheck"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.checked)}
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
        
        <Button label="Submit form" type="submit" className="p-button-primary" />
      </form>
    </div>
  );
};

export default FormComponent;
