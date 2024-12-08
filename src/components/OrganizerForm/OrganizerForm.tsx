import { useState } from 'react';
import { TabNavigation } from '../commons/TabNavigation';
import { ProgressBar } from '../commons/ProgressBar';
import { FormNavigation } from '../commons/FormNavigation';
import { BasicInfoForm } from './components/BasicInfoForm/BasicInfoForm';
import { ContactInfoForm } from './components/ContactInfoForm/ContactInfoForm';
import { OrganizationDetailsForm } from './components/OrganizationDetailsForm/OrganizationDetailsForm';
import { SocialLinksForm } from './components/SocialLinksForm/SocialLinksForm';
import { OrganizerPreview } from './components/OrganizerPreview/OrganizerPreview';
import { tabs, TabId } from './constants/tabs';
import { OrganizerFormData, OrganizerFormProps } from './types';

const calculateProgress = (formData: OrganizerFormData) => {
  const sections = [
    // Basic Info
    {
      weight: 25,
      isComplete: () =>
        Boolean(
          formData.name &&
          formData.email &&
          formData.phone &&
          formData.role
        ),
    },
    // Contact Info
    {
      weight: 25,
      isComplete: () =>
        Boolean(
          formData.address.street &&
          formData.address.city &&
          formData.address.state &&
          formData.address.country &&
          formData.address.zipCode
        ),
    },
    // Organization Details
    {
      weight: 25,
      isComplete: () =>
        Boolean(
          formData.organizationName &&
          formData.organizationType &&
          formData.description &&
          formData.website &&
          formData.logo &&
          formData.establishedYear &&
          formData.teamSize
        ),
    },
    // Social Links - Optional but good to have
    {
      weight: 25,
      isComplete: () =>
        Object.values(formData.socialLinks).some(link => Boolean(link)),
    },
  ];

  const completedWeight = sections.reduce(
    (acc, section) => acc + (section.isComplete() ? section.weight : 0),
    0
  );

  return completedWeight;
};

function OrganizerForm({ initialData, onSubmit }: OrganizerFormProps) {
  const [activeTab, setActiveTab] = useState<TabId>('basic-info');
  const [formData, setFormData] = useState<OrganizerFormData>({
    name: '',
    email: '',
    phone: '',
    role: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    organizationName: '',
    organizationType: 'educational',
    description: '',
    website: '',
    logo: null,
    establishedYear: new Date().getFullYear(),
    teamSize: 0,
    previousHackathons: 0,
    requiredSkills: [],
    socialLinks: {
      linkedin: '',
      twitter: '',
      github: '',
      facebook: '',
      instagram: '',
    },
  });

  const handleFormChange = (updates: Partial<OrganizerFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handlePrevious = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const progress = calculateProgress(formData);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Organizer Registration
            </h1>
            <div className="w-full sm:w-1/3">
              <ProgressBar progress={progress} />
            </div>
            {progress === 100 ? (
              <button
                onClick={() => {
                  console.log('Submitting form...');
                }}
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            ) : (
              <div className="w-full sm:w-auto text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-center">
                Complete setup 100% to proceed
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="min-w-max sm:min-w-0">
            <TabNavigation<TabId> 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
              tabs={tabs}
            />
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          {activeTab === 'basic-info' && (
            <div className="space-y-6">
              <BasicInfoForm data={formData} onChange={handleFormChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'contact-info' && (
            <div className="space-y-6">
              <ContactInfoForm data={formData} onChange={handleFormChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'organization' && (
            <div className="space-y-6">
              <OrganizationDetailsForm data={formData} onChange={handleFormChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'social-links' && (
            <div className="space-y-6">
              <SocialLinksForm data={formData} onChange={handleFormChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              <OrganizerPreview data={formData} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default OrganizerForm; 