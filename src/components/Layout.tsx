import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout component with full viewport height
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {children}
    </div>
  );
};

