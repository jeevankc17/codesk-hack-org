import { useState } from 'react';
import { TabNavigation } from '../commons/TabNavigation';
import { ProgressBar } from '../commons/ProgressBar';
import { BasicsForm } from './components/BasicsForm/BasicsForm';
import { ApplicationForm } from './components/ApplicationForm/ApplicationForm';
import { LinksForm } from './components/LinksForm/LinksForm';
import { BrandForm } from './components/BrandForm/BrandForm';
import { PartnersForm } from './components/PartnersForm/PartnersForm';
import { DatesForm } from './components/DatesForm/DatesForm';
import { Partner } from './components/PartnersForm/types';
import { PrizesForm } from './components/PrizesForm/PrizesForm';
import { Track } from './components/PrizesForm/types';
import { SpeakersForm } from './components/SpeakersForm/SpeakersForm';
import { Speaker } from './components/SpeakersForm/types';
import { tabs, TabId } from './constants/tabs';
import { FormNavigation } from '../commons/FormNavigation';
import { ScheduleForm } from './components/ScheduleForm/ScheduleForm';
import { ScheduleEvent } from './components/ScheduleForm/types';
import { FAQsForm } from './components/FAQsForm/FAQsForm';
import { FAQ } from './components/FAQsForm/types';
import { HackathonFormProps, HackathonFormData } from './types';
import HackathonPreview from './components/HackathonPreview/HackathonPreview';

const calculateProgress = (
  formData: HackathonFormData,
  prizes: Track[],
  speakers: Speaker[],
  scheduleEvents: ScheduleEvent[],
  faqs: FAQ[]
) => {
  const sections = [
    // Basics - check required fields
    {
      weight: 10,
      isComplete: () =>
        Boolean(
          formData.name &&
            formData.tagline &&
            formData.about &&
            formData.themes.length > 0 &&
            formData.approxParticipants > 0 &&
            formData.minTeamSize > 0 &&
            formData.maxTeamSize > 0 &&
            formData.venue
        ),
    },
    // Application
    {
      weight: 10,
      isComplete: () => formData.selectedFields.length >= 2,
    },
    // Links - check required fields
    {
      weight: 10,
      isComplete: () =>
        Boolean(
          formData.websiteUrl &&
            formData.contactEmail &&
            (formData.codeOfConductUrl || formData.useCodeOfConductUrl)
        ),
    },
    // Brand - check required fields
    {
      weight: 10,
      isComplete: () =>
        Boolean(formData.brandColor && formData.logo && formData.favicon),
    },
    // Dates - check required fields
    {
      weight: 10,
      isComplete: () =>
        Boolean(
          formData.dates.timezone &&
            formData.dates.applicationOpen.date &&
            formData.dates.applicationClose.date &&
            formData.dates.hackathonBegins.date &&
            formData.dates.submissionDeadline.date
        ),
    },
    // Partners
    {
      weight: 10,
      isComplete: () => formData.addLater || formData.partners.length > 0,
    },
    // Prizes
    {
      weight: 10,
      isComplete: () => prizes.length > 0,
    },
    // Speakers
    {
      weight: 10,
      isComplete: () => speakers.length > 0,
    },
    // Schedule
    {
      weight: 10,
      isComplete: () => scheduleEvents.length > 0,
    },
    // FAQs
    {
      weight: 10,
      isComplete: () => faqs.length > 0,
    },
  ];

  const completedWeight = sections.reduce(
    (acc, section) => acc + (section.isComplete() ? section.weight : 0),
    0
  );

  return completedWeight;
};

