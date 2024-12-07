export type EventType = 'pre' | 'in' | 'post';

export interface ScheduleEvent {
  id: string;
  type: EventType;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  speakers?: string[];
  location?: string;
  isOnline: boolean;
  meetLink?: string;
}

export interface ScheduleFormData {
  events: ScheduleEvent[];
}

export interface ScheduleFormProps {
  initialData?: ScheduleEvent[];
  onChange: (events: ScheduleEvent[]) => void;
}
