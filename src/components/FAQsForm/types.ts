export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQsFormProps {
  initialData?: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}
