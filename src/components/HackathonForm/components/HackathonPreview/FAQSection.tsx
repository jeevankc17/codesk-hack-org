import React from 'react';
import { FAQ } from '../FAQsForm/types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection; 