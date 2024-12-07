import React from 'react';
import { FormNavigationProps } from './types';

export const FormNavigation: React.FC<FormNavigationProps> = ({ 
  onPrevious, 
  onNext, 
  nextLabel = 'Next', 
  nextDisabled = false 
}) => {
  return (
    <div className="flex justify-between">
      <button onClick={onPrevious} className="px-4 py-2 text-gray-600">
        Previous
      </button>
      <button 
        onClick={onNext} 
        disabled={nextDisabled}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  );
}; 