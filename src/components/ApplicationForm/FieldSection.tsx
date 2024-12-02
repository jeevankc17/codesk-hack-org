import React from 'react';
import { FormField } from './types';
import { Checkbox } from '../ui/Checkbox';

interface FieldSectionProps {
  title: string;
  fields: FormField[];
  selectedFields: string[];
  onToggleField: (fieldId: string) => void;
}

export function FieldSection({ title, fields, selectedFields, onToggleField }: FieldSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700 uppercase">{title}</h3>
      <div className="space-y-2">
        {fields.map((field) => (
          <div key={field.id} className="flex items-center">
            <Checkbox
              id={field.id}
              checked={selectedFields.includes(field.id)}
              onChange={() => onToggleField(field.id)}
              disabled={field.required}
            />
            <label
              htmlFor={field.id}
              className="ml-2 text-sm text-gray-700"
            >
              {field.label}
              {field.required && (
                <span className="ml-1 text-blue-500">*</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}