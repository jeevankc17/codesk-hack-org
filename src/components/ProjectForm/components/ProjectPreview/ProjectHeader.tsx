import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProjectHeaderProps } from './types';

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectName, tagline, logoUrl }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to editing Project
          </button>
        </div>

        {/* Preview Notice */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-2">
            Previewing {projectName}
          </h1>
          <p className="text-gray-600">
            This is how your project will appear in public
          </p>
        </div>

        {/* Project Info */}
        <div className="flex items-center gap-6">
          {logoUrl && (
            <div className="flex-shrink-0">
              <img 
                src={logoUrl} 
                alt={projectName} 
                className="w-20 h-20 rounded-xl object-cover shadow-sm border border-gray-100" 
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {projectName}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader; 