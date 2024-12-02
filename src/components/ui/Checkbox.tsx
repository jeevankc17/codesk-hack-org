import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

export function Checkbox({ checked, disabled, className, ...props }: CheckboxProps) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <div
        className={cn(
          'h-4 w-4 rounded border transition-colors',
          checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          className
        )}
      >
        {checked && (
          <Check className="h-3 w-3 text-white stroke-[3]" />
        )}
      </div>
    </div>
  );
}