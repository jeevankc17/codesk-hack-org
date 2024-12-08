import React from 'react';
import { HackathonPreviewProps } from './types';
import HackathonHeader from './HackathonHeader';
import PrizeSection from './PrizeSection';
import SpeakersList from './SpeakersList';
import ScheduleSection from './ScheduleSection';
import FAQSection from './FAQSection';
import PartnersList from './PartnersList';
import { ImageOff, Users, Calendar, Trophy, Link as LinkIcon } from 'lucide-react';
import LinksSection from './LinksSection';

export const HackathonPreview: React.FC<HackathonPreviewProps> = ({
  formData,
  onSubmit,
  onBack
}) => {
  const {
    name,
    tagline,
    about,
    themes,
    approxParticipants,
    minTeamSize,
    maxTeamSize,
    venue,
    dates,
    partners,
    tracks,
    speakers,
    events,
    faqs,
    logo,
    coverImage,
    brandColor,
    websiteUrl,
    codeskUrl,
    contactEmail,
    socialLinks
  } = formData;

  const EmptyState = ({ icon: Icon, message }: { icon: any, message: string }) => (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <Icon className="w-12 h-12 text-gray-400 mb-2" />
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <HackathonHeader
        name={name || "Untitled Hackathon"}
        tagline={tagline || "No tagline provided yet"}
        logoUrl={logo ? URL.createObjectURL(logo) : null}
        brandColor={brandColor}
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 space-y-8">
          {/* Cover Image */}
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Hackathon Cover"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          ) : (
            <EmptyState 
              icon={ImageOff} 
              message="No cover image uploaded yet" 
            />
          )}

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <div className="prose text-gray-700">
              {about || "No description provided yet"}
            </div>
          </div>

          {/* Themes */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Themes</h3>
            {themes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {themes.map((theme, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-gray-500">No themes selected yet</div>
            )}
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Participants</h4>
              <p className="text-2xl font-bold">{approxParticipants || 0}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Team Size</h4>
              <p className="text-2xl font-bold">{minTeamSize} - {maxTeamSize}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Venue</h4>
              <p className="text-gray-700">{venue || "No venue specified"}</p>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-600">Applications Open</h4>
                <p className="mt-1">{dates.applicationOpen.date} {dates.applicationOpen.time}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-600">Applications Close</h4>
                <p className="mt-1">{dates.applicationClose.date} {dates.applicationClose.time}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-600">Hackathon Begins</h4>
                <p className="mt-1">{dates.hackathonBegins.date} {dates.hackathonBegins.time}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-600">Submission Deadline</h4>
                <p className="mt-1">{dates.submissionDeadline.date} {dates.submissionDeadline.time}</p>
              </div>
            </div>
          </div>

          {/* Partners */}
          {partners.length > 0 ? (
            <PartnersList partners={partners} />
          ) : (
            <EmptyState 
              icon={Users} 
              message="No partners added yet" 
            />
          )}

          {/* Prizes */}
          {tracks.length > 0 ? (
            <PrizeSection tracks={tracks} />
          ) : (
            <EmptyState 
              icon={Trophy} 
              message="No prizes added yet" 
            />
          )}

          {/* Speakers */}
          {speakers.length > 0 ? (
            <SpeakersList speakers={speakers} />
          ) : (
            <EmptyState 
              icon={Users} 
              message="No speakers added yet" 
            />
          )}

          {/* Schedule */}
          {events.length > 0 ? (
            <ScheduleSection events={events} />
          ) : (
            <EmptyState 
              icon={Calendar} 
              message="No schedule events added yet" 
            />
          )}

          {/* FAQs */}
          {faqs.length > 0 ? (
            <FAQSection faqs={faqs} />
          ) : (
            <EmptyState 
              icon={LinkIcon} 
              message="No FAQs added yet" 
            />
          )}

          {/* Contact & Social Links */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold mb-4">Contact & Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Contact</h4>
                <p className="text-gray-700">{contactEmail}</p>
                <p className="text-gray-700">{websiteUrl}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Social Links</h4>
                <div className="space-y-2">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    url && (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button Section */}
          <div className="flex justify-between items-center pt-8 border-t">
            <button
              onClick={onBack}
              className="text-gray-600 hover:text-gray-800"
            >
              Back to editing
            </button>
            <button
              onClick={() => onSubmit(formData)}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit Hackathon
            </button>
          </div>
        </div>
      </div>
      <LinksSection
        codeskUrl={formData.codeskUrl}
        websiteUrl={formData.websiteUrl}
        contactEmail={formData.contactEmail}
        codeOfConductUrl={formData.codeOfConductUrl}
        usecodoskdeOfConduct={formData.useCodeOfConductUrl}
        socialLinks={formData.socialLinks}
      />
    </div>
  );
};

export default HackathonPreview; 