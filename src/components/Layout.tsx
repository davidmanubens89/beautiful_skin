import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Calendar, BookOpen, ShoppingBag, LineChart, Users } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-semibold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>SkinScience</Link>
          <nav className="hidden md:flex space-x-4">
            <HeaderLink to="/skin-assessment" label="Assessment" isScrolled={isScrolled} />
            <HeaderLink to="/daily-routine" label="Routine" isScrolled={isScrolled} />
            <HeaderLink to="/learn" label="Learn" isScrolled={isScrolled} />
            <HeaderLink to="/store" label="Store" isScrolled={isScrolled} />
            <HeaderLink to="/track-progress" label="Progress" isScrolled={isScrolled} />
            <HeaderLink to="/community" label="Community" isScrolled={isScrolled} />
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center md:justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2023 SkinScience. All rights reserved.</p>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Contact Us</a>
          </nav>
        </div>
      </footer>
      
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t">
        <div className="flex justify-around">
          <MobileNavLink to="/" icon={<Home size={24} />} />
          <MobileNavLink to="/skin-assessment" icon={<User size={24} />} />
          <MobileNavLink to="/daily-routine" icon={<Calendar size={24} />} />
          <MobileNavLink to="/learn" icon={<BookOpen size={24} />} />
          <MobileNavLink to="/store" icon={<ShoppingBag size={24} />} />
          <MobileNavLink to="/track-progress" icon={<LineChart size={24} />} />
          <MobileNavLink to="/community" icon={<Users size={24} />} />
        </div>
      </nav>
    </div>
  );
};

const HeaderLink: React.FC<{ to: string; label: string; isScrolled: boolean }> = ({ to, label, isScrolled }) => (
  <Link
    to={to}
    className={`${
      isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
    } transition-colors`}
  >
    {label}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; icon: React.ReactNode }> = ({ to, icon }) => (
  <Link to={to} className="p-3 text-gray-600 hover:text-indigo-600">
    {icon}
  </Link>
);

export default Layout;