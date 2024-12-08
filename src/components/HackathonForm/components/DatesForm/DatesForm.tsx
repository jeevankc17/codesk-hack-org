import React from 'react';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { DateTimePicker } from '../../../commons/DateTimePicker';
import { DatesFormProps } from './types';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// Add a list of common timezones
const TIMEZONES = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Dubai',
  'Asia/Shanghai',
  'Australia/Sydney',
  'Pacific/Auckland'
];

export function DatesForm({ data, onChange }: DatesFormProps) {
  const handleDateChange = (field: string, date: Date | null) => {
    if (date) {
      onChange({
        [field]: {
          date: date.toISOString().split('T')[0],
          time: date.toTimeString().split(' ')[0].slice(0, 5)
        }
      });
    }
  };

  const getDateTimeValue = (date: string, time: string) => {
    if (!date) return null;
    const dateTime = new Date(date);
    if (time) {
      const [hours, minutes] = time.split(':');
      dateTime.setHours(parseInt(hours), parseInt(minutes));
    }
    return dateTime;
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="block text-sm font-medium text-gray-700">
            TIMEZONE
          </label>
          <InfoTooltip text="Select the timezone for your hackathon" />
        </div>
        <FormControl fullWidth size="small">
          <InputLabel>Select Timezone</InputLabel>
          <Select
            value={data.timezone}
            onChange={(e) => onChange({ timezone: e.target.value })}
            label="Select Timezone"
          >
            {TIMEZONES.map((timezone) => (
              <MenuItem key={timezone} value={timezone}>
                {timezone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Applications Open <InfoTooltip text="When will applications open for your hackathon?" />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <DateTimePicker
              label=""
              value={getDateTimeValue(data.applicationOpen.date, data.applicationOpen.time)}
              onChange={(date) => handleDateChange('applicationOpen', date)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Applications Close <InfoTooltip text="When will applications close?" />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <DateTimePicker
              label=""
              value={getDateTimeValue(data.applicationClose.date, data.applicationClose.time)}
              onChange={(date) => handleDateChange('applicationClose', date)}
              minDate={getDateTimeValue(data.applicationOpen.date, data.applicationOpen.time) || undefined}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              RSVP WITHIN (DAYS)* <InfoTooltip text="Number of days participants have to confirm their attendance" />
            </label>
          </div>
          <TextField
            type="number"
            value={data.rsvpWithin}
            onChange={(e) => onChange({ rsvpWithin: parseInt(e.target.value) })}
            size="small"
            fullWidth
            inputProps={{ min: 1, max: 30 }}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Hackathon Begins* <InfoTooltip text="When does your hackathon start?" />
            </label>
          </div>
          <DateTimePicker
            label=""
            value={getDateTimeValue(data.hackathonBegins.date, data.hackathonBegins.time)}
            onChange={(date) => handleDateChange('hackathonBegins', date)}
            minDate={getDateTimeValue(data.applicationClose.date, data.applicationClose.time) || undefined}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              Submission Deadline* <InfoTooltip text="When do submissions close?" />
            </label>
          </div>
          <DateTimePicker
            label=""
            value={getDateTimeValue(data.submissionDeadline.date, data.submissionDeadline.time)}
            onChange={(date) => handleDateChange('submissionDeadline', date)}
            minDate={getDateTimeValue(data.hackathonBegins.date, data.hackathonBegins.time) || undefined}
            required
          />
        </div>
      </div>
    </div>
  );
}
