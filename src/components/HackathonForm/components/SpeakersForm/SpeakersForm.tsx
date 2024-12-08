import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Speaker } from './types';
import { FormNavigation } from '../../../commons/FormNavigation';

interface SpeakersFormProps {
  initialData: Speaker[];
  onChange: (speakers: Speaker[]) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function SpeakersForm({
  initialData = [],
  onChange,
  onPrevious,
  onNext,
}: SpeakersFormProps) {
  const [speakers, setSpeakers] = useState<Speaker[]>(initialData);

  const addSpeaker = () => {
    const newSpeaker: Speaker = {
      id: uuidv4(),
      name: '',
      designation: '',
      organization: '',
      bio: '',
      photo: null,
      linkedin: '',
      twitter: '',
      website: '',
      socialLinks: {
        twitter: '',
        farcaster: '',
        linkedin: '',
        instagram: ''
      },
      isFeatured: false
    };
    const updatedSpeakers = [...speakers, newSpeaker];
    setSpeakers(updatedSpeakers);
    onChange(updatedSpeakers);
  };

  const updateSpeaker = (id: string, field: keyof Speaker, value: any) => {
    const updatedSpeakers = speakers.map((speaker) => {
      if (speaker.id === id) {
        if (field === 'socialLinks') {
          return {
            ...speaker,
            socialLinks: { ...speaker.socialLinks, ...value },
          };
        }
        return { ...speaker, [field]: value };
      }
      return speaker;
    });
    setSpeakers(updatedSpeakers);
    onChange(updatedSpeakers);
  };

  const removeSpeaker = (id: string) => {
    const updatedSpeakers = speakers.filter((speaker) => speaker.id !== id);
    setSpeakers(updatedSpeakers);
    onChange(updatedSpeakers);
  };

  const handleFileChange = (id: string, file: File | null) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      if (!file.type.match(/image\/(png|jpeg)/)) {
        alert('Only PNG and JPG files are allowed');
        return;
      }

      updateSpeaker(id, 'photo', file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-start mb-4">
        <button
          onClick={addSpeaker}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Speaker
        </button>
      </div>

      {speakers.map((speaker) => (
        <div key={speaker.id} className="p-6 border rounded-lg space-y-4 bg-white">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Speaker</h3>
            <button
              onClick={() => removeSpeaker(speaker.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                value={speaker.name}
                onChange={(e) => updateSpeaker(speaker.id, 'name', e.target.value)}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Designation *</label>
              <input
                type="text"
                value={speaker.designation}
                onChange={(e) => updateSpeaker(speaker.id, 'designation', e.target.value)}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Organization & Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Organization</label>
              <input
                type="text"
                value={speaker.organization || ''}
                onChange={(e) => updateSpeaker(speaker.id, 'organization', e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input
                type="url"
                value={speaker.website || ''}
                onChange={(e) => updateSpeaker(speaker.id, 'website', e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="url"
                value={speaker.socialLinks.twitter || ''}
                onChange={(e) => updateSpeaker(speaker.id, 'socialLinks', { twitter: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                value={speaker.socialLinks.linkedin || ''}
                onChange={(e) => updateSpeaker(speaker.id, 'socialLinks', { linkedin: e.target.value })}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={speaker.bio || ''}
              onChange={(e) => updateSpeaker(speaker.id, 'bio', e.target.value)}
              className="mt-1 w-full p-2 border rounded"
              rows={3}
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo (Recommended: 400x400, max 5MB)
            </label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                handleFileChange(speaker.id, file);
              }}
              className="mt-1 w-full"
            />
            {speaker.photo && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(speaker.photo)}
                  alt={speaker.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
            )}
          </div>

          {/* Featured Speaker */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={speaker.isFeatured}
              onChange={(e) => updateSpeaker(speaker.id, 'isFeatured', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label className="ml-2 text-sm text-gray-700">Feature this speaker</label>
          </div>
        </div>
      ))}

      <FormNavigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
