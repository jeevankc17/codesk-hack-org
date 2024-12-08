import React from 'react';
import { BuilderFormData } from '../../types';

interface SkillsSectionProps {
  data: BuilderFormData;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Skills & Experience</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-500">Skills</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {data.skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-500">Experience</label>
        <p className="mt-1">{data.experience || 'No experience provided'}</p>
      </div>

      {data.portfolioUrl && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Portfolio</label>
          <a 
            href={data.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-blue-600 hover:underline"
          >
            {data.portfolioUrl}
          </a>
        </div>
      )}

      {data.resume && (
        <div>
          <label className="block text-sm font-medium text-gray-500">Resume</label>
          <p className="mt-1 text-sm text-gray-500">{data.resume.name}</p>
        </div>
      )}
    </div>
  );
} 