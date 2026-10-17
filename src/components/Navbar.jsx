import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResumeModal, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research Logs', href: '#projects' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-paper-100/95 dark:bg-obsidian-900/95 backdrop-blur-md border-b border-paper-400 dark:border-obsidian-500 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Scientific Monogram Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded border border-paper-400 dark:border-obsidian-400 bg-paper-200 dark:bg-obsidian-800 flex items-center justify-center text-paper-900 dark:text-obsidian-50 font-mono text-xs font-bold transition-all group-hover:border-sage-600 dark:group-hover:border-sage-400">
              SU
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-paper-900 dark:text-obsidian-50 tracking-tight text-sm">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-stone-500 dark:text-obsidian-200 uppercase tracking-wider">
                Research &amp; Engineering Log
              </span>
            </div>
          </a>

          {/* Desktop Nav Links & Controls */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono text-stone-600 dark:text-obsidian-200 hover:text-sage-600 dark:hover:text-sage-400 transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-4 w-px bg-paper-400 dark:bg-obsidian-500" />

            <div className="flex items-center gap-2">
              {/* Resume Button */}
              <button
                onClick={onOpenResumeModal}
                className="px-2.5 py-1.5 text-xs font-mono text-stone-700 dark:text-obsidian-100 hover:text-sage-600 dark:hover:text-sage-400 border border-paper-400 dark:border-obsidian-500 hover:border-sage-600 dark:hover:border-sage-400 rounded transition-all flex items-center gap-1.5 bg-paper-50 dark:bg-obsidian-800"
                title="View PDF Resume"
              >
                <FileText size={13} />
                <span>Resume</span>
              </button>

              {/* Theme Switcher Button */}
              <button
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Switch to warm light paper theme' : 'Switch to obsidian dark theme'}
                className="p-1.5 text-stone-600 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 rounded border border-paper-400 dark:border-obsidian-500 hover:bg-paper-200 dark:hover:bg-obsidian-800 transition-all"
                title={theme === 'dark' ? 'Switch to Light Mode (Archival Paper)' : 'Switch to Dark Mode (Obsidian Lab)'}
              >
                {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-stone-700" />}
              </button>

              <div className="h-4 w-px bg-paper-400 dark:bg-obsidian-500" />

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-stone-600 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 rounded transition-colors"
                title="GitHub Repository"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-stone-600 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 rounded transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#contact"
                className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-sage-600 hover:bg-sage-700 text-white dark:bg-sage-400 dark:hover:bg-sage-500 dark:text-stone-950 transition-all shadow-sm flex items-center gap-1.5"
              >
                <Mail size={12} /> Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-stone-600 dark:text-obsidian-200 rounded border border-paper-400 dark:border-obsidian-500"
            >
              {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-stone-700 dark:text-obsidian-200 hover:text-stone-900 rounded"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-navigation"
        hidden={!mobileMenuOpen}
        className="md:hidden bg-paper-100 dark:bg-obsidian-900 border-b border-paper-400 dark:border-obsidian-500 px-4 pt-3 pb-6 mt-3 space-y-3 font-mono text-xs"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-700 dark:text-obsidian-200 hover:text-sage-600 dark:hover:text-sage-400 py-2 border-b border-paper-300 dark:border-obsidian-800 uppercase tracking-wider"
          >
            {link.name}
          </a>
        ))}
        <div className="pt-2 flex flex-col gap-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResumeModal();
            }}
            className="w-full text-center py-2 rounded border border-paper-400 dark:border-obsidian-500 text-stone-800 dark:text-obsidian-100 font-semibold"
          >
            View Resume PDF
          </button>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-2 rounded bg-sage-600 text-white dark:bg-sage-400 dark:text-stone-950 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
