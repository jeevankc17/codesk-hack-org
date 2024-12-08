import React from 'react';

interface BrandSectionProps {
  brandColor: string;
  logo: File | null;
  favicon: File | null;
  coverImage: File | null;
}

const BrandSection: React.FC<BrandSectionProps> = ({
  brandColor,
  logo,
  favicon,
  coverImage
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Brand Assets</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {logo && (
          <div className="space-y-2">
            <h4 className="font-medium">Logo</h4>
            <img
              src={URL.createObjectURL(logo)}
              alt="Logo"
              className="h-32 w-32 object-contain"
            />
          </div>
        )}
        {favicon && (
          <div className="space-y-2">
            <h4 className="font-medium">Favicon</h4>
            <img
              src={URL.createObjectURL(favicon)}
              alt="Favicon"
              className="h-16 w-16 object-contain"
            />
          </div>
        )}
        <div className="space-y-2">
          <h4 className="font-medium">Brand Color</h4>
          <div 
            className="h-16 w-16 rounded-lg border"
            style={{ backgroundColor: brandColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandSection; 