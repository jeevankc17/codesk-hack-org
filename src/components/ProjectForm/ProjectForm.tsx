import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { PROJECT_FORM_TABS, ProjectFormTabs } from './constants/tabs';
import BasicInfoForm from './components/BasicInfoForm/BasicInfoForm';
import DetailsForm from './components/DetailsForm/DetailsForm';
import MediaLinksForm from './components/MediaLinksForm/MediaLinksForm';
import ProjectPreview from './components/ProjectPreview/ProjectPreview';
import { ProjectFormProps, ProjectFormData } from './types';
import { ProgressBar } from '../commons/ProgressBar';
import { FormNavigation } from '../commons/FormNavigation';

const ProjectForm: React.FC<ProjectFormProps> = ({ hackathonName, organizerName, onSubmit }) => {
  const [activeTab, setActiveTab] = useState<ProjectFormTabs>(PROJECT_FORM_TABS.BASIC_INFO);
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: '',
    tagline: '',
    problem: '',
    challenges: '',
    technologies: [],
    links: [],
    videoDemo: '',
    coverImage: null,
    pictures: [],
    logo: null,
    platforms: [],
    builders: []
  });

  const calculateProgress = () => {
    const sections = [
      {
        weight: 25,
        isComplete: () => Boolean(formData.projectName && formData.tagline)
      },
      {
        weight: 25,
        isComplete: () => Boolean(formData.problem && formData.challenges && formData.technologies.length)
      },
      {
        weight: 25,
        isComplete: () => Boolean(formData.links.length && formData.videoDemo)
      },
      {
        weight: 25,
        isComplete: () => Boolean(formData.coverImage && formData.platforms.length)
      }
    ];

    return sections.reduce((acc, section) => acc + (section.isComplete() ? section.weight : 0), 0);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: ProjectFormTabs) => {
    setActiveTab(newValue);
  };

  const handlePrevious = () => {
    const tabs = Object.values(PROJECT_FORM_TABS);
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const tabs = Object.values(PROJECT_FORM_TABS);
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
              Submit your Project
            </h1>
            <div className="w-full sm:w-1/3">
              <ProgressBar progress={progress} />
            </div>
            {progress === 100 ? (
              <button
                onClick={() => onSubmit(formData)}
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit Project
              </button>
            ) : (
              <div className="w-full sm:w-auto text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-center">
                Complete all sections to submit
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
            {Object.values(PROJECT_FORM_TABS).map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Box sx={{ mt: 3 }}>
            {activeTab === PROJECT_FORM_TABS.BASIC_INFO && (
              <div className="space-y-6">
                <BasicInfoForm formData={formData} setFormData={setFormData} />
                <FormNavigation 
                  onPrevious={handlePrevious} 
                  onNext={handleNext} 
                />
              </div>
            )}
            {activeTab === PROJECT_FORM_TABS.DETAILS && (
              <div className="space-y-6">
                <DetailsForm formData={formData} setFormData={setFormData} />
                <FormNavigation 
                  onPrevious={handlePrevious} 
                  onNext={handleNext} 
                />
              </div>
            )}
            {activeTab === PROJECT_FORM_TABS.MEDIA && (
              <div className="space-y-6">
                <MediaLinksForm formData={formData} setFormData={setFormData} />
                <FormNavigation 
                  onPrevious={handlePrevious} 
                  onNext={handleNext} 
                />
              </div>
            )}
            {activeTab === PROJECT_FORM_TABS.PREVIEW && (
              <div className="space-y-6">
                <ProjectPreview 
                  formData={formData}
                  hackathonName={hackathonName}
                  organizerName={organizerName}
                  onSubmit={onSubmit}
                  onBack={() => setActiveTab(PROJECT_FORM_TABS.BASIC_INFO)}
                />
              </div>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default ProjectForm; 