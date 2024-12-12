import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainLayout } from './components/layout/MainLayout';
import { AppContent } from './components/AppContent';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log('Environment check:', { 
  hasKey: !!PUBLISHABLE_KEY,
  env: process.env.NODE_ENV 
});

if (!PUBLISHABLE_KEY) {
  console.error('Missing CLERK_PUBLISHABLE_KEY');
  throw new Error('Missing REACT_APP_CLERK_PUBLISHABLE_KEY');
}

function AppRoutes() {
  console.log('AppRoutes mounting...');
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
        <ToastContainer />
      </MainLayout>
    </Router>
  );
}

function App() {
  console.log('App component mounting...');
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY!}>
        <AppRoutes />
      </ClerkProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
