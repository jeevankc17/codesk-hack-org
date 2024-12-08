import React from 'react';

interface ApplicationSectionProps {
  selectedFields: string[];
}

const ApplicationSection: React.FC<ApplicationSectionProps> = ({ selectedFields }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Application Requirements</h3>
      <div className="space-y-3">
        {selectedFields.map((field) => (
          <div key={field} className="p-3 bg-gray-50 rounded-lg">
            <span className="capitalize">{field.replace(/_/g, ' ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSection; 