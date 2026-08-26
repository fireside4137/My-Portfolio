import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
            Featured Portfolio Work
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Projects & Work Showcase
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Selected projects across Data Science, AI Biometrics, and Enterprise Software Engineering.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between gap-6"
            >
              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                    {project.category}
                  </span>

                  {/* Links / Badges */}
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <ExternalLink size={14} /> Launch Live Web App
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-colors"
                      >
                        <Github size={14} /> GitHub Repo
                      </a>
                    )}
                    {project.githubPrivateNote && !project.github && (
                      <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-400 text-xs font-mono border border-slate-800 flex items-center gap-1.5">
                        <Lock size={12} /> {project.githubPrivateNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-left">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{metric.label}</div>
                      <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deep Dive Case Study Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  Read Full Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
