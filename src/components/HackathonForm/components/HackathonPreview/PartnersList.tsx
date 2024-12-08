import React from 'react';
import { Partner } from '../PartnersForm/types';

interface PartnersListProps {
  partners: Partner[];
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const partnersByType = partners.reduce((acc, partner) => {
    if (!acc[partner.type]) {
      acc[partner.type] = [];
    }
    acc[partner.type].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Partners & Sponsors</h3>
      <div className="space-y-6">
        {Object.entries(partnersByType).map(([type, partners]) => (
          <div key={type}>
            <h4 className="font-medium mb-3 capitalize">{type} Partners</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div key={partner.id} className="text-center">
                  {partner.logo && (
                    <img
                      src={URL.createObjectURL(partner.logo)}
                      alt={partner.name}
                      className="h-20 object-contain mx-auto mb-2"
                    />
                  )}
                  <p className="font-medium">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersList; 