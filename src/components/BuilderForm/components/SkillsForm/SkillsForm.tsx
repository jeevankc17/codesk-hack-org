import React from 'react';
import { Box, TextField, Typography, Chip } from '@mui/material';
import { SkillsFormProps } from './types';

const SkillsForm: React.FC<SkillsFormProps> = ({ formData, setFormData }) => {
  const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      const newSkill = event.currentTarget.value.trim();
      if (!formData.skills.includes(newSkill)) {
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill]
        });
      }
      event.currentTarget.value = '';
    }
  };

  const handleSkillDelete = (skillToDelete: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToDelete)
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
    }
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Skills*</Typography>
        <Typography variant="body2" color="text.secondary">
          Press enter after each skill
        </Typography>
        <TextField
          fullWidth
          placeholder="e.g., React, TypeScript, Node.js"
          onKeyPress={handleSkillAdd}
        />
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleSkillDelete(skill)}
            />
          ))}
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Experience*</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          placeholder="Describe your relevant experience..."
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Portfolio URL</Typography>
        <TextField
          fullWidth
          type="url"
          value={formData.portfolioUrl}
          onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
          placeholder="https://your-portfolio.com"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Resume</Typography>
        <Typography variant="body2" color="text.secondary">
          Upload your resume (PDF format recommended)
        </Typography>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full"
        />
      </div>
    </Box>
  );
};

export default SkillsForm; 