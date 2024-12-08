import React from 'react';
import { Box, TextField, Typography, Chip, FormControlLabel, Checkbox } from '@mui/material';
import { MediaLinksFormProps, FileUploadType } from './types';
import { TagInput } from '../../../commons/TagInput';
import { Video, Plus } from 'lucide-react';

const PLATFORMS = ['Web', 'MacOS', 'Android', 'iOS'];

const MediaLinksForm: React.FC<MediaLinksFormProps> = ({ formData, setFormData }) => {
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

  const handleLoomClick = () => {
    window.open('https://www.loom.com/record', '_blank');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TagInput
        label="Links*"
        description="Add links to Github, website, App store etc."
        value={formData.links}
        onChange={(newLinks) => setFormData({ ...formData, links: newLinks })}
        placeholder="Enter URL and press enter"
        validate={(url) => {
          try {
            new URL(url);
            return true;
          } catch {
            return 'Please enter a valid URL';
          }
        }}
      />

      <Box>
        <Typography variant="h6" gutterBottom>
          Video Demo*
        </Typography>
        <div className="space-y-4">
          <TextField
            fullWidth
            placeholder="Paste video URL here"
            value={formData.videoDemo}
            onChange={(e) => setFormData({ ...formData, videoDemo: e.target.value })}
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-500">or</span>
            <button
              onClick={handleLoomClick}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Record with Loom
            </button>
          </div>
        </div>
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