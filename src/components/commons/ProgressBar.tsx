import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-gray-100 rounded-full h-6 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-500 ease-out flex items-center justify-center text-white text-sm font-medium"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}