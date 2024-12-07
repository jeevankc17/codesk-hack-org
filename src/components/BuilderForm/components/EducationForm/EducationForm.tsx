import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { EducationFormProps } from './types';

const EducationForm: React.FC<EducationFormProps> = ({ formData, setFormData }) => {
  const handleEducationChange = (field: keyof typeof formData.education, value: string | number) => {
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [field]: value
      }
    });
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Institution Name*</Typography>
        <TextField
          fullWidth
          value={formData.education.institution}
          onChange={(e) => handleEducationChange('institution', e.target.value)}
          placeholder="University/College Name"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Degree*</Typography>
        <TextField
          fullWidth
          value={formData.education.degree}
          onChange={(e) => handleEducationChange('degree', e.target.value)}
          placeholder="e.g., Bachelor of Science"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Field of Study*</Typography>
        <TextField
          fullWidth
          value={formData.education.fieldOfStudy}
          onChange={(e) => handleEducationChange('fieldOfStudy', e.target.value)}
          placeholder="e.g., Computer Science"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Graduation Year*</Typography>
        <TextField
          fullWidth
          type="number"
          value={formData.education.graduationYear}
          onChange={(e) => handleEducationChange('graduationYear', parseInt(e.target.value))}
          inputProps={{ min: 1900, max: new Date().getFullYear() + 5 }}
        />
      </div>
    </Box>
  );
};

export default EducationForm; 