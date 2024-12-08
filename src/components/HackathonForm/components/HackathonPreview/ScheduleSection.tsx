import React from 'react';
import { ScheduleEvent } from '../ScheduleForm/types';

interface ScheduleSectionProps {
  events: ScheduleEvent[];
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ events }) => {
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, ScheduleEvent[]>);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Schedule</h3>
      <div className="space-y-6">
        {Object.entries(groupedEvents).map(([date, dayEvents]) => (
          <div key={date}>
            <h4 className="font-medium mb-3">{date}</h4>
            <div className="space-y-3">
              {dayEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium">{event.name}</h5>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.startTime} - {event.endTime}
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    {event.isOnline ? (
                      <span className="text-blue-600">Online Event</span>
                    ) : (
                      <span className="text-gray-600">{event.location}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection; 