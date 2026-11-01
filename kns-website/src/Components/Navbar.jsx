import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Philosophy' },
    { id: 'construction', label: '3D Process' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'villa-community', label: 'Villa Community Plan' },
    { id: 'contact', label: 'Inquire & Visit' },
    { id: 'admin', label: 'Portal' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#07111F]/90 backdrop-blur-md border-b border-[#D6B36A]/15 py-4 px-4 sm:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 border border-[#D6B36A] flex items-center justify-center bg-gradient-to-br from-[#101318] to-[#07111F] rounded shadow-lg shadow-[#D6B36A]/10">
            <span className="font-serif text-[#D6B36A] font-bold text-lg tracking-wider">KNS</span>
          </div>
          <div>
            <span className="block text-sm font-serif tracking-widest font-bold text-white uppercase">
              KNS Construction
            </span>
            <span className="block text-[9px] text-[#D6B36A] uppercase tracking-widest">
              &amp; Real Estate
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 relative ${
                activeTab === tab.id 
                  ? 'text-[#D6B36A] font-semibold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#D6B36A]" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+919100425645" 
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-dashed border-[#D6B36A]/30 text-xs tracking-wider text-gray-300 hover:text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#D6B36A] animate-bounce" />
            <span>+91 9100425645</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden text-[#D6B36A] focus:outline-none p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[73px] left-0 right-0 bg-[#07111F] border-b border-[#D6B36A]/20 py-6 px-4 space-y-4 animate-fade-in shadow-2xl">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-4 rounded text-sm uppercase tracking-wider transition-colors ${
                activeTab === tab.id 
                  ? 'bg-[#101318] text-[#D6B36A] font-semibold border-l-2 border-[#D6B36A]' 
                  : 'text-gray-300 hover:bg-[#101318]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}

          <div className="pt-4 border-t border-[#D6B36A]/10 flex flex-col space-y-3">
            <a href="tel:+919100425645" className="flex items-center space-x-3 text-sm text-[#D6B36A] p-2">
              <Phone className="w-4 h-4" />
              <span>+91 9100425645 (Kiran)</span>
            </a>
            <a href="tel:+919246563397" className="flex items-center space-x-3 text-sm text-[#D6B36A] p-2">
              <Phone className="w-4 h-4" />
              <span>+91 9246563397</span>
            </a>
            <a href="mailto:knsconstructions@gmail.com" className="flex items-center space-x-3 text-sm text-gray-300 p-2">
              <Mail className="w-4 h-4 text-[#D6B36A]" />
              <span>knsconstructions@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};