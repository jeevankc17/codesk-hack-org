import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HackathonForm from './HackathonForm/HackathonForm';
import OrganizerForm from './OrganizerForm/OrganizerForm';
import ProjectForm from './ProjectForm/ProjectForm';
import BuilderForm from './BuilderForm/BuilderForm';
import { Home } from './Home/Home';
import { HackathonFormData } from './HackathonForm/types';
import { OrganizerFormData } from './OrganizerForm/types';
import { ProjectFormData } from './ProjectForm/types';
import { BuilderFormData } from './BuilderForm/types';

export function AppContent() {
  const navigate = useNavigate();

  const handleHackathonSubmit = async (data: HackathonFormData) => {
    try {
      const response = await fetch('/api/hackathons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create hackathon');
      const result = await response.json();
      navigate(`/hackathon/${result.id}`);
    } catch (error) {
      console.error('Error creating hackathon:', error);
    }
  };

  const handleOrganizerSubmit = async (data: OrganizerFormData) => {
    try {
      const response = await fetch('/api/organizers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create organizer profile');
      const result = await response.json();
      navigate(`/organizer/${result.id}`);
    } catch (error) {
      console.error('Error creating organizer profile:', error);
    }
  };

  const handleProjectSubmit = async (data: ProjectFormData) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit project');
      const result = await response.json();
      navigate(`/project/${result.id}`);
    } catch (error) {
      console.error('Error submitting project:', error);
    }
  };

  const handleBuilderSubmit = async (data: BuilderFormData) => {
    try {
      const response = await fetch('/api/builders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create builder profile');
      const result = await response.json();
      navigate(`/builder/${result.id}`);
    } catch (error) {
      console.error('Error creating builder profile:', error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/hackathon/form" 
        element={<HackathonForm onSubmit={handleHackathonSubmit} />} 
      />
      <Route 
        path="/organizer/form" 
        element={<OrganizerForm onSubmit={handleOrganizerSubmit} />} 
      />
      <Route 
        path="/project/form" 
        element={
          <ProjectForm 
            hackathonName="Demo Hackathon"
            organizerName="Demo Organizer"
            onSubmit={handleProjectSubmit}
          />
        } 
      />
      <Route 
        path="/builder/form" 
        element={<BuilderForm onSubmit={handleBuilderSubmit} />} 
      />
    </Routes>
  );
} 