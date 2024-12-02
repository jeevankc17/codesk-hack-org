import React from 'react';

interface DateTimeInputProps {
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  placeholder?: {
    date?: string;
    time?: string;
  };
}

export function DateTimeInput({
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  placeholder,
}: DateTimeInputProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={dateValue}
        onChange={(e) => onDateChange(e.target.value)}
        placeholder={placeholder?.date || 'DD/MM/YYYY'}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
      <input
        type="text"
        value={timeValue}
        onChange={(e) => onTimeChange(e.target.value)}
        placeholder={placeholder?.time || 'HH:MM(24hrs)'}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}
