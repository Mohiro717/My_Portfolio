
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
