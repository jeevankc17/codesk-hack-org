import React from 'react';
import { InfoTooltip } from './InfoTooltip';
import { ThemeSelector } from './ThemeSelector';

interface BasicsFormData {
  name: string;
  tagline: string;
  about: string;
  themes: string[];
  approxParticipants: number;
  minTeamSize: number;
  maxTeamSize: number;
  venue: string;
}

interface BasicsFormProps {
  data: BasicsFormData;
  onChange: (data: Partial<BasicsFormData>) => void;
}

export function BasicsForm({ data, onChange }: BasicsFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            NAME
          </label>
          <InfoTooltip text="This is the name of your hackathon. You cannot change this after finishing the setup." />
        </div>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Hackathons"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="tagline"
          className="block text-sm font-medium text-gray-700"
        >
          TAGLINE
        </label>
        <input
          type="text"
          id="tagline"
          value={data.tagline}
          onChange={(e) => onChange({ tagline: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Nepal's biggest hackathon"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            ABOUT
          </label>
          <InfoTooltip text="Provide a detailed description of your hackathon." />
        </div>
        <textarea
          id="about"
          value={data.about}
          onChange={(e) => onChange({ about: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          THEME (SELECT UPTO 3)
        </label>
        <ThemeSelector
          selectedThemes={data.themes}
          onChange={(themes) => onChange({ themes })}
          maxSelections={3}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="approxParticipants"
            className="block text-sm font-medium text-gray-700"
          >
            APPROX. PARTICIPANTS
          </label>
          <InfoTooltip text="Estimated number of participants expected to join." />
        </div>
        <input
          type="number"
          id="approxParticipants"
          value={data.approxParticipants}
          onChange={(e) =>
            onChange({ approxParticipants: parseInt(e.target.value) })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. 240"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="minTeamSize"
            className="block text-sm font-medium text-gray-700"
          >
            MIN. TEAM SIZE ALLOWED
          </label>
          <input
            type="number"
            id="minTeamSize"
            value={data.minTeamSize}
            onChange={(e) =>
              onChange({ minTeamSize: parseInt(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 2"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="maxTeamSize"
            className="block text-sm font-medium text-gray-700"
          >
            MAX. TEAM SIZE ALLOWED
          </label>
          <input
            type="number"
            id="maxTeamSize"
            value={data.maxTeamSize}
            onChange={(e) =>
              onChange({ maxTeamSize: parseInt(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. 4"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="venue"
            className="block text-sm font-medium text-gray-700"
          >
            Venue
          </label>
          <InfoTooltip text="Please provide detailed address of the venue where the hackathon is happening. You will be allowed to change the venue later." />
        </div>
        <input
          type="text"
          id="venue"
          value={data.venue}
          onChange={(e) => onChange({ venue: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Palace of the Fine Arts, San Francisco, California"
        />
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Previous Tab
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Next Tab
        </button>
      </div>
    </div>
  );
}
