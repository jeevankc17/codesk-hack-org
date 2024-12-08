import React from 'react';
import { FormNavigationProps } from './types';

export const FormNavigation = ({ 
  onPrevious, 
  onNext,
  previousLabel = 'Previous',
  nextLabel = 'Next'
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between">
      <button 
        onClick={onPrevious}
        className="px-4 py-2 text-gray-600"
      >
        {previousLabel}
      </button>
      <button 
        onClick={onNext}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {nextLabel}
      </button>
    </div>
  );
}; 