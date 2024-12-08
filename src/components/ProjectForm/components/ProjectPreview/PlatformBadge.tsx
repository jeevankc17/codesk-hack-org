import React from 'react';
import { PlatformBadgeProps } from './types';

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ name }) => {
  // Platform-specific colors
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'web':
        return 'bg-blue-50 text-blue-700';
      case 'android':
        return 'bg-green-50 text-green-700';
      case 'ios':
        return 'bg-gray-50 text-gray-700';
      case 'macos':
        return 'bg-purple-50 text-purple-700';
      default:
        return 'bg-blue-50 text-blue-700';
    }
  };

  return (
    <span className={`px-4 py-1.5 ${getPlatformColor(name)} rounded-full text-sm font-medium`}>
      {name}
    </span>
  );
};

export default PlatformBadge; 