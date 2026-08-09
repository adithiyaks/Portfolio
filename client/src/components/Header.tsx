import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Award, Mail, Feather, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white border-b-2 border-black py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group text-2xl font-black tracking-tight text-gray-900 focus:outline-none"
          >
            <span className="relative inline-block border-b-4 border-black pb-0.5 group-hover:text-[#7C3AED] group-hover:border-[#7C3AED] transition-colors uppercase tracking-widest text-xl">
              adithiaya
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-extrabold text-black">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="hover:text-[#7C3AED] transition-colors duration-150 py-1 uppercase tracking-wider text-xs"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="h-5 w-0.5 bg-black mx-2" />

            {/* Header Action Buttons */}
            <div className="flex items-center space-x-4 text-xs font-black">
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-1.5 hover:text-[#7C3AED] transition-colors uppercase tracking-wider"
              >
                <Feather className="w-4 h-4 text-black" />
                <span>Side Quests</span>
              </button>

              {/* Downloadable Resume Link */}
              <a
                href="/resume.pdf"
                download="Adithiaya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 border-2 border-black bg-white text-black font-extrabold uppercase tracking-wider transition-all hover:bg-black hover:text-white hover:shadow-[3px_3px_0px_#7C3AED] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 py-4 border-2 border-black bg-white px-4 space-y-3 shadow-[4px_4px_0px_#000000]">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-3 w-full py-2.5 px-3 border border-transparent font-black text-xs uppercase tracking-wider text-black hover:border-black hover:bg-[#7C3AED] hover:text-white transition-colors"
              >
                <span>{label}</span>
              </button>
            ))}
            <div className="pt-2 border-t-2 border-black">
              <a
                href="/resume.pdf"
                download="Adithiaya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-3 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-[#7C3AED]"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
