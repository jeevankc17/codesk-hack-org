import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { BasicInfoFormProps } from './types';

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, setFormData }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Project Name*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          What are you calling it?
        </Typography>
        <TextField
          fullWidth
          value={formData.projectName}
          onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Tagline*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Write a short, sharp and on point description of your project
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={2}
          value={formData.tagline}
          onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
        />
      </Box>
    </Box>
  );
};

export default BasicInfoForm; 