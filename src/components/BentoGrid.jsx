import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Filter, Database, BarChart3, Shield, Cpu, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import CodeViewer from './CodeViewer';

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Science', 'AI & Computer Vision', 'Full-Stack & Data Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory || p.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <section id="projects" className="py-20 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
              <Sparkles size={14} /> Production Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Flagship Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Click any project card to open an interactive deep-dive case study with mathematical models, vector pipelines, and database architecture.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: India Public Health Analytics (Col 1-7) */}
          {filteredProjects.find(p => p.id === 'public-health-analytics') && (
            <div 
              onClick={() => setSelectedProject(projects.find(p => p.id === 'public-health-analytics'))}
              className="lg:col-span-7 group cursor-pointer p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                    Data Science & Econometrics
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  India Public Health Analytics Pipeline
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  End-to-end statistical modeling & OLS linear regression pipeline evaluating 96 health indicators across 637 districts from the NFHS-4 dataset.
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">OLS Fit</div>
                    <div className="text-sm font-bold text-cyan-400 font-mono">R² = 0.5831</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Districts</div>
                    <div className="text-sm font-bold text-emerald-400 font-mono">637</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">T-Test Diff</div>
                    <div className="text-sm font-bold text-purple-400 font-mono">+25.5%</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">ANOVA F</div>
                    <div className="text-sm font-bold text-amber-400 font-mono">18.32</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Statsmodels', 'OLS Regression', 'ANOVA', 'Pandas'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </span>
              </div>
            </div>
          )}

          {/* Card 2: MarkIt AI Biometrics (Col 8-12) */}
          {filteredProjects.find(p => p.id === 'markit-ai-biometrics') && (
            <div 
              onClick={() => setSelectedProject(projects.find(p => p.id === 'markit-ai-biometrics'))}
              className="lg:col-span-5 group cursor-pointer p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    AI & Computer Vision
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  MarkIt — Dual-Biometric System
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Multimodal biometric classroom management powered by 128-d Computer Vision FaceID and 256-d Deep Voice Speaker Verification.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Face Vector</div>
                    <div className="text-sm font-bold text-emerald-400 font-mono">128-d ResNet</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Voice Vector</div>
                    <div className="text-sm font-bold text-cyan-400 font-mono">256-d d-vector</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {['dlib', 'Resemblyzer', 'Supabase', 'Streamlit'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </span>
              </div>
            </div>
          )}

          {/* Card 3: Telite LMS (Col 1-6) */}
          {filteredProjects.find(p => p.id === 'telite-lms') && (
            <div 
              onClick={() => setSelectedProject(projects.find(p => p.id === 'telite-lms'))}
              className="lg:col-span-6 group cursor-pointer p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">
                    Full-Stack & Data Architecture
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-purple-400 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  Telite LMS — Multi-Tenant Platform
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Enterprise LMS featuring PostgreSQL Row-Level Security (RLS), FastAPI, and Celery/Redis asynchronous data reporting pipelines.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Tenant Security</div>
                    <div className="text-sm font-bold text-purple-400 font-mono">Postgres RLS</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Orchestration</div>
                    <div className="text-sm font-bold text-cyan-400 font-mono">6 Containers</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {['FastAPI', 'PostgreSQL RLS', 'Redis', 'Docker', 'Celery'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </span>
              </div>
            </div>
          )}

          {/* Card 4: Interactive Code Inspector Bento Tile (Col 7-12) */}
          <div className="lg:col-span-6">
            <CodeViewer />
          </div>

        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
