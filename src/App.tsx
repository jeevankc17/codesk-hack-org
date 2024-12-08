import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AppContent } from './components/AppContent';

function App() {
  return (
    <Router>
      <MainLayout>
        <AppContent />
      </MainLayout>
    </Router>
  );
}

export default App;
