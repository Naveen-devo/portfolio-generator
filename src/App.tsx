import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import { TemplateType } from './types';
import TemplateSelection from './components/TemplateSelection';
import PortfolioBuilderForm from './components/PortfolioBuilderForm';
import PortfolioList from './components/PortfolioList';
import PortfolioView from './components/PortfolioView';
import HomePage from './components/HomePage';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');

  return (
    <PortfolioProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />} />
            <Route path="/template" element={<TemplateSelection selectedTemplate={selectedTemplate} onTemplateSelect={setSelectedTemplate} onNext={() => window.location.href = '/builder'} />} />
            <Route path="/builder" element={<PortfolioBuilderForm selectedTemplate={selectedTemplate} />} />
            <Route path="/gallery" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<PortfolioView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </PortfolioProvider>
  );
}

export default App;
