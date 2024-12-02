import React from 'react';
import { InfoTooltip } from '../InfoTooltip';
import { DateTimeInput } from './DateTimeInput';
import { DatesFormProps } from './types';

export function DatesForm({ data, onChange }: DatesFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="timezone"
          className="block text-sm font-medium text-gray-700"
        >
          TIMEZONE
        </label>
        <input
          type="text"
          id="timezone"
          value={data.timezone}
          onChange={(e) => onChange({ timezone: e.target.value })}
          placeholder="Asia/Katmandu"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            APPLICATIONS OPEN
          </label>
          <InfoTooltip text="Don't worry about it too much, you can always extend the application deadline." />
        </div>
        <DateTimeInput
          dateValue={data.applicationOpen.date}
          timeValue={data.applicationOpen.time}
          onDateChange={(date) =>
            onChange({ applicationOpen: { ...data.applicationOpen, date } })
          }
          onTimeChange={(time) =>
            onChange({ applicationOpen: { ...data.applicationOpen, time } })
          }
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          APPLICATIONS CLOSE
        </label>
        <DateTimeInput
          dateValue={data.applicationClose.date}
          timeValue={data.applicationClose.time}
          onDateChange={(date) =>
            onChange({ applicationClose: { ...data.applicationClose, date } })
          }
          onTimeChange={(time) =>
            onChange({ applicationClose: { ...data.applicationClose, time } })
          }
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="rsvpWithin"
            className="block text-sm font-medium text-gray-700"
          >
            RSVP WITHIN (DAYS)
          </label>
          <InfoTooltip text="Enter the number of days selected hackers will have to confirm their presence." />
        </div>
        <input
          type="number"
          id="rsvpWithin"
          value={data.rsvpWithin}
          onChange={(e) => onChange({ rsvpWithin: parseInt(e.target.value) })}
          placeholder="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          HACKATHON BEGINS
        </label>
        <DateTimeInput
          dateValue={data.hackathonBegins.date}
          timeValue={data.hackathonBegins.time}
          onDateChange={(date) =>
            onChange({ hackathonBegins: { ...data.hackathonBegins, date } })
          }
          onTimeChange={(time) =>
            onChange({ hackathonBegins: { ...data.hackathonBegins, time } })
          }
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            SUBMISSION DEADLINE
          </label>
          <InfoTooltip text="Yes, you can extend this deadline later too!" />
        </div>
        <DateTimeInput
          dateValue={data.submissionDeadline.date}
          timeValue={data.submissionDeadline.time}
          onDateChange={(date) =>
            onChange({
              submissionDeadline: { ...data.submissionDeadline, date },
            })
          }
          onTimeChange={(time) =>
            onChange({
              submissionDeadline: { ...data.submissionDeadline, time },
            })
          }
        />
      </div>
    </div>
  );
}
