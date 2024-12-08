import React from 'react';
import { Github, Globe, Youtube, Link as LinkIcon } from 'lucide-react';
import { ProjectLinksProps } from './types';

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const getLinkIcon = (url: string) => {
    if (url.includes('github.com')) return <Github className="text-gray-600" size={20} />;
    if (url.includes('youtube.com')) return <Youtube className="text-red-600" size={20} />;
    if (url.includes('devpost.com')) return <Globe className="text-blue-600" size={20} />;
    return <LinkIcon className="text-gray-600" size={20} />;
  };

  const formatUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname + urlObj.pathname;
    } catch {
      return url;
    }
  };

  return (
    <div className="space-y-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="flex-shrink-0">
            {getLinkIcon(link)}
          </div>
          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
            {formatUrl(link)}
          </span>
        </a>
      ))}
    </div>
  );
};

export default ProjectLinks; 