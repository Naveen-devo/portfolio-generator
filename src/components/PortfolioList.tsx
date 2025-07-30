import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioContext } from '../context/PortfolioContext';
import { Portfolio, PortfolioFilters } from '../types';
import ProfileCard from './ProfileCard';

const PortfolioList: React.FC = () => {
  const { portfolios, getPortfolioById } = usePortfolioContext();
  const [filters, setFilters] = useState<PortfolioFilters>({});
  const [searchTerm, setSearchTerm] = useState('');

  console.log('PortfolioList: Current portfolios:', portfolios.length);

  // Function to clear cache and reload new profiles
  const clearCacheAndReload = () => {
    localStorage.removeItem('portfolios');
    window.location.reload();
  };

  // Function to manually load sample portfolios (for testing)
  const loadSamplePortfolios = () => {
    const { samplePortfolios } = require('../data/samplePortfolios');
    
    // Create multiple duplicates of each sample portfolio
    const duplicatedPortfolios: any[] = [];
    const duplicatesPerTemplate = 3; // Create 3 copies of each template
    
    for (let i = 0; i < duplicatesPerTemplate; i++) {
      samplePortfolios.forEach((portfolio: any, index: number) => {
        const duplicatedPortfolio = {
          ...portfolio,
          id: `sample-${index + 1}-copy-${i + 1}`,
          hero: {
            ...portfolio.hero,
            name: `${portfolio.hero.name} ${i + 1}`,
            title: `${portfolio.hero.title} ${i + 1}`,
          },
          about: {
            ...portfolio.about,
            email: `copy${i + 1}.${portfolio.about.email}`,
            phone: `+1 (555) ${100 + i}-${200 + index}-${300 + i}`,
          },
          createdAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000) - (i * 2 * 60 * 60 * 1000)),
          updatedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000) - (i * 2 * 60 * 60 * 1000)),
        };
        duplicatedPortfolios.push(duplicatedPortfolio);
      });
    }
    
    localStorage.setItem('portfolios', JSON.stringify(duplicatedPortfolios));
    window.location.reload();
  };

  const filteredPortfolios = portfolios.filter(portfolio => {
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        portfolio.hero.name.toLowerCase().includes(searchLower) ||
        portfolio.hero.title.toLowerCase().includes(searchLower) ||
        portfolio.about.bio.toLowerCase().includes(searchLower) ||
        portfolio.skills.some(skill => skill.name.toLowerCase().includes(searchLower));
      
      if (!matchesSearch) return false;
    }

    // Skills filter
    if (filters.skills && filters.skills.length > 0) {
      const hasMatchingSkill = portfolio.skills.some(skill => 
        filters.skills!.includes(skill.name)
      );
      if (!hasMatchingSkill) return false;
    }

    // Role filter
    if (filters.role) {
      if (!portfolio.hero.title.toLowerCase().includes(filters.role.toLowerCase())) {
        return false;
      }
    }

    // Template filter
    if (filters.template && portfolio.template !== filters.template) {
      return false;
    }

    return true;
  });

  console.log('PortfolioList: Filtered portfolios:', filteredPortfolios.length);

  const allSkills = Array.from(new Set(
    portfolios.flatMap(portfolio => portfolio.skills.map(skill => skill.name))
  )).sort();

  const allRoles = Array.from(new Set(
    portfolios.map(portfolio => portfolio.hero.title)
  )).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md shadow-2xl sticky top-0 z-50 mb-8 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              <span>🎨</span>
              <span>Portfolio Generator</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/template" className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
                Create New
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            🎨 Portfolio Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover amazing portfolios created by talented professionals from around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">
                🔍 Search Portfolios
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, title, or skills..."
                className="w-full px-4 py-3 bg-white/10 border-2 border-cyan-500/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
              />
            </div>

            {/* Skills Filter */}
            <div>
              <label className="block text-sm font-medium text-purple-300 mb-2">
                🛠️ Filter by Skills
              </label>
              <select
                value={filters.skills?.[0] || ''}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  skills: e.target.value ? [e.target.value] : undefined
                }))}
                className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white backdrop-blur-sm"
              >
                <option value="">All Skills</option>
                {allSkills.map((skill) => (
                  <option key={skill} value={skill} className="bg-slate-800">{skill}</option>
                ))}
              </select>
            </div>

            {/* Role Filter */}
            <div>
              <label className="block text-sm font-medium text-emerald-300 mb-2">
                👔 Filter by Role
              </label>
              <select
                value={filters.role || ''}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  role: e.target.value || undefined
                }))}
                className="w-full px-4 py-3 bg-white/10 border-2 border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-white backdrop-blur-sm"
              >
                <option value="">All Roles</option>
                {allRoles.map((role) => (
                  <option key={role} value={role} className="bg-slate-800">{role}</option>
                ))}
              </select>
            </div>

            {/* Template Filter */}
            <div>
              <label className="block text-sm font-medium text-pink-300 mb-2">
                🎨 Filter by Template
              </label>
              <select
                value={filters.template || ''}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  template: e.target.value as 'modern' | 'creative' | 'elegant' | 'tech' | 'artistic' | undefined
                }))}
                className="w-full px-4 py-3 bg-white/10 border-2 border-pink-500/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-white backdrop-blur-sm"
              >
                <option value="">All Templates</option>
                <option value="modern">Modern</option>
                <option value="creative">Creative</option>
                <option value="elegant">Elegant</option>
                <option value="tech">Tech Startup</option>
                <option value="artistic">Artistic</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || filters.skills || filters.role || filters.template) && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({});
                }}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                🗑️ Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-lg text-gray-300">
              Showing <span className="font-bold text-cyan-400">{filteredPortfolios.length}</span> of{' '}
              <span className="font-bold text-purple-400">{portfolios.length}</span> portfolios
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white backdrop-blur-sm">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        {filteredPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPortfolios.map((portfolio) => (
              <div key={portfolio.id} className="animate-fade-in">
                <ProfileCard
                  portfolio={portfolio}
                  onClick={() => window.location.href = `/portfolio/${portfolio.id}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-white mb-4">No portfolios found</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Try adjusting your search criteria or filters
            </p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({});
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 mr-4 shadow-lg"
              >
                Clear Filters
              </button>
              <button
                onClick={loadSamplePortfolios}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 mr-4 shadow-lg"
              >
                Load Sample Portfolios
              </button>
              <button
                onClick={clearCacheAndReload}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                Clear Cache & Reload
              </button>
            </div>
          </div>
        )}

        {/* Create New Portfolio Button */}
        <div className="text-center mt-16">
          <Link
            to="/template"
            className="inline-block px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-2xl font-bold text-xl hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            ✨ Create Your Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList; 