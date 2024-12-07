import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  id: string;
  label: string;
  description: string;
  dimensions: string;
  maxSize: string;
  onChange: (file: File | null) => void;
}

export function FileUpload({
  id,
  label,
  description,
  dimensions,
  maxSize,
  onChange,
}: FileUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        onChange(file);
      }
    },
    [onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onChange(file);
      }
    },
    [onChange]
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
      >
        <input
          type="file"
          id={id}
          className="sr-only"
          onChange={handleChange}
          accept="image/png,image/jpeg"
        />
        <div className="space-y-3">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="text-sm text-gray-600">
            <label
              htmlFor={id}
              className="text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              Drag and drop or click to choose
            </label>
          </div>
          <p className="text-xs text-gray-500">{dimensions}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}