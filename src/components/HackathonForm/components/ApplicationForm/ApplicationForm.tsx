import React from 'react';
import { formFields } from './formFields';
import { ApplicationFormProps } from './types';
import { FieldSection } from './FieldSection';
import { InfoTooltip } from '../../../commons/InfoTooltip';

export function ApplicationForm({ data, onChange }: ApplicationFormProps) {
  const handleToggleField = (fieldId: string) => {
    const newFields = data.selectedFields.includes(fieldId)
      ? data.selectedFields.filter((id) => id !== fieldId)
      : [...data.selectedFields, fieldId];
    onChange({ selectedFields: newFields });
  };

  const sections = {
    about: formFields.filter((field) => field.section === 'about'),
    education: formFields.filter((field) => field.section === 'education'),
    experience: formFields.filter((field) => field.section === 'experience'),
    online_profiles: formFields.filter(
      (field) => field.section === 'online_profiles'
    ),
    contact: formFields.filter((field) => field.section === 'contact'),
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <p>
          Select the profile fields you wish to make mandatory in your hackathon
          application.
        </p>
        <InfoTooltip text="The shorter your form is, the faster you stack up the applications." />
      </div>

      <div className="space-y-8">
        <FieldSection
          title="About"
          fields={sections.about}
          selectedFields={data.selectedFields}
          onToggleField={handleToggleField}
        />

        <FieldSection
          title="Education"
          fields={sections.education}
          selectedFields={data.selectedFields}
          onToggleField={handleToggleField}
        />

        <FieldSection
          title="Experience"
          fields={sections.experience}
          selectedFields={data.selectedFields}
          onToggleField={handleToggleField}
        />

        <FieldSection
          title="Online Profiles"
          fields={sections.online_profiles}
          selectedFields={data.selectedFields}
          onToggleField={handleToggleField}
        />

        <FieldSection
          title="Contact"
          fields={sections.contact}
          selectedFields={data.selectedFields}
          onToggleField={handleToggleField}
        />
      </div>

      <div className="pt-4">
        <p className="text-sm text-gray-600">
          At least one link is required from the Online Profiles section.
        </p>
      </div>
    </div>
  );
}
