
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-6 py-12 md:py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
