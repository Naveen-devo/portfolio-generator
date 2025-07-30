import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Portfolio, PortfolioContextType, PortfolioFilters } from '../types';
import { samplePortfolios } from '../data/samplePortfolios';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolioContext must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [currentPortfolio, setCurrentPortfolio] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load portfolios from localStorage on mount
  useEffect(() => {
    console.log('PortfolioContext: Loading portfolios...');
    
    // Clear localStorage to force load new sample portfolios
    localStorage.removeItem('portfolios');
    
    // Always load sample portfolios for now
    console.log('PortfolioContext: Loading new sample portfolios...');
    loadSamplePortfolios();
  }, []);

  // Function to load sample portfolios
  const loadSamplePortfolios = () => {
    console.log('PortfolioContext: Loading sample portfolios...', samplePortfolios.length);
    
    // Create multiple duplicates of each sample portfolio
    const duplicatedPortfolios: Portfolio[] = [];
    const duplicatesPerTemplate = 3; // Create 3 copies of each template
    
    for (let i = 0; i < duplicatesPerTemplate; i++) {
      samplePortfolios.forEach((portfolio, index) => {
        const duplicatedPortfolio: Portfolio = {
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
          createdAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000) - (i * 2 * 60 * 60 * 1000)), // Spread out creation dates
          updatedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000) - (i * 2 * 60 * 60 * 1000)),
        };
        duplicatedPortfolios.push(duplicatedPortfolio);
      });
    }
    
    console.log('PortfolioContext: Created duplicated portfolios:', duplicatedPortfolios.length);
    setPortfolios(duplicatedPortfolios);
  };

  // Save portfolios to localStorage whenever portfolios change
  useEffect(() => {
    if (portfolios.length > 0) {
      console.log('PortfolioContext: Saving portfolios to localStorage:', portfolios.length);
      localStorage.setItem('portfolios', JSON.stringify(portfolios));
    }
  }, [portfolios]);

  const createPortfolio = (portfolio: Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPortfolio: Portfolio = {
      ...portfolio,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setPortfolios(prev => [newPortfolio, ...prev]);
    setCurrentPortfolio(newPortfolio);
  };

  const updatePortfolio = (id: string, updates: Partial<Portfolio>) => {
    setPortfolios(prev => 
      prev.map(portfolio => 
        portfolio.id === id 
          ? { ...portfolio, ...updates, updatedAt: new Date() }
          : portfolio
      )
    );
    
    if (currentPortfolio?.id === id) {
      setCurrentPortfolio(prev => prev ? { ...prev, ...updates, updatedAt: new Date() } : null);
    }
  };

  const deletePortfolio = (id: string) => {
    setPortfolios(prev => prev.filter(portfolio => portfolio.id !== id));
    if (currentPortfolio?.id === id) {
      setCurrentPortfolio(null);
    }
  };

  const getPortfolioById = (id: string) => {
    return portfolios.find(portfolio => portfolio.id === id);
  };

  const filterPortfolios = (filters: PortfolioFilters) => {
    let filtered = portfolios;

    if (filters.skills && filters.skills.length > 0) {
      filtered = filtered.filter(portfolio =>
        portfolio.skills.some(skill =>
          filters.skills!.includes(skill.name.toLowerCase())
        )
      );
    }

    if (filters.role) {
      filtered = filtered.filter(portfolio =>
        portfolio.hero.title.toLowerCase().includes(filters.role!.toLowerCase()) ||
        portfolio.about.bio.toLowerCase().includes(filters.role!.toLowerCase())
      );
    }

    if (filters.template) {
      filtered = filtered.filter(portfolio => portfolio.template === filters.template);
    }

    return filtered;
  };

  const value: PortfolioContextType = {
    portfolios,
    currentPortfolio,
    isLoading,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    getPortfolioById,
    filterPortfolios,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}; 