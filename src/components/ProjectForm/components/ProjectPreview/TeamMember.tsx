import React from 'react';
import { TeamMemberProps } from './types';

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, avatar }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-all group">
      <div className="relative">
        <img
          src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-blue-100 transition-all"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
      </div>
      <div>
        <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
          {name}
        </div>
        <div className="text-gray-500 text-sm">
          {role}
        </div>
      </div>
    </div>
  );
};

export default TeamMember; 