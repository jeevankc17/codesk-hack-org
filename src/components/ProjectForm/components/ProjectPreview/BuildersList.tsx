import React from 'react';
import { BuildersListProps } from './types';

const BuildersList: React.FC<BuildersListProps> = ({ builders }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {builders.map((builder, index) => (
        <div key={index} className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${builder}`}
            alt={builder}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
          />
          <div className="text-gray-900 font-medium">{builder}</div>
        </div>
      ))}
    </div>
  );
};

export default BuildersList; 