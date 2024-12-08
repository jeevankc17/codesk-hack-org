import React from 'react';
import { ProjectPreviewProps } from './types';
import ProjectHeader from './ProjectHeader';
import BuildersList from './BuildersList';
import VideoSection from './VideoSection';
import ScreenshotGallery from './ScreenshotGallery';
import TechBadge from './TechBadge';
import PlatformBadge from './PlatformBadge';
import ProjectLinks from './ProjectLinks';
import { ImageOff, Users, Video, Link as LinkIcon } from 'lucide-react';

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  formData,
  hackathonName,
  organizerName,
  onSubmit,
  onBack
}) => {
  const {
    projectName,
    tagline,
    builders,
    videoDemo,
    pictures,
    problem,
    challenges,
    technologies,
    platforms,
    links,
    logo,
    coverImage
  } = formData;

  const EmptyState = ({ icon: Icon, message }: { icon: any, message: string }) => (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
      <Icon className="w-12 h-12 text-gray-400 mb-2" />
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <ProjectHeader
        projectName={projectName || "Untitled Project"}
        tagline={tagline || "No tagline provided yet"}
        logoUrl={logo ? URL.createObjectURL(logo) : null}
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 space-y-8">
          {/* Cover Image */}
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Project Cover"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          ) : (
            <EmptyState 
              icon={ImageOff} 
              message="No cover image uploaded yet" 
            />
          )}

          {/* Builders */}
          {builders.length > 0 ? (
            <BuildersList builders={builders} />
          ) : (
            <EmptyState 
              icon={Users} 
              message="No team members added yet" 
            />
          )}

          {/* Video Demo */}
          {videoDemo ? (
            <VideoSection
              videoUrl={videoDemo}
              title={`${projectName} Demo Video`}
            />
          ) : (
            <EmptyState 
              icon={Video} 
              message="No demo video added yet" 
            />
          )}

          {/* Screenshots */}
          {pictures.length > 0 ? (
            <ScreenshotGallery
              screenshots={pictures.map((pic, index) => ({
                url: URL.createObjectURL(pic),
                alt: `${projectName} Screenshot ${index + 1}`
              }))}
            />
          ) : (
            <EmptyState 
              icon={ImageOff} 
              message="No project screenshots added yet" 
            />
          )}

          {/* Problem Statement */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              The problem {projectName || "this project"} solves
            </h3>
            <div className="prose text-gray-700 bg-gray-50 p-6 rounded-lg">
              {problem || "No problem statement provided yet"}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Challenges we ran into
            </h3>
            <div className="prose text-gray-700 bg-gray-50 p-6 rounded-lg">
              {challenges || "No challenges described yet"}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Technologies we used
            </h3>
            {technologies.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <TechBadge key={index} name={tech} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg text-gray-500">
                No technologies added yet
              </div>
            )}
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Platforms
            </h3>
            {platforms.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <PlatformBadge key={index} name={platform} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg text-gray-500">
                No platforms selected yet
              </div>
            )}
          </div>

          {/* Project Links */}
          {links.length > 0 ? (
            <ProjectLinks links={links} />
          ) : (
            <EmptyState 
              icon={LinkIcon} 
              message="No project links added yet" 
            />
          )}

          {/* Hackathon Info */}
          <div className="border-t pt-8 mt-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
              Built at
            </h3>
            <div className="flex items-center gap-2">
              <span className="font-medium">{hackathonName}</span>
              <span className="text-gray-400">by</span>
              <span className="font-medium">{organizerName}</span>
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
              Submit Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview; 