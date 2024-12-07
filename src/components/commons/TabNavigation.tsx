import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps<T extends string> {
  activeTab: T;
  onTabChange: (tab: T) => void;
  tabs: readonly { id: T; label: string; }[];
}

export function TabNavigation<T extends string>({ 
  activeTab, 
  onTabChange,
  tabs 
}: TabNavigationProps<T>) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}