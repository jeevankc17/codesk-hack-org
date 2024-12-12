import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

// Immediately log that the file is being executed
console.log('index.tsx is executing');

// Create theme outside of render to catch any theme creation errors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Wrap the main rendering logic in a function for better error handling
function initializeApp() {
  console.log('Initializing app...');
  
  const rootElement = document.getElementById('root');
  console.log('Root element found:', !!rootElement);

  if (!rootElement) {
    throw new Error('Failed to find root element');
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log('Root created successfully');

    root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    );
    console.log('Render completed');
  } catch (error) {
    console.error('Failed to render app:', error);
    // Display error on page
    rootElement.innerHTML = `<div style="color: red;">Failed to load application. Check console for details.</div>`;
  }
}

// Execute initialization
initializeApp();
