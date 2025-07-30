import React from 'react';
import { TemplateType } from '../types';

interface TemplateSelectionProps {
  selectedTemplate: TemplateType;
  onTemplateSelect: (template: TemplateType) => void;
  onNext: () => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  selectedTemplate,
  onTemplateSelect,
  onNext,
}) => {
  const templates = [
    {
      id: 'modern' as TemplateType,
      name: 'Modern Professional',
      description: 'Clean, minimalist design perfect for corporate professionals and developers',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Clean Typography', 'Professional Layout', 'Minimalist Design', 'Mobile Responsive'],
      color: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      id: 'creative' as TemplateType,
      name: 'Creative Portfolio',
      description: 'Bold, colorful design ideal for designers, artists, and creative professionals',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Bold Colors', 'Creative Layout', 'Visual Impact', 'Interactive Elements'],
      color: 'bg-gradient-to-br from-pink-500 to-yellow-500'
    },
    {
      id: 'elegant' as TemplateType,
      name: 'Elegant Minimalist',
      description: 'Sophisticated and refined design for executives and consultants',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Elegant Typography', 'Sophisticated Layout', 'Premium Feel', 'Executive Style'],
      color: 'bg-gradient-to-br from-gray-700 to-gray-900'
    },
    {
      id: 'tech' as TemplateType,
      name: 'Tech Startup',
      description: 'Modern tech-focused design perfect for entrepreneurs and startup founders',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Tech Aesthetics', 'Innovation Focus', 'Dynamic Layout', 'Startup Vibes'],
      color: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      id: 'artistic' as TemplateType,
      name: 'Artistic Showcase',
      description: 'Visually stunning design for photographers, artists, and creative professionals',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Visual Focus', 'Gallery Layout', 'Artistic Elements', 'Showcase Design'],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Choose Your Portfolio Template
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Select a template that best represents your style and profession. You can customize it later with your content.
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                selectedTemplate === template.id
                  ? 'ring-4 ring-cyan-500 scale-105'
                  : 'hover:scale-105 hover:shadow-2xl'
              }`}
              onClick={() => onTemplateSelect(template.id)}
            >
              {/* Template Preview */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                {/* Template Header */}
                <div className={`${template.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-3">{template.name}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{template.description}</p>
                  </div>
                </div>

                {/* Template Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Template Features */}
                <div className="p-8">
                  <h4 className="font-semibold text-cyan-300 mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selection Indicator */}
                {selectedTemplate === template.id && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-3 shadow-2xl">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <button
            onClick={onNext}
            disabled={!selectedTemplate}
            className={`px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl ${
              selectedTemplate
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transform hover:scale-105'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue to Portfolio Builder
            <svg className="inline-block ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3">
            <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400 mt-3">Step 1 of 4</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection; 