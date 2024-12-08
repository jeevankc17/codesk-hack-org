import React from 'react';

interface LinksSectionProps {
  websiteUrl: string;
  codeskUrl?: string;
  contactEmail: string;
  codeOfConductUrl: string;
  usecodoskdeOfConduct: boolean;
  socialLinks: Record<string, string>;
}

const LinksSection: React.FC<LinksSectionProps> = ({
  websiteUrl,
  codeskUrl,
  contactEmail,
  codeOfConductUrl,
  usecodoskdeOfConduct,
  socialLinks,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Important Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-medium">Official Links</h4>
          <div className="space-y-2">
            {websiteUrl && (
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer" 
                 className="block text-blue-600 hover:text-blue-800">
                Website
              </a>
            )}
            {(codeOfConductUrl || usecodoskdeOfConduct) && (
              <a href={usecodoskdeOfConduct ? '#' : codeOfConductUrl} 
                 target="_blank" rel="noopener noreferrer"
                 className="block text-blue-600 hover:text-blue-800">
                Code of Conduct
              </a>
            )}
            {codeskUrl && (
              <a href={codeskUrl} target="_blank" rel="noopener noreferrer">
                Register on Codesk
              </a>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium">Social Links</h4>
          <div className="space-y-2">
            {Object.entries(socialLinks).map(([platform, url]) => (
              url && (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                   className="block text-blue-600 hover:text-blue-800">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksSection; 