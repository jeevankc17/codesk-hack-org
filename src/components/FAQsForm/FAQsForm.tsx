import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FAQ, FAQsFormProps } from './types';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { InfoTooltip } from '../InfoTooltip';

export function FAQsForm({ initialData = [], onChange }: FAQsFormProps) {
  const [faqs, setFaqs] = useState<FAQ[]>(initialData);
  const [editingFaq, setEditingFaq] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addFaq = () => {
    const newFaq: FAQ = {
      id: uuidv4(),
      question: '',
      answer: '',
    };
    const updatedFaqs = [...faqs, newFaq];
    setFaqs(updatedFaqs);
    setIsFormOpen(true);
    setEditingFaq(newFaq.id);
  };

  const updateFaq = (id: string, updates: Partial<FAQ>) => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === id ? { ...faq, ...updates } : faq
    );
    setFaqs(updatedFaqs);
  };

  const removeFaq = (id: string) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);
    onChange(updatedFaqs);
  };

  const handleEdit = (faqId: string) => {
    if (isFormOpen) {
      if (!confirm('You have unsaved changes. Do you want to continue?')) {
        return;
      }
    }
    setEditingFaq(faqId);
    setIsFormOpen(true);
  };

  const handleApply = () => {
    onChange(faqs);
    setEditingFaq(null);
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    if (editingFaq) {
      // Revert changes if editing
      setFaqs(initialData);
    } else {
      // Remove the last added FAQ if adding new
      setFaqs(faqs.slice(0, -1));
    }
    setEditingFaq(null);
    setIsFormOpen(false);
  };

  return (
    <div className="space-y-8">
      {/* FAQ List View */}
      {!isFormOpen && (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-medium">
                  Frequently Asked Questions
                </h2>
                <InfoTooltip text="Add frequently asked questions about your hackathon" />
              </div>
              <button
                onClick={addFaq}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Question
              </button>
            </div>

            {faqs.length > 0 ? (
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="p-4 bg-white border rounded-lg space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1 flex-1">
                        <h3 className="font-medium">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(faq.id)}
                          className="p-1 text-gray-600 hover:text-blue-600"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFaq(faq.id)}
                          className="p-1 text-gray-600 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white border rounded-lg">
                <p className="text-gray-500">No FAQs added yet</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAQ Form */}
      {isFormOpen && editingFaq && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">
                {faqs.find((f) => f.id === editingFaq)?.question
                  ? 'Edit Question'
                  : 'Add Question'}
              </h2>
              <InfoTooltip text="Add or edit a frequently asked question" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="p-4 border rounded-lg space-y-4 bg-white">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Question
                </label>
                <input
                  type="text"
                  value={faqs.find((f) => f.id === editingFaq)?.question || ''}
                  onChange={(e) =>
                    updateFaq(editingFaq, { question: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Enter your question here"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Answer
                </label>
                <textarea
                  value={faqs.find((f) => f.id === editingFaq)?.answer || ''}
                  onChange={(e) =>
                    updateFaq(editingFaq, { answer: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Enter your answer here"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
