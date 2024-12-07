import React from 'react';
import { Box, TextField, Typography, Chip, FormControlLabel, Checkbox } from '@mui/material';
import { MediaLinksFormProps, FileUploadType } from './types';

const PLATFORMS = ['Web', 'MacOS', 'Android', 'iOS'];

const MediaLinksForm: React.FC<MediaLinksFormProps> = ({ formData, setFormData }) => {
  const handleLinkAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      setFormData({
        ...formData,
        links: [...formData.links, event.currentTarget.value]
      });
      event.currentTarget.value = '';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: FileUploadType) => {
    const files = event.target.files;
    if (!files) return;

    if (type === 'pictures') {
      const newPictures = Array.from(files).slice(0, 5 - formData.pictures.length);
      setFormData({
        ...formData,
        pictures: [...formData.pictures, ...newPictures]
      });
    } else {
      setFormData({
        ...formData,
        [type]: files[0]
      });
    }
  };

  const handlePlatformToggle = (platform: string) => {
    const newPlatforms = formData.platforms.includes(platform)
      ? formData.platforms.filter(p => p !== platform)
      : [...formData.platforms, platform];
    setFormData({ ...formData, platforms: newPlatforms });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Links*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Add links to Github, website, App store etc.
        </Typography>
        <TextField
          fullWidth
          placeholder="Type link and press enter"
          onKeyPress={handleLinkAdd}
        />
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.links.map((link, index) => (
            <Chip
              key={index}
              label={link}
              onDelete={() => {
                const newLinks = formData.links.filter((_, i) => i !== index);
                setFormData({ ...formData, links: newLinks });
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Video Demo*
        </Typography>
        <TextField
          fullWidth
          placeholder="Add link to video demo"
          value={formData.videoDemo}
          onChange={(e) => setFormData({ ...formData, videoDemo: e.target.value })}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Cover Image*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Size: Max 1MB, Recommended Dimensions: 1200x630
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, 'coverImage')}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Project Pictures
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Upload up to 5 pictures (Size: Max 1MB each)
        </Typography>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileUpload(e, 'pictures')}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Project Logo*
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Size: Max 1MB
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, 'logo')}
        />
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Platforms*
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {PLATFORMS.map((platform) => (
            <FormControlLabel
              key={platform}
              control={
                <Checkbox
                  checked={formData.platforms.includes(platform)}
                  onChange={() => handlePlatformToggle(platform)}
                />
              }
              label={platform}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MediaLinksForm; 