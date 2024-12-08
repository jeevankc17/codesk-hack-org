import { DatesConfig } from '../../types';

export interface DatesFormProps {
  data: DatesConfig;
  onChange: (data: Partial<DatesConfig>) => void;
}
