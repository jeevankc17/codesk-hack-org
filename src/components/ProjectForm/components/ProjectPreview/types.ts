import { ProjectFormData } from '../../types';

export interface ProjectPreviewProps {
  formData: ProjectFormData;
  hackathonName: string;
  organizerName: string;
  onSubmit: (data: ProjectFormData) => void;
  onBack: () => void;
}

export interface ProjectHeaderProps {
  projectName: string;
  tagline: string;
  logoUrl: string | null;
}

export interface BuildersListProps {
  builders: string[];
}

export interface VideoSectionProps {
  videoUrl: string;
  title: string;
}

export interface Screenshot {
  url: string;
  alt: string;
}

export interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export interface TechBadgeProps {
  name: string;
}

export interface PlatformBadgeProps {
  name: string;
}

export interface ProjectLinksProps {
  links: string[];
}

export interface TeamMemberProps {
  name: string;
  role: string;
  avatar?: string;
}

export interface CoverImageProps {
  imageUrl: string;
  projectName: string;
} 