import React from 'react';
import { InfoTooltip } from '../../../commons/InfoTooltip';
import { ContactInfoFormProps } from './types';

export function ContactInfoForm({ data, onChange }: ContactInfoFormProps) {
  const handleAddressChange = (field: keyof typeof data.address, value: string) => {
    onChange({
      address: {
        ...data.address,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="street" className="block text-sm font-medium text-gray-700">
            STREET ADDRESS
          </label>
          <InfoTooltip text="Your organization's street address." />
        </div>
        <input
          type="text"
          id="street"
          value={data.address.street}
          onChange={(e) => handleAddressChange('street', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="123 Main St, Suite 456"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            CITY
          </label>
          <input
            type="text"
            id="city"
            value={data.address.city}
            onChange={(e) => handleAddressChange('city', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="San Francisco"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            STATE/PROVINCE
          </label>
          <input
            type="text"
            id="state"
            value={data.address.state}
            onChange={(e) => handleAddressChange('state', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="California"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            COUNTRY
          </label>
          <select
            id="country"
            value={data.address.country}
            onChange={(e) => handleAddressChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="IN">India</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            ZIP/POSTAL CODE
          </label>
          <input
            type="text"
            id="zipCode"
            value={data.address.zipCode}
            onChange={(e) => handleAddressChange('zipCode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="94105"
          />
        </div>
      </div>
    </div>
  );
} 