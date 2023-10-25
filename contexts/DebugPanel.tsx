import DebugPanel from '@/components/DebugPanel';
import { ReactNode, createContext, useContext, useState } from 'react';

type DebugPanelContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DebugPanelContext = createContext<DebugPanelContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const DebugPanelProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DebugPanelContext.Provider value={{ isOpen, setIsOpen }}>
      <DebugPanel />
      {children}
    </DebugPanelContext.Provider>
  );
};

export const useDebugPanel = () => useContext(DebugPanelContext);
