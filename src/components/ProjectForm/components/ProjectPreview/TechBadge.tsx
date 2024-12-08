import React from 'react';
import { TechBadgeProps } from './types';

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const getTechColor = (tech: string): string => {
    const techLower = tech.toLowerCase();
    
    // Frontend
    if (techLower.includes('react') || techLower.includes('vue') || techLower.includes('angular')) {
      return 'bg-blue-50 text-blue-700';
    }
    // Backend
    if (techLower.includes('node') || techLower.includes('express') || techLower.includes('django')) {
      return 'bg-green-50 text-green-700';
    }
    // Database
    if (techLower.includes('sql') || techLower.includes('mongo') || techLower.includes('postgres')) {
      return 'bg-yellow-50 text-yellow-700';
    }
    // Mobile
    if (techLower.includes('ios') || techLower.includes('android') || techLower.includes('flutter')) {
      return 'bg-purple-50 text-purple-700';
    }
    // Cloud
    if (techLower.includes('aws') || techLower.includes('azure') || techLower.includes('cloud')) {
      return 'bg-indigo-50 text-indigo-700';
    }
    // AI/ML
    if (techLower.includes('ai') || techLower.includes('ml') || techLower.includes('tensorflow')) {
      return 'bg-red-50 text-red-700';
    }
    // Default
    return 'bg-gray-50 text-gray-700';
  };

  return (
    <span 
      className={`
        px-4 py-1.5 rounded-full text-sm font-medium
        ${getTechColor(name)}
        transition-all duration-200
        hover:shadow-sm hover:scale-105
      `}
    >
      {name}
    </span>
  );
};

export default TechBadge; 