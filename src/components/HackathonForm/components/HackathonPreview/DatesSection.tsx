import React from 'react';
import { DatesConfig } from '../../types';

interface DatesSectionProps {
  dates: DatesConfig;
}

const DatesSection: React.FC<DatesSectionProps> = ({ dates }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium text-gray-600">Applications Open</h4>
          <p className="mt-1">
            {dates.applicationOpen.date} {dates.applicationOpen.time}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium text-gray-600">Applications Close</h4>
          <p className="mt-1">
            {dates.applicationClose.date} {dates.applicationClose.time}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium text-gray-600">Hackathon Begins</h4>
          <p className="mt-1">
            {dates.hackathonBegins.date} {dates.hackathonBegins.time}
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium text-gray-600">Submission Deadline</h4>
          <p className="mt-1">
            {dates.submissionDeadline.date} {dates.submissionDeadline.time}
          </p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Timezone: {dates.timezone}</p>
        <p>RSVP Window: {dates.rsvpWithin} days</p>
      </div>
    </div>
  );
};

export default DatesSection; 