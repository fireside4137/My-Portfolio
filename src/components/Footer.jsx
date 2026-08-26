import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">{personalInfo.name}</span>. Built with React 18, Vite & Tailwind CSS.
        </div>
        <div className="flex items-center gap-6 text-slate-400 font-mono">
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#analytics" className="hover:text-cyan-400 transition-colors">Analytics</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        </div>
      </div>
    </footer>
  );
}
