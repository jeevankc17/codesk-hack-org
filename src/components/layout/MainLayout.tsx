import React from 'react';
import { HomeButton } from '../commons/HomeButton';
interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeButton />
      <main>
        {children}
      </main>
    </div>
  );
} 