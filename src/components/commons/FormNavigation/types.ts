export interface FormNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
} 