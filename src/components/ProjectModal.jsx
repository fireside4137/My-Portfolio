import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import useAccessibleDialog from '../hooks/useAccessibleDialog';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useAccessibleDialog(Boolean(project), onClose);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 dark:bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-case-study-title"
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-paper-100 dark:bg-obsidian-900 border border-paper-400 dark:border-obsidian-500 rounded-xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-paper-50 dark:bg-obsidian-800 border-b border-paper-400 dark:border-obsidian-500 flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sage-600 dark:text-sage-400 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
              <span className="uppercase tracking-wider font-semibold">Technical Dossier</span>
              <span>//</span>
              <span className="text-stone-600 dark:text-obsidian-200">{project.category}</span>
            </div>
            <h3 id="project-case-study-title" className="text-xl sm:text-2xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight leading-snug">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs font-mono text-stone-500 dark:text-obsidian-200 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="p-1.5 rounded border border-paper-300 dark:border-obsidian-600 text-stone-500 dark:text-obsidian-300 hover:text-stone-900 dark:hover:text-white hover:bg-paper-200 dark:hover:bg-obsidian-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-7 text-stone-800 dark:text-obsidian-100 text-sm">
          
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-lg bg-paper-50 dark:bg-obsidian-800 border border-paper-300 dark:border-obsidian-700 font-mono">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-1">
                <div className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase tracking-wider">{metric.label}</div>
                <div className="text-base font-bold text-sage-600 dark:text-sage-400 mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-sage-600 hover:bg-sage-700 text-white dark:bg-sage-400 dark:hover:bg-sage-500 dark:text-stone-950 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink size={13} /> Launch Live Prototype <ArrowUpRight size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-50 dark:bg-obsidian-800 hover:bg-paper-200 dark:hover:bg-obsidian-700 text-stone-800 dark:text-obsidian-100 font-medium flex items-center gap-1.5 transition-colors"
              >
                <Github size={13} /> View Source Code
              </a>
            )}
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800 dark:text-obsidian-100 flex items-center gap-2">
              <span className="text-sage-600 dark:text-sage-400">01 //</span> Problem Formulation &amp; Scientific Motivation
            </h4>
            <div className="p-4 rounded-lg bg-paper-50 dark:bg-obsidian-800/80 border border-paper-300 dark:border-obsidian-700 leading-relaxed text-stone-700 dark:text-obsidian-100">
              {project.details.problem}
            </div>
          </div>

          {/* Key Empirical Findings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800 dark:text-obsidian-100 flex items-center gap-2">
              <span className="text-sage-600 dark:text-sage-400">02 //</span> Quantitative Insights &amp; Empirical Findings
            </h4>
            <div className="space-y-2">
              {project.details.keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-paper-50 dark:bg-obsidian-800/60 border border-paper-300 dark:border-obsidian-700 text-xs sm:text-sm leading-relaxed">
                  <span className="text-sage-600 dark:text-sage-400 font-mono font-bold shrink-0 mt-0.5">[{idx + 1}]</span>
                  <span className="text-stone-700 dark:text-obsidian-100">{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800 dark:text-obsidian-100 flex items-center gap-2">
              <span className="text-sage-600 dark:text-sage-400">03 //</span> Pipeline Architecture &amp; Methodology
            </h4>
            <div className="space-y-2">
              {project.details.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-paper-50 dark:bg-obsidian-800/60 border border-paper-300 dark:border-obsidian-700 text-xs sm:text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-500 dark:bg-obsidian-300 mt-2 shrink-0" />
                  <span className="text-stone-700 dark:text-obsidian-200">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Blueprint / Heatmap */}
          {project.heatmapImage && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800 dark:text-obsidian-100 flex items-center gap-2">
                <span className="text-sage-600 dark:text-sage-400">04 //</span> {project.heatmapTitle || "Figure: Architectural Blueprint"}
              </h4>
              <div className="rounded-lg overflow-hidden border border-paper-300 dark:border-obsidian-700 bg-paper-50 dark:bg-obsidian-950 p-2 sm:p-4 flex items-center justify-center">
                <img
                  src={project.heatmapImage}
                  alt={project.heatmapAlt || "Architecture diagram"}
                  className="w-full object-contain max-h-96"
                />
              </div>
              <p className="text-xs text-stone-500 dark:text-obsidian-200 font-mono px-1">
                {project.heatmapDescription || "Architecture and parameter analysis."}
              </p>
            </div>
          )}

          {/* Additional EDA Charts (CreditWise / SmartCart) */}
          {project.additionalCharts && project.additionalCharts.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-paper-300 dark:border-obsidian-700">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800 dark:text-obsidian-100 flex items-center gap-2">
                <span className="text-sage-600 dark:text-sage-400">05 //</span> Diagnostic Figures &amp; Feature Projections
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.additionalCharts.map((chart, idx) => (
                  <div key={idx} className="space-y-1.5 p-2 rounded-lg bg-paper-50 dark:bg-obsidian-800/80 border border-paper-300 dark:border-obsidian-700">
                    <div className="rounded overflow-hidden bg-paper-100 dark:bg-obsidian-950 flex items-center justify-center h-44">
                      <img
                        src={chart.src}
                        alt={chart.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-obsidian-200 font-mono leading-tight px-1">
                      {chart.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div className="pt-3 border-t border-paper-300 dark:border-obsidian-700">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-obsidian-200 mb-2 font-semibold">
              Implementation Dependencies
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-paper-200 dark:bg-obsidian-700 text-stone-800 dark:text-obsidian-50 border border-paper-400 dark:border-obsidian-500 text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-paper-50 dark:bg-obsidian-800 border-t border-paper-400 dark:border-obsidian-500 flex items-center justify-between font-mono text-xs">
          <span className="text-stone-500 dark:text-obsidian-300 text-[11px]">
            Engineering Dossier End
          </span>
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="px-3.5 py-1.5 rounded border border-paper-400 dark:border-obsidian-500 bg-paper-100 dark:bg-obsidian-700 text-stone-800 dark:text-obsidian-100 hover:bg-paper-200 dark:hover:bg-obsidian-600 transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
