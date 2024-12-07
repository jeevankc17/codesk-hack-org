import React, { useState } from 'react';
import { Track, Prize } from './types';
import { v4 as uuidv4 } from 'uuid';
import { FormNavigation } from '../../../commons/FormNavigation';

interface PrizesFormProps {
  initialData?: Track[];
  onChange: (tracks: Track[]) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function PrizesForm({
  initialData = [],
  onChange,
  onPrevious,
  onNext,
}: PrizesFormProps) {
  const [tracks, setTracks] = useState<Track[]>(initialData);

  const addTrack = () => {
    const newTrack: Track = {
      id: uuidv4(),
      name: '',
      description: '',
      prizes: [],
    };
    const updatedTracks = [...tracks, newTrack];
    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  const addPrize = (trackId: string) => {
    const newPrize: Prize = {
      id: uuidv4(),
      name: '',
      description: '',
      value: '',
    };

    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        return {
          ...track,
          prizes: [...track.prizes, newPrize],
        };
      }
      return track;
    });

    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  const updateTrack = (trackId: string, field: keyof Track, value: string) => {
    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        return { ...track, [field]: value };
      }
      return track;
    });
    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  const updatePrize = (
    trackId: string,
    prizeId: string,
    field: keyof Prize,
    value: string
  ) => {
    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        const updatedPrizes = track.prizes.map((prize) => {
          if (prize.id === prizeId) {
            return { ...prize, [field]: value };
          }
          return prize;
        });
        return { ...track, prizes: updatedPrizes };
      }
      return track;
    });
    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  const removeTrack = (trackId: string) => {
    const updatedTracks = tracks.filter((track) => track.id !== trackId);
    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  const removePrize = (trackId: string, prizeId: string) => {
    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        return {
          ...track,
          prizes: track.prizes.filter((prize) => prize.id !== prizeId),
        };
      }
      return track;
    });
    setTracks(updatedTracks);
    onChange(updatedTracks);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-medium">Track</h3>
          <button
            onClick={addTrack}
            className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Add Track
          </button>
        </div>

        {tracks.map((track) => (
          <div key={track.id} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Track</h3>
              <button
                onClick={() => removeTrack(track.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove Track
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Track Name"
                value={track.name}
                onChange={(e) => updateTrack(track.id, 'name', e.target.value)}
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Track Description"
                value={track.description}
                onChange={(e) =>
                  updateTrack(track.id, 'description', e.target.value)
                }
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Prizes</h4>
                <button
                  onClick={() => addPrize(track.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Add Prize
                </button>
              </div>

              {track.prizes.map((prize) => (
                <div key={prize.id} className="p-4 border rounded space-y-4">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Prize</h5>
                    <button
                      onClick={() => removePrize(track.id, prize.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove Prize
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Prize Name"
                    value={prize.name}
                    onChange={(e) =>
                      updatePrize(track.id, prize.id, 'name', e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    placeholder="Prize Description"
                    value={prize.description}
                    onChange={(e) =>
                      updatePrize(
                        track.id,
                        prize.id,
                        'description',
                        e.target.value
                      )
                    }
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                  <input
                    type="text"
                    placeholder="Prize Value"
                    value={prize.value}
                    onChange={(e) =>
                      updatePrize(track.id, prize.id, 'value', e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <FormNavigation onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
}
