export interface TagInputProps {
  label: string;
  description?: string;
  value: string[];
  onChange: (newTags: string[]) => void;
  placeholder?: string;
  validate?: (value: string) => boolean | string;
  maxTags?: number;
  color?: 'primary' | 'secondary' | 'default';
}

export { TagInput } from './TagInput'; 