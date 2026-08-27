import React from 'react';
import { ArrowRight, Download, Eye, Github, Linkedin, Mail, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  return (
    <section className="pt-32 pb-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.status}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              {personalInfo.name}
            </h1>

            <p className="text-xl font-medium text-cyan-400">
              {personalInfo.title}
            </p>

            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              Computer Science graduate (B.Tech, CGPA 7.9, GATE 2026 Qualified). I build statistical data pipelines, computer vision & voice AI models, and scalable backend cloud applications.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin size={13} className="text-cyan-400" /> Uttarakhand, India
              </span>
              <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Award size={13} className="text-purple-400" /> GATE 2026 CS (Score: 367)
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                View Projects <ArrowRight size={14} />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs flex items-center gap-2 border border-slate-700 transition-colors"
              >
                <Eye size={14} className="text-cyan-400" /> Preview Resume
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Swapnil_Upadhyay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-xs flex items-center gap-2 border border-slate-800 transition-colors"
              >
                <Download size={14} /> Download PDF
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
