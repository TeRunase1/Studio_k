import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Project, SiteConfig, initialProjects, initialSiteConfig } from '../data/content';

interface AppContextType {
  projects: Project[];
  siteConfig: SiteConfig;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(initialSiteConfig);

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    setSiteConfig((prev) => ({ ...prev, ...config }));
  };

  return (
    <AppContext.Provider
      value={{ projects, siteConfig, addProject, updateProject, deleteProject, updateSiteConfig }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
}
