import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CodeskLab Hackathon Platform</h1>
          <p className="text-xl text-gray-600">Streamline your hackathon experience us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/hackathon/form"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Create Hackathon</h2>
            <p className="text-gray-600">Organize and manage your own hackathon event</p>
          </Link>

          <Link
            to="/builder/form"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Builder Profile</h2>
            <p className="text-gray-600">Create your builder profile to join hackathons</p>
          </Link>

          <Link
            to="/project/form"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Submit Project</h2>
            <p className="text-gray-600">Submit your project to a hackathon</p>
          </Link>

          <Link
            to="/organizer/form"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Organizer Profile</h2>
            <p className="text-gray-600">Create your organizer profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 