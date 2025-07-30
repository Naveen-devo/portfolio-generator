import React, { useState } from 'react';
import { usePortfolioContext } from '../context/PortfolioContext';
import { Portfolio, TemplateType } from '../types';

interface PortfolioBuilderFormProps {
  selectedTemplate: TemplateType;
}

const PortfolioBuilderForm: React.FC<PortfolioBuilderFormProps> = ({ selectedTemplate }) => {
  const { createPortfolio } = usePortfolioContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Portfolio>>({
    id: '',
    template: selectedTemplate,
    hero: {
      name: '',
      title: '',
      subtitle: '',
      image: '',
      ctaText: '',
      ctaLink: ''
    },
    about: {
      bio: '',
      experience: 0,
      education: '',
      location: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      website: ''
    },
    skills: [],
    services: [],
    projects: [],
    testimonials: [],
    blog: [],
    contact: {
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
      twitter: '',
      instagram: ''
    }
  });

  const totalSteps = 9;

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => {
      const currentSection = prev[section as keyof Portfolio];
      if (currentSection && typeof currentSection === 'object') {
        return {
          ...prev,
          [section]: { ...currentSection, ...data }
        };
      }
      return {
        ...prev,
        [section]: data
      };
    });
  };

  const handleSubmit = () => {
    const portfolio: Portfolio = {
      id: Date.now().toString(),
      template: formData.template || 'modern',
      hero: formData.hero || {
        name: '',
        title: '',
        subtitle: '',
        image: '',
        ctaText: '',
        ctaLink: ''
      },
      about: formData.about || {
        bio: '',
        experience: 0,
        education: '',
        location: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        website: ''
      },
      skills: formData.skills || [],
      services: formData.services || [],
      projects: formData.projects || [],
      testimonials: formData.testimonials || [],
      blog: formData.blog || [],
      contact: formData.contact || {
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        github: '',
        twitter: '',
        instagram: ''
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    createPortfolio(portfolio);
    alert('Portfolio created successfully!');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
              i + 1 < currentStep 
                ? 'bg-gradient-to-r from-green-400 to-green-600' 
                : i + 1 === currentStep 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse' 
                : 'bg-gradient-to-r from-gray-400 to-gray-600'
            }`}>
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                i + 1 < currentStep 
                  ? 'bg-gradient-to-r from-green-400 to-green-600' 
                  : 'bg-gradient-to-r from-gray-300 to-gray-400'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <span className="text-lg font-semibold text-gray-700">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  );

  const renderHeroSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        🚀 Hero Section
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={formData.hero?.name || ''}
            onChange={(e) => updateFormData('hero', { name: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
          <input
            type="text"
            value={formData.hero?.title || ''}
            onChange={(e) => updateFormData('hero', { title: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Full Stack Developer"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
          <input
            type="text"
            value={formData.hero?.subtitle || ''}
            onChange={(e) => updateFormData('hero', { subtitle: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Passionate about creating amazing digital experiences"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
          <input
            type="url"
            value={formData.hero?.image || ''}
            onChange={(e) => updateFormData('hero', { image: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="https://example.com/profile.jpg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CTA Text</label>
          <input
            type="text"
            value={formData.hero?.ctaText || ''}
            onChange={(e) => updateFormData('hero', { ctaText: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Get In Touch"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CTA Link</label>
          <input
            type="url"
            value={formData.hero?.ctaLink || ''}
            onChange={(e) => updateFormData('hero', { ctaLink: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="https://example.com/contact"
          />
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
        📖 About Me
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
        <textarea
          value={formData.about?.bio || ''}
          onChange={(e) => updateFormData('about', { bio: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Tell your story, your passion, and what drives you..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
          <input
            type="number"
            value={formData.about?.experience || 0}
            onChange={(e) => updateFormData('about', { experience: parseInt(e.target.value) || 0 })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
          <input
            type="text"
            value={formData.about?.education || ''}
            onChange={(e) => updateFormData('about', { education: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="Bachelor's in Computer Science"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={formData.about?.location || ''}
            onChange={(e) => updateFormData('about', { location: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="New York, NY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.about?.email || ''}
            onChange={(e) => updateFormData('about', { email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={formData.about?.phone || ''}
            onChange={(e) => updateFormData('about', { phone: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
          <input
            type="url"
            value={formData.about?.linkedin || ''}
            onChange={(e) => updateFormData('about', { linkedin: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
          <input
            type="url"
            value={formData.about?.github || ''}
            onChange={(e) => updateFormData('about', { github: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="https://github.com/johndoe"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            value={formData.about?.website || ''}
            onChange={(e) => updateFormData('about', { website: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            placeholder="https://johndoe.com"
          />
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
        🛠️ Skills & Expertise
      </h2>
      <div className="space-y-4">
        <p className="text-center text-gray-600">
          Add your skills one by one. Each skill will be displayed with a progress bar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skill Name</label>
            <input
              type="text"
              placeholder="React"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level (1-100)</label>
            <input
              type="number"
              min="1"
              max="100"
              placeholder="85"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="design">Design</option>
              <option value="tools">Tools</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300">
              Add Skill
            </button>
          </div>
        </div>
        
        {/* Skills List */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Your Skills:</h4>
          <div className="space-y-3">
            {formData.skills?.map((skill, index) => (
              <div key={skill.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-4">
                  <span className="text-lg">{skill.icon || '💻'}</span>
                  <div>
                    <div className="font-medium text-gray-800">{skill.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{skill.category}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  <button className="text-red-500 hover:text-red-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            {(!formData.skills || formData.skills.length === 0) && (
              <div className="text-center py-8 text-gray-500">
                No skills added yet. Add your first skill above!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        💼 Services
      </h2>
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                <input
                  type="text"
                  value={formData.services?.[index]?.title || ''}
                  onChange={(e) => {
                    const newServices = [...(formData.services || [])];
                    newServices[index] = { ...newServices[index], title: e.target.value };
                    setFormData(prev => ({ ...prev, services: newServices }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Web Development"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji)</label>
                <input
                  type="text"
                  value={formData.services?.[index]?.icon || ''}
                  onChange={(e) => {
                    const newServices = [...(formData.services || [])];
                    newServices[index] = { ...newServices[index], icon: e.target.value };
                    setFormData(prev => ({ ...prev, services: newServices }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="💻"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.services?.[index]?.description || ''}
                  onChange={(e) => {
                    const newServices = [...(formData.services || [])];
                    newServices[index] = { ...newServices[index], description: e.target.value };
                    setFormData(prev => ({ ...prev, services: newServices }));
                  }}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Description of the service..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
        🚀 Projects
      </h2>
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-300 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                <input
                  type="text"
                  value={formData.projects?.[index]?.title || ''}
                  onChange={(e) => {
                    const newProjects = [...(formData.projects || [])];
                    newProjects[index] = { ...newProjects[index], title: e.target.value };
                    setFormData(prev => ({ ...prev, projects: newProjects }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="E-commerce Platform"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Image URL</label>
                <input
                  type="url"
                  value={formData.projects?.[index]?.image || ''}
                  onChange={(e) => {
                    const newProjects = [...(formData.projects || [])];
                    newProjects[index] = { ...newProjects[index], image: e.target.value };
                    setFormData(prev => ({ ...prev, projects: newProjects }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://example.com/project.jpg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.projects?.[index]?.description || ''}
                  onChange={(e) => {
                    const newProjects = [...(formData.projects || [])];
                    newProjects[index] = { ...newProjects[index], description: e.target.value };
                    setFormData(prev => ({ ...prev, projects: newProjects }));
                  }}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Project description..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.projects?.[index]?.technologies?.join(', ') || ''}
                  onChange={(e) => {
                    const newProjects = [...(formData.projects || [])];
                    newProjects[index] = { ...newProjects[index], technologies: e.target.value.split(',').map(s => s.trim()).filter(s => s) };
                    setFormData(prev => ({ ...prev, projects: newProjects }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="React, Node.js, MongoDB..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Live URL</label>
                <input
                  type="url"
                  value={formData.projects?.[index]?.liveUrl || ''}
                  onChange={(e) => {
                    const newProjects = [...(formData.projects || [])];
                    newProjects[index] = { ...newProjects[index], liveUrl: e.target.value };
                    setFormData(prev => ({ ...prev, projects: newProjects }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://project-demo.com"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
        ⭐ Testimonials
      </h2>
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-yellow-300 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <input
                  type="text"
                  value={formData.testimonials?.[index]?.name || ''}
                  onChange={(e) => {
                    const newTestimonials = [...(formData.testimonials || [])];
                    newTestimonials[index] = { ...newTestimonials[index], name: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Role</label>
                <input
                  type="text"
                  value={formData.testimonials?.[index]?.role || ''}
                  onChange={(e) => {
                    const newTestimonials = [...(formData.testimonials || [])];
                    newTestimonials[index] = { ...newTestimonials[index], role: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="CEO, Tech Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.testimonials?.[index]?.company || ''}
                  onChange={(e) => {
                    const newTestimonials = [...(formData.testimonials || [])];
                    newTestimonials[index] = { ...newTestimonials[index], company: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tech Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={formData.testimonials?.[index]?.rating || 5}
                  onChange={(e) => {
                    const newTestimonials = [...(formData.testimonials || [])];
                    newTestimonials[index] = { ...newTestimonials[index], rating: parseInt(e.target.value) || 5 };
                    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Testimonial</label>
                <textarea
                  value={formData.testimonials?.[index]?.content || ''}
                  onChange={(e) => {
                    const newTestimonials = [...(formData.testimonials || [])];
                    newTestimonials[index] = { ...newTestimonials[index], content: e.target.value };
                    setFormData(prev => ({ ...prev, testimonials: newTestimonials }));
                  }}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Amazing work and great communication..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBlogSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
        📝 Blog Posts
      </h2>
      <div className="space-y-4">
        {[0, 1, 2].map((index) => (
          <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-emerald-300 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
                <input
                  type="text"
                  value={formData.blog?.[index]?.title || ''}
                  onChange={(e) => {
                    const newBlog = [...(formData.blog || [])];
                    newBlog[index] = { ...newBlog[index], title: e.target.value };
                    setFormData(prev => ({ ...prev, blog: newBlog }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="My Latest Blog Post"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blog Image URL</label>
                <input
                  type="url"
                  value={formData.blog?.[index]?.image || ''}
                  onChange={(e) => {
                    const newBlog = [...(formData.blog || [])];
                    newBlog[index] = { ...newBlog[index], image: e.target.value };
                    setFormData(prev => ({ ...prev, blog: newBlog }));
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://example.com/blog-image.jpg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={formData.blog?.[index]?.excerpt || ''}
                  onChange={(e) => {
                    const newBlog = [...(formData.blog || [])];
                    newBlog[index] = { ...newBlog[index], excerpt: e.target.value };
                    setFormData(prev => ({ ...prev, blog: newBlog }));
                  }}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Brief summary of the blog post..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={formData.blog?.[index]?.content || ''}
                  onChange={(e) => {
                    const newBlog = [...(formData.blog || [])];
                    newBlog[index] = { ...newBlog[index], content: e.target.value };
                    setFormData(prev => ({ ...prev, blog: newBlog }));
                  }}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Full blog post content..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
        📞 Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.contact?.email || ''}
            onChange={(e) => updateFormData('contact', { email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={formData.contact?.phone || ''}
            onChange={(e) => updateFormData('contact', { phone: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="+1 234 567 8900"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            value={formData.contact?.address || ''}
            onChange={(e) => updateFormData('contact', { address: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="123 Main St, New York, NY 10001"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
          <input
            type="url"
            value={formData.contact?.linkedin || ''}
            onChange={(e) => updateFormData('contact', { linkedin: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
          <input
            type="url"
            value={formData.contact?.github || ''}
            onChange={(e) => updateFormData('contact', { github: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="https://github.com/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
          <input
            type="url"
            value={formData.contact?.twitter || ''}
            onChange={(e) => updateFormData('contact', { twitter: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="https://twitter.com/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
          <input
            type="url"
            value={formData.contact?.instagram || ''}
            onChange={(e) => updateFormData('contact', { instagram: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="https://instagram.com/johndoe"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Write a message for visitors to see on your contact page..."
          />
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderHeroSection();
      case 2: return renderAboutSection();
      case 3: return renderSkillsSection();
      case 4: return renderServicesSection();
      case 5: return renderProjectsSection();
      case 6: return renderTestimonialsSection();
      case 7: return renderBlogSection();
      case 8: return renderContactSection();
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {renderStepIndicator()}
          
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 hover:scale-105'
              }`}
            >
              ← Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-teal-700 hover:scale-105 transition-all duration-300 animate-pulse"
              >
                🎉 Create Portfolio
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilderForm; 