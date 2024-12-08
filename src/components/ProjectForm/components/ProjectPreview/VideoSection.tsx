import React from 'react';
import { VideoSectionProps } from './types';
import { Video, Plus, Play } from 'lucide-react';

export const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, title }) => {
  const handleLoomClick = () => {
    window.open('https://www.loom.com', '_blank');
  };

  const getEmbedUrl = (url: string): string => {
    try {
      // Handle YouTube URLs
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('youtu.be') 
          ? url.split('/').pop() 
          : new URLSearchParams(new URL(url).search).get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // Handle Vimeo URLs
      if (url.includes('vimeo.com')) {
        const videoId = url.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}`;
      }
      // Handle Loom URLs
      if (url.includes('loom.com')) {
        return url.replace('/share/', '/embed/');
      }
      return url;
    } catch {
      return url;
    }
  };

  if (!videoUrl) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Project Demo</h3>
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          <Video className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-500 text-center mb-4">No demo video added yet</p>
          <div className="flex gap-4">
            <button
              onClick={handleLoomClick}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Record with Loom
            </button>
            <div className="text-gray-500 flex items-center">or paste video URL</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-lg">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Play size={16} />
            <span>Watch on {new URL(videoUrl).hostname}</span>
          </a>
        </div>
      </div>
    </div>
  );
}; 

export default VideoSection;