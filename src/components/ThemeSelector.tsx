import React from 'react';

const themes = [
  { id: 'no-restrictions', label: 'No Restrictions' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'design', label: 'Design' },
  { id: 'fintech', label: 'FinTech' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'healthtech', label: 'HealthTech' },
  { id: 'vr-ar', label: 'VR/AR' },
  { id: 'future-mobility', label: 'Future Mobility' },
  { id: 'iot-hardware', label: 'IoT/Hardware' },
];

interface ThemeSelectorProps {
  selectedThemes: string[];
  onChange: (themes: string[]) => void;
  maxSelections?: number;
}

export function ThemeSelector({ selectedThemes, onChange, maxSelections = 3 }: ThemeSelectorProps) {
  const toggleTheme = (themeId: string) => {
    if (selectedThemes.includes(themeId)) {
      onChange(selectedThemes.filter((id) => id !== themeId));
    } else if (selectedThemes.length < maxSelections) {
      onChange([...selectedThemes, themeId]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => toggleTheme(theme.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedThemes.includes(theme.id)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          disabled={!selectedThemes.includes(theme.id) && selectedThemes.length >= maxSelections}
        >
          {theme.label}
        </button>
      ))}
    </div>
  );
}