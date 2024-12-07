import React from 'react';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { BasicInfoFormProps } from './types';

export function BasicInfoForm({ data, onChange }: BasicInfoFormProps) {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            FULL NAME
          </label>
          <InfoTooltip text="Your full name as it appears on official documents." />
        </div>
        <input
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            EMAIL ADDRESS
          </label>
          <InfoTooltip text="Your primary email address for communication." />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
          <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
            Verify
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            PHONE NUMBER
          </label>
          <InfoTooltip text="Your contact number for urgent communications." />
        </div>
        <input
          type="tel"
          id="phone"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            YOUR ROLE
          </label>
          <InfoTooltip text="Your position in the organization." />
        </div>
        <select
          id="role"
          value={data.role}
          onChange={(e) => onChange({ role: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select your role</option>
          <option value="founder">Founder/Co-founder</option>
          <option value="director">Director</option>
          <option value="manager">Program Manager</option>
          <option value="coordinator">Event Coordinator</option>
          <option value="faculty">Faculty Member</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
} 