export interface DateTimeField {
  date: string;
  time: string;
}

export interface DatesConfig {
  timezone: string;
  applicationOpen: DateTimeField;
  applicationClose: DateTimeField;
  rsvpWithin: number;
  hackathonBegins: DateTimeField;
  submissionDeadline: DateTimeField;
} 