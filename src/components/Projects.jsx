import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Lock, FileCode, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 border-b border-paper-400 dark:border-obsidian-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
            <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Experimental Archive</span>
            <span>//</span>
            <span>Empirical Studies &amp; Pipelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight">
            Research Logs &amp; Technical Case Studies
          </h2>
          <p className="text-sm text-stone-600 dark:text-obsidian-200 mt-2 max-w-2xl font-sans leading-relaxed">
            Direct empirical investigations, mathematical formulations, and production systems across Deep Learning, Econometrics, and Unsupervised AI. Click any entry to examine the complete methodology and architecture.
          </p>
        </div>

        {/* Chronological Research Logs */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 shadow-sm transition-all hover:border-stone-500 dark:hover:border-obsidian-400 flex flex-col justify-between gap-6"
            >
              <div>
                {/* Header Meta Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-paper-300 dark:border-obsidian-700 text-xs font-mono">
                  <div className="flex items-center gap-2 text-sage-600 dark:text-sage-400 font-semibold">
                    <span className="px-1.5 py-0.5 rounded bg-sage-50 dark:bg-obsidian-900 border border-sage-200 dark:border-obsidian-600 text-[11px]">
                      LOG-{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-stone-700 dark:text-obsidian-200 uppercase tracking-wider text-[11px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Links / Badges */}
                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-sage-600 hover:bg-sage-700 text-white dark:bg-sage-400 dark:hover:bg-sage-500 dark:text-stone-950 flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={12} /> Launch Prototype
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded text-xs font-mono text-stone-700 dark:text-obsidian-100 hover:text-stone-950 dark:hover:text-white border border-paper-400 dark:border-obsidian-500 hover:bg-paper-200 dark:hover:bg-obsidian-700 flex items-center gap-1.5 transition-colors"
                      >
                        <Github size={12} /> Source Code
                      </a>
                    )}
                    {project.githubPrivateNote && !project.github && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-stone-500 dark:text-obsidian-200 border border-paper-300 dark:border-obsidian-700 flex items-center gap-1">
                        <Lock size={11} /> {project.githubPrivateNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-obsidian-50 leading-snug">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs sm:text-sm font-mono text-stone-500 dark:text-obsidian-200 mt-1">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-stone-700 dark:text-obsidian-100 text-sm mt-3 leading-relaxed font-sans">
                  {project.shortDescription}
                </p>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 p-3 rounded-lg bg-paper-100 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700 font-mono">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-1">
                      <div className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase tracking-wider">{metric.label}</div>
                      <div className="text-sm font-bold text-sage-600 dark:text-sage-400 mt-0.5">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Inline Visual Blueprint Snippet (if available) */}
                {project.heatmapImage && (
                  <div className="mt-4 p-3 rounded-lg bg-paper-100 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700">
                    <div className="text-[11px] font-mono text-stone-500 dark:text-obsidian-200 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Figure: {project.heatmapTitle || "Architecture Diagram"}</span>
                      <span className="text-[10px] text-sage-600 dark:text-sage-400">Inline Visual</span>
                    </div>
                    <div className="rounded overflow-hidden max-h-56 bg-paper-200 dark:bg-obsidian-950 flex items-center justify-center p-2">
                      <img
                        src={project.heatmapImage}
                        alt={project.heatmapAlt || project.title}
                        className="max-h-52 w-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Footer Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-paper-300 dark:border-obsidian-700">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-paper-200 dark:bg-obsidian-700 text-stone-800 dark:text-obsidian-50 border border-paper-400 dark:border-obsidian-500">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deep Dive Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-semibold text-stone-900 dark:text-obsidian-50 hover:text-sage-600 dark:hover:text-sage-400 flex items-center gap-1.5 transition-colors underline underline-offset-4"
                >
                  Examine Technical Case Study <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
