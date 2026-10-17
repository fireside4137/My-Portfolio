import React from 'react';
import { ArrowRight, Download, Eye, Github, Linkedin, Mail, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section className="pt-28 pb-14 border-b border-paper-400 dark:border-obsidian-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-8 border-b border-paper-300 dark:border-obsidian-800 text-[11px] font-mono text-stone-500 dark:text-obsidian-200">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
            <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Computational Dossier</span>
            <span>//</span>
            <span>GATE CS 2026 (Score 367)</span>
            <span>//</span>
            <span>THDC-IHET (8.04 CGPA)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-sage-600 dark:text-sage-400" />
            <span>Uttarakhand, India</span>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10">
          
          {/* Main Researcher Information */}
          <div className="flex-1 space-y-5">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-mono text-sage-600 dark:text-sage-400 mt-1.5 font-medium">
                Aspiring Data Scientist &amp; AI-ML Engineer
              </p>
            </div>

            <p className="text-stone-700 dark:text-obsidian-200 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Computer Science graduate specializing in predictive modeling, statistical econometrics, and representation learning. I build verifiable data pipelines—from diagnosing loss landscape divergence in custom PyTorch vision architectures to analyzing district-level public health regressions and engineering multi-tenant PostgreSQL systems.
            </p>

            {/* Scientific Credentials Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
              <div className="p-2.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-800">
                <span className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase block">GATE 2026 CS</span>
                <span className="font-bold text-paper-900 dark:text-obsidian-50 text-sm">Score 367</span>
              </div>
              <div className="p-2.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-800">
                <span className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase block">Graduation CGPA</span>
                <span className="font-bold text-paper-900 dark:text-obsidian-50 text-sm">8.04 CGPA</span>
              </div>
              <div className="p-2.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-800">
                <span className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase block">Academic Alum</span>
                <span className="font-bold text-paper-900 dark:text-obsidian-50 text-sm">Sainik School</span>
              </div>
              <div className="p-2.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-800">
                <span className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase block">Primary Focus</span>
                <span className="font-bold text-sage-600 dark:text-sage-400 text-sm">PyTorch &amp; ML</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded bg-paper-900 hover:bg-stone-800 text-paper-50 dark:bg-obsidian-50 dark:hover:bg-white dark:text-obsidian-900 font-mono text-xs font-semibold flex items-center gap-2 transition-all"
              >
                Explore Research Logs <ArrowRight size={13} />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-3.5 py-2 rounded bg-paper-50 dark:bg-obsidian-800 hover:bg-paper-200 dark:hover:bg-obsidian-700 text-stone-800 dark:text-obsidian-100 font-mono text-xs font-medium flex items-center gap-1.5 border border-paper-400 dark:border-obsidian-500 transition-all"
              >
                <Eye size={13} /> Preview Resume
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Swapnil_Upadhyay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded text-stone-600 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 font-mono text-xs flex items-center gap-1.5 transition-colors"
                title="Download Resume PDF"
              >
                <Download size={13} /> Download
              </a>

              <div className="h-4 w-px bg-paper-400 dark:bg-obsidian-500 hidden sm:block" />

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-paper-400 dark:border-obsidian-500 text-stone-700 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 hover:bg-paper-200 dark:hover:bg-obsidian-800 transition-all"
                  title="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-paper-400 dark:border-obsidian-500 text-stone-700 dark:text-obsidian-200 hover:text-stone-900 dark:hover:text-obsidian-50 hover:bg-paper-200 dark:hover:bg-obsidian-800 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Profile Photo */}
          <div className="shrink-0 self-center md:self-start">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-lg overflow-hidden border border-paper-400 dark:border-obsidian-500 bg-paper-200 dark:bg-obsidian-800 shadow-sm p-1">
              <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
