export interface DatesFormData {
  timezone: string;
  applicationOpen: {
    date: string;
    time: string;
  };
  applicationClose: {
    date: string;
    time: string;
  };
  rsvpWithin: number;
  hackathonBegins: {
    date: string;
    time: string;
  };
  submissionDeadline: {
    date: string;
    time: string;
  };
}

export interface DatesFormProps {
  data: DatesFormData;
  onChange: (data: Partial<DatesFormData>) => void;
}
