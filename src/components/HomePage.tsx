import React from 'react';
import { TemplateType } from '../types';

interface HomePageProps {
  selectedTemplate: TemplateType;
  setSelectedTemplate: (template: TemplateType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            🎨 Portfolio Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create stunning, professional portfolios in minutes. Choose from beautiful templates 
            and showcase your skills, projects, and achievements with style.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Beautiful Templates</h3>
            <p className="text-gray-600">
              Choose from modern and creative templates designed by professionals
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quick & Easy</h3>
            <p className="text-gray-600">
              Fill out a simple form and get your portfolio ready in minutes
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Your portfolio looks great on all devices - desktop, tablet, and mobile
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => window.location.href = '/template'}
            className="w-full max-w-md mx-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            ✨ Create New Portfolio
          </button>
          <button
            onClick={() => window.location.href = '/gallery'}
            className="w-full max-w-md mx-auto px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-teal-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🎨 Browse Portfolios
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Portfolios Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Beautiful Templates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5⭐</div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 