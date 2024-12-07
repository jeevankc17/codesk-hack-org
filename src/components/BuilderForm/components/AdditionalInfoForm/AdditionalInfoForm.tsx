import React from 'react';
import { Box, TextField, Typography, Chip } from '@mui/material';
import { AdditionalInfoFormProps } from './types';

const AdditionalInfoForm: React.FC<AdditionalInfoFormProps> = ({ formData, setFormData }) => {
  const handleInterestAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      const newInterest = event.currentTarget.value.trim();
      if (!formData.interests.includes(newInterest)) {
        setFormData({
          ...formData,
          interests: [...formData.interests, newInterest]
        });
      }
      event.currentTarget.value = '';
    }
  };

  const handleInterestDelete = (interestToDelete: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(interest => interest !== interestToDelete)
    });
  };

  const handleEmergencyContactChange = (field: keyof typeof formData.emergencyContact, value: string) => {
    setFormData({
      ...formData,
      emergencyContact: {
        ...formData.emergencyContact,
        [field]: value
      }
    });
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Interests</Typography>
        <Typography variant="body2" color="text.secondary">
          Press enter after each interest
        </Typography>
        <TextField
          fullWidth
          placeholder="e.g., AI, Blockchain, Web Development"
          onKeyPress={handleInterestAdd}
        />
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.interests.map((interest) => (
            <Chip
              key={interest}
              label={interest}
              onDelete={() => handleInterestDelete(interest)}
            />
          ))}
        </Box>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Dietary Restrictions</Typography>
        <TextField
          fullWidth
          multiline
          rows={2}
          value={formData.dietaryRestrictions}
          onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
          placeholder="Any dietary restrictions or preferences"
        />
      </div>

      <div className="space-y-4">
        <Typography variant="h6">Emergency Contact</Typography>
        <div className="space-y-4">
          <TextField
            fullWidth
            label="Full Name"
            value={formData.emergencyContact.name}
            onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
            placeholder="Emergency contact's full name"
          />
          <TextField
            fullWidth
            label="Relationship"
            value={formData.emergencyContact.relationship}
            onChange={(e) => handleEmergencyContactChange('relationship', e.target.value)}
            placeholder="e.g., Parent, Spouse, Sibling"
          />
          <TextField
            fullWidth
            label="Phone Number"
            value={formData.emergencyContact.phone}
            onChange={(e) => handleEmergencyContactChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>
    </Box>
  );
};

export default AdditionalInfoForm; 