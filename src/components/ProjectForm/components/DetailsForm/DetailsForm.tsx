import React from 'react';
import { Box, TextField, Typography, Chip } from '@mui/material';
import { DetailsFormProps } from './types';

const DetailsForm: React.FC<DetailsFormProps> = ({ formData, setFormData }) => {
  const handleTechnologyAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, event.currentTarget.value]
      });
      event.currentTarget.value = '';
    }
  };

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

      <Box>
        <Typography variant="h6" gutterBottom>
          Technologies we used*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Press enter after each technology
        </Typography>
        <TextField
          fullWidth
          placeholder="Type and press enter"
          onKeyPress={handleTechnologyAdd}
        />
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              onDelete={() => {
                const newTech = formData.technologies.filter((_, i) => i !== index);
                setFormData({ ...formData, technologies: newTech });
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsForm; 