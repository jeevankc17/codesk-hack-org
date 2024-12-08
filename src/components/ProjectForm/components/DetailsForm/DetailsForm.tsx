import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { DetailsFormProps } from './types';
import { TagInput } from '../../../commons/TagInput';

const DetailsForm: React.FC<DetailsFormProps> = ({ formData, setFormData }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          The problem it solves*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Describe what can people use it for, or how it makes existing tasks easier/safer
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={formData.problem}
          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Challenges we ran into*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Tell us about any specific bug or hurdle you ran into while building this project
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={formData.challenges}
          onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
        />
      </Box>

      <TagInput
        label="Technologies we used*"
        description="Press enter after each technology"
        value={formData.technologies}
        onChange={(newTechnologies) => setFormData({ ...formData, technologies: newTechnologies })}
        placeholder="Type technology and press enter"
        color="primary"
      />
    </Box>
  );
};

export default DetailsForm; 