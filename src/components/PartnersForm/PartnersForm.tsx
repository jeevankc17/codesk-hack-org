import React from 'react';
import { Plus } from 'lucide-react';
import { Partner, PartnersFormProps } from './types';
import { PartnerCard } from './PartnerCard';
import { InfoTooltip } from '../InfoTooltip';

export function PartnersForm({ data, onChange }: PartnersFormProps) {
  const addPartner = () => {
    const newPartner: Partner = {
      id: crypto.randomUUID(),
      name: '',
      logo: null,
      website: '',
      type: 'other',
    };
    onChange({ partners: [...data.partners, newPartner] });
  };

  const removePartner = (id: string) => {
    onChange({ partners: data.partners.filter((p) => p.id !== id) });
  };

  const updatePartner = (id: string, updates: Partial<Partner>) => {
    onChange({
      partners: data.partners.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    });
  };

  return (
    <div className="space-y-6">
      {data.partners.length > 0 ? (
        <div className="space-y-4">
          {data.partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onRemove={() => removePartner(partner.id)}
              onEdit={(updates) => updatePartner(partner.id, updates)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-sm text-gray-500">No partners added yet</p>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={addPartner}
          className="w-full flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Begin adding partners
        </button>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="addLater"
            checked={data.addLater}
            onChange={(e) => onChange({ addLater: e.target.checked })}
            className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="addLater" className="text-sm text-gray-600">
            I will add partners later
          </label>
          <InfoTooltip text="You can always add or update partners after your hackathon goes live." />
        </div>
      </div>
    </div>
  );
}
