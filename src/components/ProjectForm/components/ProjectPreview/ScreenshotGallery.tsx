import React, { useState } from 'react';
import { ScreenshotGalleryProps } from './types';
import { X } from 'lucide-react';

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (screenshots.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className="group aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 cursor-pointer relative"
            onClick={() => setSelectedImage(screenshot.url)}
          >
            <img
              src={screenshot.url}
              alt={screenshot.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Screenshot preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery; 