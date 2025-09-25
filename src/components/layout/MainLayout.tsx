import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </Layout>
  );
};

export default MainLayout;