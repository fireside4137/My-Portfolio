import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-950 text-stone-500 dark:text-obsidian-300 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} <span className="text-stone-800 dark:text-obsidian-50 font-semibold">{personalInfo.name}</span>. Computational Research Dossier.
        </div>
        <div className="flex items-center gap-5 text-stone-500 dark:text-obsidian-200">
          <a href="#projects" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors uppercase">Research Logs</a>
          <a href="#skills" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors uppercase">Stack</a>
          <a href="#experience" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors uppercase">Timeline</a>
          <a href="#contact" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors uppercase">Contact</a>
        </div>
      </div>
    </footer>
  );
}
