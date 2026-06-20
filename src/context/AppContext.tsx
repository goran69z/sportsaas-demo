import { createContext, useContext, useState, type ReactNode } from 'react';

interface AppContextType {
  isAdminView: boolean;
  toggleView: () => void;
  isSkeleton: boolean;
  setSkeleton: (v: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  isAdminView: true,
  toggleView: () => {},
  isSkeleton: false,
  setSkeleton: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [isAdminView, setIsAdminView] = useState(true);
  const [isSkeleton, setSkeleton] = useState(false);

  const toggleView = () => setIsAdminView((prev) => !prev);

  return (
    <AppContext.Provider value={{ isAdminView, toggleView, isSkeleton, setSkeleton }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}