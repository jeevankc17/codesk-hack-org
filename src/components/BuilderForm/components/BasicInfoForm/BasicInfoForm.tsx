import React from 'react';
import { Box, TextField, Typography, Select, MenuItem } from '@mui/material';
import { BasicInfoFormProps } from './types';

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, setFormData }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
    }
  };

  return (
    <Box className="space-y-6">
      <div className="space-y-2">
        <Typography variant="h6">Full Name*</Typography>
        <TextField
          fullWidth
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Email*</Typography>
        <TextField
          fullWidth
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Phone*</Typography>
        <TextField
          fullWidth
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Bio*</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Typography variant="h6">Gender</Typography>
          <Select
            fullWidth
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </div>

        <div className="space-y-2">
          <Typography variant="h6">T-Shirt Size</Typography>
          <Select
            fullWidth
            value={formData.tShirtSize}
            onChange={(e) => setFormData({ ...formData, tShirtSize: e.target.value as any })}
          >
            <MenuItem value="S">Small</MenuItem>
            <MenuItem value="M">Medium</MenuItem>
            <MenuItem value="L">Large</MenuItem>
            <MenuItem value="XL">X-Large</MenuItem>
            <MenuItem value="XXL">XX-Large</MenuItem>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Typography variant="h6">Profile Picture</Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
      </div>
    </Box>
  );
};

export default BasicInfoForm; 