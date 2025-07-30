import { Portfolio } from '../types';

export const samplePortfolios: Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    template: 'modern',
    hero: {
      name: 'James Wilson',
      title: 'Full Stack Developer',
      subtitle: 'Building innovative web solutions with cutting-edge technologies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ctaText: 'View Projects',
      ctaLink: '#projects'
    },
    about: {
      bio: 'Passionate full-stack developer with 6+ years of experience creating scalable applications. Specialized in React, Node.js, and cloud technologies.',
      experience: 6,
      education: 'B.S. Computer Science, University of California',
      location: 'Seattle, WA',
      email: 'james.wilson@techdev.com',
      phone: '+1 (555) 234-5678',
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson',
      website: 'https://jameswilson.dev'
    },
    skills: [
      { id: '1', name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
      { id: '2', name: 'Node.js', level: 92, category: 'backend', icon: '🟢' },
      { id: '3', name: 'TypeScript', level: 90, category: 'frontend', icon: '📘' },
      { id: '4', name: 'Python', level: 88, category: 'backend', icon: '🐍' },
      { id: '5', name: 'AWS', level: 85, category: 'tools', icon: '☁️' },
      { id: '6', name: 'Docker', level: 82, category: 'tools', icon: '🐳' }
    ],
    services: [
      { id: '1', title: 'Web Development', description: 'Full-stack web applications with modern frameworks', icon: '💻' },
      { id: '2', title: 'API Development', description: 'RESTful and GraphQL APIs with best practices', icon: '🔌' },
      { id: '3', title: 'Cloud Solutions', description: 'Scalable cloud infrastructure on AWS and Azure', icon: '☁️' }
    ],
    projects: [
      {
        id: '1',
        title: 'E-Learning Platform',
        description: 'A comprehensive learning management system with video streaming and analytics',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        liveUrl: 'https://elearning-platform.com',
        githubUrl: 'https://github.com/jameswilson/elearning',
        featured: true
      },
      {
        id: '2',
        title: 'Social Media Dashboard',
        description: 'Real-time social media analytics and management platform',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Vue.js', 'Firebase', 'Chart.js'],
        liveUrl: 'https://social-dashboard.com',
        githubUrl: 'https://github.com/jameswilson/social-dashboard',
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Jennifer Davis',
        role: 'Product Manager',
        company: 'TechCorp',
        content: 'James delivered exceptional results and exceeded our expectations.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ],
    blog: [],
    contact: {
      email: 'james.wilson@techdev.com',
      phone: '+1 (555) 234-5678',
      address: 'Seattle, WA',
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson',
      twitter: 'https://twitter.com/jameswilson'
    }
  },
  {
    template: 'creative',
    hero: {
      name: 'Maria Rodriguez',
      title: 'Creative Director',
      subtitle: 'Transforming ideas into stunning visual experiences',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ctaText: 'See My Work',
      ctaLink: '#projects'
    },
    about: {
      bio: 'Creative director with 8+ years of experience in branding, digital design, and visual storytelling. Passionate about creating memorable brand experiences.',
      experience: 8,
      education: 'B.F.A. Graphic Design, Parsons School of Design',
      location: 'Los Angeles, CA',
      email: 'maria.rodriguez@creative.com',
      phone: '+1 (555) 345-6789',
      linkedin: 'https://linkedin.com/in/mariarodriguez',
      github: 'https://github.com/mariarodriguez',
      website: 'https://mariarodriguez.design'
    },
    skills: [
      { id: '1', name: 'Adobe Creative Suite', level: 95, category: 'design', icon: '🎨' },
      { id: '2', name: 'Figma', level: 92, category: 'design', icon: '🎯' },
      { id: '3', name: 'Sketch', level: 88, category: 'design', icon: '📱' },
      { id: '4', name: 'Brand Strategy', level: 90, category: 'design', icon: '🎭' },
      { id: '5', name: 'Motion Graphics', level: 85, category: 'design', icon: '🎬' },
      { id: '6', name: 'Typography', level: 92, category: 'design', icon: '📝' }
    ],
    services: [
      { id: '1', title: 'Brand Identity', description: 'Complete brand identity and visual systems', icon: '🎨' },
      { id: '2', title: 'Digital Design', description: 'Web and mobile interface design', icon: '💻' },
      { id: '3', title: 'Creative Direction', description: 'Art direction and creative strategy', icon: '🎭' }
    ],
    projects: [
      {
        id: '1',
        title: 'Fashion Brand Rebrand',
        description: 'Complete rebranding for a luxury fashion brand including logo, packaging, and digital presence',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
        liveUrl: 'https://fashion-rebrand.com',
        featured: true
      },
      {
        id: '2',
        title: 'Restaurant Brand Identity',
        description: 'Brand identity design for a modern farm-to-table restaurant chain',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Adobe Creative Suite', 'Typography', 'Color Theory'],
        liveUrl: 'https://restaurant-brand.com',
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'David Thompson',
        role: 'Marketing Director',
        company: 'Fashion House',
        content: 'Maria transformed our brand with her creative vision and attention to detail.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ],
    blog: [],
    contact: {
      email: 'maria.rodriguez@creative.com',
      phone: '+1 (555) 345-6789',
      address: 'Los Angeles, CA',
      linkedin: 'https://linkedin.com/in/mariarodriguez',
      github: 'https://github.com/mariarodriguez',
      twitter: 'https://twitter.com/mariarodriguez'
    }
  },
  {
    template: 'elegant',
    hero: {
      name: 'Dr. Robert Anderson',
      title: 'Senior Business Consultant',
      subtitle: 'Strategic solutions for enterprise transformation and growth',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ctaText: 'Schedule Consultation',
      ctaLink: '#contact'
    },
    about: {
      bio: 'Senior business consultant with 15+ years helping Fortune 500 companies optimize operations, drive innovation, and achieve sustainable growth.',
      experience: 15,
      education: 'MBA, Harvard Business School',
      location: 'Chicago, IL',
      email: 'robert.anderson@consulting.com',
      phone: '+1 (555) 456-7890',
      linkedin: 'https://linkedin.com/in/robertanderson',
      github: '',
      website: 'https://robertandersonconsulting.com'
    },
    skills: [
      { id: '1', name: 'Strategic Planning', level: 95, category: 'other', icon: '📊' },
      { id: '2', name: 'Business Analysis', level: 92, category: 'other', icon: '📈' },
      { id: '3', name: 'Process Optimization', level: 90, category: 'other', icon: '⚙️' },
      { id: '4', name: 'Change Management', level: 88, category: 'other', icon: '🔄' },
      { id: '5', name: 'Financial Modeling', level: 85, category: 'other', icon: '💰' },
      { id: '6', name: 'Leadership', level: 92, category: 'other', icon: '👥' }
    ],
    services: [
      { id: '1', title: 'Strategic Consulting', description: 'Business strategy and transformation consulting', icon: '📊' },
      { id: '2', title: 'Process Optimization', description: 'Streamlining operations and improving efficiency', icon: '⚙️' },
      { id: '3', title: 'Change Management', description: 'Guiding organizations through transformation', icon: '🔄' }
    ],
    projects: [
      {
        id: '1',
        title: 'Global Supply Chain Optimization',
        description: 'Reduced operational costs by 30% through supply chain restructuring for a manufacturing company',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Process Mapping', 'Data Analysis', 'Change Management'],
        featured: true
      },
      {
        id: '2',
        title: 'Digital Transformation Initiative',
        description: 'Led digital transformation for a traditional retail chain, increasing online sales by 400%',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Digital Strategy', 'Technology Implementation', 'Training Programs'],
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Lisa Chen',
        role: 'CEO',
        company: 'Manufacturing Corp',
        content: 'Dr. Anderson\'s strategic insights completely transformed our business operations.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ],
    blog: [],
    contact: {
      email: 'robert.anderson@consulting.com',
      phone: '+1 (555) 456-7890',
      address: 'Chicago, IL',
      linkedin: 'https://linkedin.com/in/robertanderson',
      github: '',
      twitter: 'https://twitter.com/robertanderson'
    }
  },
  {
    template: 'tech',
    hero: {
      name: 'Emma Thompson',
      title: 'AI Research Scientist',
      subtitle: 'Pioneering the future of artificial intelligence and machine learning',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ctaText: 'Explore Research',
      ctaLink: '#projects'
    },
    about: {
      bio: 'AI research scientist with 7+ years developing cutting-edge machine learning algorithms. Published 20+ papers and led research teams at top tech companies.',
      experience: 7,
      education: 'Ph.D. Computer Science, Stanford University',
      location: 'San Francisco, CA',
      email: 'emma.thompson@ai-research.com',
      phone: '+1 (555) 567-8901',
      linkedin: 'https://linkedin.com/in/emmathompson',
      github: 'https://github.com/emmathompson',
      website: 'https://emmathompson.ai'
    },
    skills: [
      { id: '1', name: 'Machine Learning', level: 95, category: 'backend', icon: '🤖' },
      { id: '2', name: 'Python', level: 92, category: 'backend', icon: '🐍' },
      { id: '3', name: 'TensorFlow', level: 90, category: 'backend', icon: '🧠' },
      { id: '4', name: 'PyTorch', level: 88, category: 'backend', icon: '🔥' },
      { id: '5', name: 'Research', level: 95, category: 'other', icon: '🔬' },
      { id: '6', name: 'Data Science', level: 90, category: 'backend', icon: '📊' }
    ],
    services: [
      { id: '1', title: 'AI Consulting', description: 'AI strategy and implementation for businesses', icon: '🤖' },
      { id: '2', title: 'Research Collaboration', description: 'Academic and industry research partnerships', icon: '🔬' },
      { id: '3', title: 'ML Model Development', description: 'Custom machine learning model development', icon: '🧠' }
    ],
    projects: [
      {
        id: '1',
        title: 'Natural Language Processing Model',
        description: 'Developed a state-of-the-art NLP model for sentiment analysis with 95% accuracy',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Python', 'TensorFlow', 'NLP', 'BERT'],
        liveUrl: 'https://nlp-research.com',
        githubUrl: 'https://github.com/emmathompson/nlp-model',
        featured: true
      },
      {
        id: '2',
        title: 'Computer Vision System',
        description: 'Built a computer vision system for autonomous vehicles with real-time object detection',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLO'],
        liveUrl: 'https://cv-system.com',
        githubUrl: 'https://github.com/emmathompson/cv-system',
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Michael Park',
        role: 'Research Director',
        company: 'AI Labs',
        content: 'Emma\'s research contributions have been groundbreaking in the field of AI.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ],
    blog: [],
    contact: {
      email: 'emma.thompson@ai-research.com',
      phone: '+1 (555) 567-8901',
      address: 'San Francisco, CA',
      linkedin: 'https://linkedin.com/in/emmathompson',
      github: 'https://github.com/emmathompson',
      twitter: 'https://twitter.com/emmathompson'
    }
  },
  {
    template: 'artistic',
    hero: {
      name: 'Carlos Mendez',
      title: 'Fine Art Photographer',
      subtitle: 'Capturing the beauty of life through artistic photography',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      ctaText: 'View Gallery',
      ctaLink: '#projects'
    },
    about: {
      bio: 'Award-winning fine art photographer with 12+ years of experience. Specializing in landscape, portrait, and conceptual photography with exhibitions worldwide.',
      experience: 12,
      education: 'M.F.A. Photography, School of Visual Arts',
      location: 'Miami, FL',
      email: 'carlos.mendez@fineart.com',
      phone: '+1 (555) 678-9012',
      linkedin: 'https://linkedin.com/in/carlosmendez',
      github: '',
      website: 'https://carlosmendez.art'
    },
    skills: [
      { id: '1', name: 'Portrait Photography', level: 95, category: 'design', icon: '📸' },
      { id: '2', name: 'Adobe Lightroom', level: 92, category: 'design', icon: '🎨' },
      { id: '3', name: 'Adobe Photoshop', level: 90, category: 'design', icon: '🖌️' },
      { id: '4', name: 'Fine Art Printing', level: 88, category: 'design', icon: '🖼️' },
      { id: '5', name: 'Exhibition Curation', level: 85, category: 'design', icon: '🎭' },
      { id: '6', name: 'Art Direction', level: 90, category: 'design', icon: '🎨' }
    ],
    services: [
      { id: '1', title: 'Fine Art Photography', description: 'Professional fine art photography for galleries and collectors', icon: '📸' },
      { id: '2', title: 'Portrait Sessions', description: 'Artistic portrait photography for individuals and families', icon: '👤' },
      { id: '3', title: 'Exhibition Services', description: 'Gallery exhibitions and art curation services', icon: '🖼️' }
    ],
    projects: [
      {
        id: '1',
        title: 'Urban Landscape Series',
        description: 'Award-winning series capturing the architectural beauty of modern cities',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Canon EOS R5', 'Adobe Lightroom', 'Fine Art Printing'],
        liveUrl: 'https://urban-landscapes.com',
        featured: true
      },
      {
        id: '2',
        title: 'Human Connection Portraits',
        description: 'Intimate portrait series exploring human emotions and connections',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        technologies: ['Sony A7S III', 'Studio Lighting', 'Post-Processing'],
        liveUrl: 'https://human-connection.com',
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Sarah Williams',
        role: 'Gallery Director',
        company: 'Contemporary Art Gallery',
        content: 'Carlos\'s work has been featured in our most successful exhibitions.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ],
    blog: [],
    contact: {
      email: 'carlos.mendez@fineart.com',
      phone: '+1 (555) 678-9012',
      address: 'Miami, FL',
      linkedin: 'https://linkedin.com/in/carlosmendez',
      github: '',
      instagram: 'https://instagram.com/carlosmendez'
    }
  }
]; 