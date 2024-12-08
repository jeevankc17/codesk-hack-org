import React from 'react';

interface HackathonHeaderProps {
  name: string;
  tagline: string;
  logoUrl: string | null;
  brandColor: string;
}

const HackathonHeader: React.FC<HackathonHeaderProps> = ({
  name,
  tagline,
  logoUrl,
  brandColor
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        {logoUrl && (
          <img
            src={logoUrl}
            alt={name}
            className="w-16 h-16 object-contain rounded-lg"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold" style={{ color: brandColor }}>
            {name}
          </h1>
          <p className="text-gray-600 mt-1">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonHeader; 