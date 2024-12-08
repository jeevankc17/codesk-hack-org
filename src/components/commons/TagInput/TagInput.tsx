import React, { useState } from 'react';
import { Box, TextField, Typography, Chip } from '@mui/material';

export interface TagInputProps {
  label: string;
  description?: string;
  value: string[];
  onChange: (newTags: string[]) => void;
  placeholder?: string;
  validate?: (value: string) => boolean | string;
  maxTags?: number;
  color?: 'primary' | 'secondary' | 'default';
}

export const TagInput = ({
  label,
  description,
  value,
  onChange,
  placeholder = 'Type and press enter',
  validate,
  maxTags,
  color = 'primary'
}: TagInputProps) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && input.trim()) {
      event.preventDefault();
      const newTag = input.trim();

      if (maxTags && value.length >= maxTags) {
        setError(`Maximum ${maxTags} items allowed`);
        return;
      }

      if (value.includes(newTag)) {
        setError('This item already exists');
        return;
      }

      if (validate) {
        const validationResult = validate(newTag);
        if (typeof validationResult === 'string') {
          setError(validationResult);
          return;
        }
        if (!validationResult) {
          setError('Invalid input');
          return;
        }
      }

      onChange([...value, newTag]);
      setInput('');
      setError(null);
    }
  };

  const handleDelete = (tagToDelete: string) => {
    onChange(value.filter(tag => tag !== tagToDelete));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      )}
      
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(null);
          }}
          onKeyDown={handleAdd}
          placeholder={placeholder}
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {value.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleDelete(tag)}
            color={color}
            sx={{
              '& .MuiChip-deleteIcon': {
                color: 'inherit',
                '&:hover': {
                  opacity: 0.7,
                },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}; 