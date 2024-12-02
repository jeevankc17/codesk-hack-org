import React from 'react';
import { cn } from '../utils/cn';
import { tabs, TabId } from '../constants/tabs';

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="border-b border-gray-200">
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="min-w-max px-4 sm:px-0">
          <div className="flex space-x-4 sm:space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'py-2 sm:py-4 px-2 sm:px-3 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors',
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
