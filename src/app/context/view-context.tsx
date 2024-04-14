// context/ViewContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface ViewContextType {
  viewMode: 'list' | 'grid';
  toggleViewMode: () => void;
}

// Create the context with an initial value
const ViewContext = createContext<ViewContextType | undefined>(undefined);

// Define the provider component with proper typing for its children
interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider = ({ children }: ViewProviderProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const toggleViewMode = () => {
    setViewMode(currentViewMode => (currentViewMode === 'list' ? 'grid' : 'list'));
  };

  return (
    <ViewContext.Provider value={{ viewMode, toggleViewMode }}>
      {children}
    </ViewContext.Provider>
  );
};

// Custom hook to use the view context
export const useView = (): ViewContextType => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};
