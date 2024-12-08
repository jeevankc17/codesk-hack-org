import React from 'react';
import { Track } from '../PrizesForm/types';

interface PrizeSectionProps {
  tracks: Track[];
}

const PrizeSection: React.FC<PrizeSectionProps> = ({ tracks }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Prizes & Tracks</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track) => (
          <div key={track.id} className="border rounded-lg p-4">
            <h4 className="font-medium text-lg mb-2">{track.name}</h4>
            <p className="text-gray-600 mb-4">{track.description}</p>
            <div className="space-y-3">
              {track.prizes.map((prize) => (
                <div key={prize.id} className="bg-gray-50 p-3 rounded">
                  <div className="font-medium">{prize.name}</div>
                  <div className="text-sm text-gray-600">{prize.description}</div>
                  {prize.value && (
                    <div className="text-sm font-medium text-green-600 mt-1">
                      Value: {prize.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeSection; 