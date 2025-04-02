import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroNavbar from '../Navbar/HeroNavbar';
import StandardNavbar from '../Navbar/StandardNavbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#D3CDBF] relative">
      {isHomePage ? <HeroNavbar /> : <StandardNavbar />}
      <main className={isHomePage ? '' : 'pt-16'}>
        {children}
      </main>
    </div>
  );
};

export default Layout;