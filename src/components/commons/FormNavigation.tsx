interface FormNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function FormNavigation({ onPrevious, onNext }: FormNavigationProps) {
  return (
    <div className="flex justify-between mt-8 pt-4 border-t">
      <button
        onClick={onPrevious}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
