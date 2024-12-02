import React from 'react';
import { InfoTooltip } from '../InfoTooltip';
import { SocialLinkInput } from './SocialLinkInput';
import { LinksFormProps } from './types';

export function LinksForm({ data, onChange }: LinksFormProps) {
  const updateSocialLink = (
    key: keyof typeof data.socialLinks,
    value: string
  ) => {
    onChange({
      socialLinks: {
        ...data.socialLinks,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="websiteUrl"
            className="block text-sm font-medium text-gray-700"
          >
            HACKATHON'S WEBSITE
          </label>
          <input
            type="url"
            id="websiteUrl"
            value={data.websiteUrl}
            onChange={(e) => onChange({ websiteUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="devfolioUrl"
            className="block text-sm font-medium text-gray-700"
          >
            CODESK MICROSITE URL
          </label>
          <div className="flex items-center">
            <span className="px-3 py-2 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
              hackersthon
            </span>
            <input
              type="text"
              id="devfolioUrl"
              value={data.devfolioUrl}
              onChange={(e) => onChange({ devfolioUrl: e.target.value })}
              className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
              placeholder=".codesk.co"
            />
            <InfoTooltip text="You can integrate the 'Apply with Devfolio' button on your hackathon website. Learn more about it here." />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contactEmail"
            className="block text-sm font-medium text-gray-700"
          >
            CONTACT EMAIL
          </label>
          <div className="flex items-center gap-2">
            <input
              type="email"
              id="contactEmail"
              value={data.contactEmail}
              onChange={(e) => onChange({ contactEmail: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="help@hackathon.com"
            />
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200">
              Verify
            </button>
            <InfoTooltip text="Verify your email to receive important updates and notifications." />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="codeOfConduct"
            className="block text-sm font-medium text-gray-700"
          >
            LINK TO CODE OF CONDUCT
          </label>
          <div className="space-y-2">
            <input
              type="url"
              id="codeOfConduct"
              value={data.codeOfConductUrl}
              onChange={(e) => onChange({ codeOfConductUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              disabled={data.useDevfolioCodeOfConduct}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="useDevfolioCodeOfConduct"
                checked={data.useDevfolioCodeOfConduct}
                onChange={(e) =>
                  onChange({ useDevfolioCodeOfConduct: e.target.checked })
                }
                className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="useDevfolioCodeOfConduct"
                className="text-sm text-gray-600"
              >
                Use Devfolio's standard Code of Conduct
              </label>
              <InfoTooltip text="You can use Devfolio's standard Code of Conduct or provide your own link." />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-700">SOCIAL LINKS</h3>
          <InfoTooltip text="The more social presence of your hackathon, the more credible it appears. Don't worry if you don't have any these links right now, you can add or update them after your hackathon goes live." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialLinkInput
            id="twitter"
            label="Twitter"
            value={data.socialLinks.twitter}
            onChange={(value) => updateSocialLink('twitter', value)}
          />
          <SocialLinkInput
            id="linkedin"
            label="LinkedIn"
            value={data.socialLinks.linkedin}
            onChange={(value) => updateSocialLink('linkedin', value)}
          />
          <SocialLinkInput
            id="discord"
            label="Discord"
            value={data.socialLinks.discord}
            onChange={(value) => updateSocialLink('discord', value)}
          />
          <SocialLinkInput
            id="slack"
            label="Slack"
            value={data.socialLinks.slack}
            onChange={(value) => updateSocialLink('slack', value)}
          />
          <SocialLinkInput
            id="hashnode"
            label="Hashnode"
            value={data.socialLinks.hashnode}
            onChange={(value) => updateSocialLink('hashnode', value)}
          />
          <SocialLinkInput
            id="telegram"
            label="Telegram"
            value={data.socialLinks.telegram}
            onChange={(value) => updateSocialLink('telegram', value)}
          />
          <SocialLinkInput
            id="facebook"
            label="Facebook"
            value={data.socialLinks.facebook}
            onChange={(value) => updateSocialLink('facebook', value)}
          />
          <SocialLinkInput
            id="instagram"
            label="Instagram"
            value={data.socialLinks.instagram}
            onChange={(value) => updateSocialLink('instagram', value)}
          />
        </div>
      </div>
    </div>
  );
}
