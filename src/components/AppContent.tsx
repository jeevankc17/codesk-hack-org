import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useQueryClient, useMutation as useReactQuery } from '@tanstack/react-query';
import HackathonForm from './HackathonForm/HackathonForm';
import OrganizerForm from './OrganizerForm/OrganizerForm';
import ProjectForm from './ProjectForm/ProjectForm';
import BuilderForm from './BuilderForm/BuilderForm';
import { Home } from './Home/Home';
import { ApiService } from '../services/api';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { ProtectedPage } from './auth/ProtectedPage';

type FormType = 'hackathon' | 'organizer' | 'project' | 'builder';

interface ApiResponse {
  id: string;
  [key: string]: any;
}

interface MutationVariables {
  formType: FormType;
  data: object;
}

export function AppContent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createResourceMutation = useReactQuery<
    { id: string },
    Error,
    MutationVariables
  >({
    mutationFn: async ({ formType, data }) => {
      const response = await ApiService.createResource(formType, data);
      return { id: response.data.id };
    },
    onSuccess: (result, { formType }) => {
      navigate(`/${formType}/${result.id}`);
      queryClient.invalidateQueries({ queryKey: [formType] });
    },
  });

  const handleFormSubmit = async <T extends object>(
    formType: FormType,
    data: T
  ) => {
    createResourceMutation.mutate({ formType, data });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/hackathon/form" 
        element={
          <HackathonForm 
            onSubmit={(data) => handleFormSubmit('hackathon', data)}
            isLoading={createResourceMutation.isPending} 
          />
        } 
      />
      <Route 
        path="/organizer/form" 
        element={
          <OrganizerForm 
            onSubmit={(data) => handleFormSubmit('organizer', data)} 
          />
        } 
      />
      <Route 
        path="/project/form" 
        element={
          <ProjectForm 
            hackathonName="Demo Hackathon"
            organizerName="Demo Organizer"
            onSubmit={(data) => handleFormSubmit('project', data)}
          />
        } 
      />
      <Route 
        path="/builder/form" 
        element={
          <BuilderForm 
            onSubmit={(data) => handleFormSubmit('builder', data)} 
          />
        } 
      />
      <Route
        path="/protected-route"
        element={
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
} 