const HackathonForm: React.FC<HackathonFormProps> = ({ onSubmit }) => {
  const [activeTab, setActiveTab] = useState<TabId>('basics');
  const [formData, setFormData] = useState<HackathonFormData>({
    // Basics
    name: '',
    tagline: '',
    about: '',
    themes: [],
    approxParticipants: 0,
    minTeamSize: 0,
    maxTeamSize: 0,
    venue: '',
    // Dates
    dates: {
      timezone: '',
      applicationOpen: { date: '', time: '' },
      applicationClose: { date: '', time: '' },
      rsvpWithin: 3,
      hackathonBegins: { date: '', time: '' },
      submissionDeadline: { date: '', time: '' }
    },
    // Application form data
    selectedFields: ['first_last_name', 'email'],
    // Links form data
    websiteUrl: '',
    codeskUrl: '',
    contactEmail: '',
    codeOfConductUrl: '',
    useCodeOfConductUrl: false,
    socialLinks: {
      twitter: '',
      linkedin: '',
      discord: '',
      slack: '',
      hashnode: '',
      telegram: '',
      facebook: '',
      instagram: '',
    },
    // Brand form data
    brandColor: '#000000',
    logo: null,
    favicon: null,
    coverImage: null,
    // Partners form data
    partners: [],
    addLater: false,
    // Tracks and prizes
    tracks: [],
    // Speakers
    speakers: [],
    // Schedule events
    events: [],
    // FAQs
    faqs: []
  });
  const [prizes, setPrizes] = useState<Track[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [scheduleEvents, setScheduleEvents] = useState<ScheduleEvent[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const handleFormChange = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handlePrizesChange = (updatedTracks: Track[]) => {
    setPrizes(updatedTracks);
  };

  const handleSpeakersChange = (updatedSpeakers: Speaker[]) => {
    setSpeakers(updatedSpeakers);
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

  const handleScheduleChange = (updatedEvents: ScheduleEvent[]) => {
    setScheduleEvents(updatedEvents);
  };

  const handleFAQsChange = (updatedFaqs: FAQ[]) => {
    setFaqs(updatedFaqs);
  };

  // Calculate progress
  const progress = calculateProgress(
    formData,
    prizes,
    speakers,
    scheduleEvents,
    faqs
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Create your Hackathon
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
          {activeTab === 'basics' && (
            <div className="space-y-6">
              <BasicsForm data={formData} onChange={handleFormChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'dates' && (
            <div className="space-y-6">
              <DatesForm
                data={{
                  timezone: formData.dates.timezone,
                  applicationOpen: formData.dates.applicationOpen,
                  applicationClose: formData.dates.applicationClose,
                  rsvpWithin: formData.dates.rsvpWithin,
                  hackathonBegins: formData.dates.hackathonBegins,
                  submissionDeadline: formData.dates.submissionDeadline,
                }}
                onChange={(updates) => {
                  handleFormChange({
                    dates: {
                      ...formData.dates,
                      ...updates,
                    },
                  });
                }}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'application' && (
            <div className="space-y-6">
              <ApplicationForm
                data={{ selectedFields: formData.selectedFields }}
                onChange={(updates) => handleFormChange(updates)}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'links' && (
            <div className="space-y-6">
              <LinksForm
                data={{
                  websiteUrl: formData.websiteUrl,
                  codeskUrl: formData.codeskUrl,
                  contactEmail: formData.contactEmail,
                  codeOfConductUrl: formData.codeOfConductUrl,
                  useCodeOfConductUrl: formData.useCodeOfConductUrl,
                  socialLinks: formData.socialLinks,
                }}
                onChange={handleFormChange}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'brand' && (
            <div className="space-y-6">
              <BrandForm
                data={{
                  brandColor: formData.brandColor,
                  logo: formData.logo,
                  favicon: formData.favicon,
                  coverImage: formData.coverImage,
                }}
                onChange={handleFormChange}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <PartnersForm
                data={{
                  partners: formData.partners,
                  addLater: formData.addLater,
                }}
                onChange={handleFormChange}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'prizes' && (
            <PrizesForm
              initialData={prizes}
              onChange={handlePrizesChange}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
          {activeTab === 'speakers' && (
            <SpeakersForm
              initialData={speakers}
              onChange={handleSpeakersChange}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          )}
          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <ScheduleForm
                initialData={scheduleEvents}
                onChange={handleScheduleChange}
              />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <FAQsForm initialData={faqs} onChange={handleFAQsChange} />
              <FormNavigation onPrevious={handlePrevious} onNext={handleNext} />
            </div>
          )}
          {activeTab === 'preview' && (
            <HackathonPreview
              formData={{
                ...formData,
                tracks: prizes,
                speakers,
                events: scheduleEvents,
                faqs
              }}
              onSubmit={onSubmit}
              onBack={() => setActiveTab('basics')}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default HackathonForm; 