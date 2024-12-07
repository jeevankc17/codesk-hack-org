import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import HackathonForm from './components/HackathonForm/HackathonForm';
import OrganizerForm from './components/OrganizerForm/OrganizerForm';
import ProjectForm from './components/ProjectForm/ProjectForm';
import BuilderForm from './components/BuilderForm/BuilderForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route 
          path="/hackathon/form" 
          element={
            <HackathonForm 
              onSubmit={(data) => {
                console.log('Hackathon form submitted:', data);
                // Add your hackathon submission logic here
              }}
            />
          } 
        />
        <Route 
          path="/organizer/form" 
          element={
            <OrganizerForm 
              onSubmit={(data) => {
                console.log('Organizer form submitted:', data);
                // Add your organizer submission logic here
              }} 
            />
          } 
        />
        <Route 
          path="/project/form" 
          element={
            <ProjectForm 
              hackathonName="Demo Hackathon"
              organizerName="Demo Organizer"
              onSubmit={(data) => {
                console.log('Project form submitted:', data);
                // Add your project submission logic here
              }} 
            />
          } 
        />
        <Route 
          path="/builder/form" 
          element={
            <BuilderForm 
              onSubmit={(data) => {
                console.log('Builder form submitted:', data);
                // Add your builder submission logic here
              }}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
