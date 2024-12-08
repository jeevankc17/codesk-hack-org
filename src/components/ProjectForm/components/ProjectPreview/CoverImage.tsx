import React from 'react';
import { CoverImageProps } from './types';

const CoverImage: React.FC<CoverImageProps> = ({ imageUrl, projectName }) => {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={`${projectName} cover`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          aria-hidden="true"
        />
      </div>
      
      {/* Optional: Add project info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <h1 className="text-4xl font-bold mb-2">
          {projectName}
        </h1>
      </div>
    </div>
  );
};

export default CoverImage; 