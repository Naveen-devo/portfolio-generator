import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePortfolioContext } from '../context/PortfolioContext';

const PortfolioView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPortfolioById } = usePortfolioContext();
  const portfolio = id ? getPortfolioById(id) : null;

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Portfolio Not Found</h1>
          <p className="text-gray-600 mb-8">The portfolio you're looking for doesn't exist.</p>
          <Link to="/" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <span>🎨</span>
              <span>Portfolio Generator</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/gallery" className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-300">
                Gallery
              </Link>
              <Link to="/template" className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300">
                Create New
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {portfolio.hero.image && (
              <img 
                src={portfolio.hero.image} 
                alt={portfolio.hero.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
            )}
          </div>
          <h1 className="text-5xl font-bold mb-4">{portfolio.hero.name}</h1>
          <h2 className="text-2xl mb-4">{portfolio.hero.title}</h2>
          <p className="text-xl opacity-90 mb-8">{portfolio.hero.subtitle}</p>
          {portfolio.hero.ctaText && (
            <a 
              href={portfolio.hero.ctaLink} 
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              {portfolio.hero.ctaText}
            </a>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{portfolio.about.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📧</span>
                  <span>{portfolio.about.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📱</span>
                  <span>{portfolio.about.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">📍</span>
                  <span>{portfolio.about.location}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience & Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-800">{portfolio.about.experience} Years Experience</div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">{portfolio.about.education}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {portfolio.skills.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolio.skills.map((skill) => (
                <div key={skill.id} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl mb-3">{skill.icon || '💻'}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {portfolio.services.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.services.map((service) => (
                <div key={service.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {portfolio.projects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolio.projects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {portfolio.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolio.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">⭐</div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>{portfolio.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📱</span>
                  <span>{portfolio.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>{portfolio.contact.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="space-y-3 text-left">
                {portfolio.contact.linkedin && (
                  <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <span className="mr-3">💼</span>
                    <span>LinkedIn</span>
                  </a>
                )}
                {portfolio.contact.github && (
                  <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <span className="mr-3">🐙</span>
                    <span>GitHub</span>
                  </a>
                )}
                {portfolio.contact.twitter && (
                  <a href={portfolio.contact.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <span className="mr-3">🐦</span>
                    <span>Twitter</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Portfolio Generator. Created with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioView; 