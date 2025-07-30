import React from 'react';
import { Portfolio } from '../types';

interface ProfileCardProps {
  portfolio: Portfolio;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ portfolio, onClick }) => {
  const isSamplePortfolio = portfolio.id.startsWith('sample-');
  
  const getTemplateLabel = (template: string) => {
    switch (template) {
      case 'modern': return 'Modern';
      case 'creative': return 'Creative';
      case 'elegant': return 'Elegant';
      case 'tech': return 'Tech Startup';
      case 'artistic': return 'Artistic';
      default: return 'Portfolio';
    }
  };

  const getTemplateGradient = (template: string) => {
    switch (template) {
      case 'modern': return 'from-cyan-500 via-blue-500 to-purple-600';
      case 'creative': return 'from-pink-500 via-purple-500 to-indigo-600';
      case 'elegant': return 'from-slate-600 via-gray-700 to-slate-800';
      case 'tech': return 'from-emerald-500 via-teal-500 to-cyan-600';
      case 'artistic': return 'from-violet-500 via-purple-500 to-pink-600';
      default: return 'from-cyan-500 via-blue-500 to-purple-600';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group overflow-hidden border border-white/20 hover:border-white/40"
    >
      {/* Sample Portfolio Badge */}
      {isSamplePortfolio && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full font-medium shadow-lg">
            ✨ Sample
          </span>
        </div>
      )}

      {/* Header with gradient */}
      <div className={`h-40 bg-gradient-to-r ${getTemplateGradient(portfolio.template)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/30">
            {getTemplateLabel(portfolio.template)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold truncate">
            {portfolio.hero?.name || 'Portfolio'}
          </h3>
          <p className="text-white/90 text-sm truncate">
            {portfolio.hero?.title || 'Professional'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Profile Image */}
        <div className="flex justify-center -mt-16 mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 backdrop-blur-sm">
            {portfolio.hero?.image ? (
              <img 
                src={portfolio.hero.image} 
                alt={portfolio.hero?.name || 'Profile'} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-full h-full flex items-center justify-center text-3xl ${portfolio.hero?.image ? 'hidden' : ''}`}>
              👤
            </div>
          </div>
        </div>

        {/* About */}
        <div className="text-center mb-6">
          <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
            {portfolio.about?.bio || 'No description available'}
          </p>
        </div>

        {/* Skills Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-300 mb-3">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {portfolio.skills?.slice(0, 3).map((skill, index) => (
              <span 
                key={skill.id}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs rounded-full font-medium border border-cyan-500/30 backdrop-blur-sm"
              >
                {skill.name}
              </span>
            ))}
            {(!portfolio.skills || portfolio.skills.length === 0) && (
              <span className="text-gray-500 text-xs">No skills listed</span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-xl font-bold text-cyan-400">
              {portfolio.projects?.length || 0}
            </div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-400">
              {portfolio.services?.length || 0}
            </div>
            <div className="text-xs text-gray-400">Services</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-pink-400">
              {portfolio.testimonials?.length || 0}
            </div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400">📧</span>
              <span className="text-gray-300 truncate">
                {portfolio.contact?.email || 'No email'}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-purple-400">📍</span>
              <span className="text-gray-300 truncate">
                {portfolio.about?.location || 'No location'}
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gradient-to-r from-white/5 to-white/10 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {isSamplePortfolio ? 'Sample Portfolio' : `Created: ${new Date(portfolio.createdAt).toLocaleDateString()}`}
          </span>
          <span className="text-xs text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
            Click to view →
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 