import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EventType, ScheduleEvent, ScheduleFormProps } from './types';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { Pencil, Trash2 } from 'lucide-react';

export function ScheduleForm({
  initialData = [],
  onChange,
}: ScheduleFormProps) {
  const [events, setEvents] = useState<ScheduleEvent[]>(initialData);
  const [selectedType, setSelectedType] = useState<EventType | null>(null);
  const [editingEvent, setEditingEvent] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addEvent = (type: EventType) => {
    const newEvent: ScheduleEvent = {
      id: uuidv4(),
      type,
      name: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
      isOnline: false,
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setIsFormOpen(true);
  };

  const updateEvent = (id: string, updates: Partial<ScheduleEvent>) => {
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, ...updates } : event
    );
    setEvents(updatedEvents);
    onChange(updatedEvents);
  };

  const removeEvent = (id: string) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    onChange(updatedEvents);
  };

  const getEventsByType = (type: EventType) =>
    events.filter((event) => event.type === type);

  const handleTypeSelect = (type: EventType) => {
    if (isFormOpen) {
      if (!confirm('You have unsaved changes. Do you want to continue?')) {
        return;
      }
    }
    setSelectedType(type);
    addEvent(type);
  };

  const handleEdit = (eventId: string) => {
    if (isFormOpen) {
      if (!confirm('You have unsaved changes. Do you want to continue?')) {
        return;
      }
    }
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setSelectedType(event.type);
      setEditingEvent(eventId);
      setIsFormOpen(true);
    }
  };

  const handleApply = () => {
    onChange(events);
    setSelectedType(null);
    setEditingEvent(null);
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    if (editingEvent) {
      // Revert changes if editing
      setEvents(initialData);
    } else {
      // Remove the last added event if adding new
      setEvents(events.slice(0, -1));
    }
    setSelectedType(null);
    setEditingEvent(null);
    setIsFormOpen(false);
  };

  const renderEventList = (type: EventType) => {
    const typeEvents = events.filter((event) => event.type === type);
    if (typeEvents.length === 0) return null;

    return (
      <div className="space-y-2">
        <h3 className="text-lg font-medium">
          {type === 'pre'
            ? 'Pre-Event'
            : type === 'in'
            ? 'In-Event'
            : 'Post-Event'}{' '}
          Activities
        </h3>
        <div className="space-y-2">
          {typeEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-3 bg-white border rounded-lg"
            >
              <div className="flex-1">
                <h4 className="font-medium">{event.name}</h4>
                <p className="text-sm text-gray-600">
                  {event.date} • {event.startTime} - {event.endTime}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEdit(event.id)}
                  className="p-1 text-gray-600 hover:text-blue-600"
                  title="Edit"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeEvent(event.id)}
                  className="p-1 text-gray-600 hover:text-red-600"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Show type selection and event list when no form is open */}
      {!isFormOpen && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleTypeSelect('pre')}
              className="p-6 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="text-lg font-medium mb-2">Pre-Event</h3>
              <p className="text-sm text-gray-600">
                Add activities before the main hackathon
              </p>
            </button>
            <button
              onClick={() => handleTypeSelect('in')}
              className="p-6 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="text-lg font-medium mb-2">In-Event</h3>
              <p className="text-sm text-gray-600">
                Add activities during the hackathon
              </p>
            </button>
            <button
              onClick={() => handleTypeSelect('post')}
              className="p-6 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
            >
              <h3 className="text-lg font-medium mb-2">Post-Event</h3>
              <p className="text-sm text-gray-600">
                Add activities after the hackathon
              </p>
            </button>
          </div>

          <div className="space-y-6">
            {renderEventList('pre')}
            {renderEventList('in')}
            {renderEventList('post')}
          </div>
        </>
      )}

      {/* Show form when adding/editing */}
      {isFormOpen && selectedType && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">
                {selectedType === 'pre'
                  ? 'Pre-Event'
                  : selectedType === 'in'
                  ? 'In-Event'
                  : 'Post-Event'}{' '}
                Activity
              </h2>
              <InfoTooltip
                text={`Add ${selectedType}-event activity for your hackathon`}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          {getEventsByType(selectedType).map((event) =>
            event.id === editingEvent ||
            (!editingEvent && event.id === events[events.length - 1].id) ? (
              <div
                key={event.id}
                className="p-4 border rounded-lg space-y-4 bg-white"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Activity Details</h4>
                  <button
                    onClick={() => removeEvent(event.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Activity Name"
                    value={event.name}
                    onChange={(e) =>
                      updateEvent(event.id, { name: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />

                  <textarea
                    placeholder="Activity Description"
                    value={event.description}
                    onChange={(e) =>
                      updateEvent(event.id, { description: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                    rows={3}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        value={event.date}
                        onChange={(e) =>
                          updateEvent(event.id, { date: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Start Time
                      </label>
                      <input
                        type="time"
                        value={event.startTime}
                        onChange={(e) =>
                          updateEvent(event.id, { startTime: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        End Time
                      </label>
                      <input
                        type="time"
                        value={event.endTime}
                        onChange={(e) =>
                          updateEvent(event.id, { endTime: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={event.isOnline}
                        onChange={(e) =>
                          updateEvent(event.id, { isOnline: e.target.checked })
                        }
                        className="h-4 w-4 text-blue-600 rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        Online Activity
                      </span>
                    </label>

                    {event.isOnline && (
                      <input
                        type="url"
                        placeholder="Meeting Link"
                        value={event.meetLink || ''}
                        onChange={(e) =>
                          updateEvent(event.id, { meetLink: e.target.value })
                        }
                        className="flex-1 p-2 border rounded"
                      />
                    )}

                    {!event.isOnline && (
                      <input
                        type="text"
                        placeholder="Location"
                        value={event.location || ''}
                        onChange={(e) =>
                          updateEvent(event.id, { location: e.target.value })
                        }
                        className="flex-1 p-2 border rounded"
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
