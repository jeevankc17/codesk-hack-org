import React from 'react';
import { Speaker } from '../SpeakersForm/types';

interface SpeakersListProps {
  speakers: Speaker[];
}

const SpeakersList: React.FC<SpeakersListProps> = ({ speakers }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Speakers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="text-center space-y-2">
            {speaker.photo && (
              <img
                src={URL.createObjectURL(speaker.photo)}
                alt={speaker.name}
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
            )}
            <div>
              <h4 className="font-medium">{speaker.name}</h4>
              <p className="text-sm text-gray-600">{speaker.designation}</p>
              {speaker.organization && (
                <p className="text-sm text-gray-500">{speaker.organization}</p>
              )}
            </div>
            {speaker.bio && (
              <p className="text-sm text-gray-600 line-clamp-3">{speaker.bio}</p>
            )}
            <div className="flex justify-center gap-2">
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              )}
              {speaker.twitter && (
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersList; 