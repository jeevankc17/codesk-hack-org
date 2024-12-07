import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { BUILDER_FORM_TABS, BuilderFormTabs } from './constants/tabs';
import { BuilderFormProps, BuilderFormData } from './types';
import { ProgressBar } from '../commons/ProgressBar';
import { FormNavigation } from '../commons/FormNavigation';
import BasicInfoForm from './components/BasicInfoForm/BasicInfoForm';
import EducationForm from './components/EducationForm/EducationForm';
import SkillsForm from './components/SkillsForm/SkillsForm';
import SocialLinksForm from './components/SocialLinksForm/SocialLinksForm';
import AdditionalInfoForm from './components/AdditionalInfoForm/AdditionalInfoForm';

const BuilderForm: React.FC<BuilderFormProps> = ({ initialData, onSubmit }) => {
  const [activeTab, setActiveTab] = useState<BuilderFormTabs>(BUILDER_FORM_TABS.BASIC_INFO);
  const [formData, setFormData] = useState<BuilderFormData>({
    name: '',
    email: '',
    phone: '',
    avatar: null,
    bio: '',
    gender: 'other',
    tShirtSize: 'L',
    education: {
      institution: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: new Date().getFullYear(),
    },
    skills: [],
    experience: '',
    resume: null,
    portfolioUrl: '',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
      website: '',
    },
    interests: [],
    dietaryRestrictions: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: '',
    },
  });

  const calculateProgress = () => {
    const sections = [
      {
        weight: 30,
        isComplete: () => Boolean(
          formData.name && 
          formData.email && 
          formData.phone && 
          formData.bio
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.education.institution &&
          formData.education.degree
        ),
      },
      {
        weight: 20,
        isComplete: () => Boolean(
          formData.skills.length &&
          formData.experience
        ),
      },
      {
        weight: 15,
        isComplete: () => Boolean(
          formData.socialLinks.github ||
          formData.socialLinks.linkedin
        ),
      },
      {
        weight: 15,
        isComplete: () => Boolean(
          formData.emergencyContact.name &&
          formData.emergencyContact.phone
        ),
      },
    ];

    return sections.reduce((acc, section) => 
      acc + (section.isComplete() ? section.weight : 0), 0
    );
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: BuilderFormTabs) => {
    setActiveTab(newValue);
  };

  const handlePrevious = () => {
    const tabs = Object.values(BUILDER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const tabs = Object.values(BUILDER_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Builder Profile
            </h1>
            <div className="w-full sm:w-1/3">
              <ProgressBar progress={progress} />
            </div>
            {progress === 100 ? (
              <button
                onClick={() => onSubmit(formData)}
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Complete Profile
              </button>
            ) : (
              <div className="w-full sm:w-auto text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-center">
                Complete all sections to proceed
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {Object.values(BUILDER_FORM_TABS).map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Box sx={{ mt: 3 }}>
            {activeTab === BUILDER_FORM_TABS.BASIC_INFO && (
              <div className="space-y-6">
                <BasicInfoForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.EDUCATION && (
              <div className="space-y-6">
                <EducationForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.SKILLS && (
              <div className="space-y-6">
                <SkillsForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.SOCIAL && (
              <div className="space-y-6">
                <SocialLinksForm formData={formData} setFormData={setFormData} />
                <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            )}
            {activeTab === BUILDER_FORM_TABS.ADDITIONAL && (
              <div className="space-y-6">
                <AdditionalInfoForm formData={formData} setFormData={setFormData} />
                <FormNavigation 
                  onPrevious={handlePrevious} 
                  onNext={() => onSubmit(formData)}
                />
              </div>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default BuilderForm; 