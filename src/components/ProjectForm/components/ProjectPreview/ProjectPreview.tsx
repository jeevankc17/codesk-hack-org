import React from 'react';
import { Box, Typography, Chip, Button } from '@mui/material';
import { ProjectPreviewProps } from './types';

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  formData,
  hackathonName,
  organizerName,
}) => {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {formData.projectName}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {formData.tagline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Built for {hackathonName} by {formData.builders.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Organized by {organizerName}
        </Typography>
      </Box>

      {formData.coverImage && (
        <Box sx={{ mb: 4 }}>
          <img
            src={URL.createObjectURL(formData.coverImage)}
            alt="Project Cover"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </Box>
      )}

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Problem Statement
        </Typography>
        <Typography variant="body1">{formData.problem}</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Challenges Faced
        </Typography>
        <Typography variant="body1">{formData.challenges}</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.technologies.map((tech, index) => (
            <Chip key={index} label={tech} />
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Platforms
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.platforms.map((platform, index) => (
            <Chip key={index} label={platform} />
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Project Gallery
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
          {formData.pictures.map((pic, index) => (
            <img
              key={index}
              src={URL.createObjectURL(pic)}
              alt={`Project screenshot ${index + 1}`}
              style={{ height: '200px', objectFit: 'cover' }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Links
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.links.map((link, index) => (
            <Button
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              {new URL(link).hostname}
            </Button>
          ))}
        </Box>
      </Box>

      {formData.videoDemo && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Demo Video
          </Typography>
          <iframe
            width="100%"
            height="400"
            src={formData.videoDemo}
            title="Project Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      )}
    </Box>
  );
};

export default ProjectPreview; 