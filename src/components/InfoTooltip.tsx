import React from 'react';
import { HelpCircle } from 'lucide-react';

interface InfoTooltipProps {
  text: string;
}

export function InfoTooltip({ text }: InfoTooltipProps) {
  return (
    <div className="group relative">
      <HelpCircle className="w-5 h-5 text-blue-500 cursor-help" />
      <div className="absolute left-full ml-2 w-64 p-2 bg-white rounded-lg shadow-lg border border-gray-200 text-sm text-gray-600 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity">
        {text}
      </div>
    </div>
  );
}