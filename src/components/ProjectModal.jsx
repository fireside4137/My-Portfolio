import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, BarChart3, Database, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-slate-300 text-sm">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center p-2">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">{metric.label}</div>
                <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-2 border border-slate-700 transition-colors"
              >
                <Github size={16} /> View GitHub Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
              >
                <ExternalLink size={16} /> Launch Live Application <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              <Database size={18} className="text-cyan-400" /> Executive Problem Statement & Motivation
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
              {project.details.problem}
            </p>
          </div>

          {/* Key Empirical Findings */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-400" /> Key Insights & Quantitative Findings
            </h4>
            <div className="space-y-2">
              {project.details.keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-slate-200">{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Software Engineering */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              <Layers size={18} className="text-purple-400" /> ML Pipeline Architecture & Methodology
            </h4>
            <div className="space-y-2">
              {project.details.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span className="leading-relaxed text-slate-300">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Correlation Heatmap Visualization (CreditWise) */}
          {project.heatmapImage && (
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                <BarChart3 size={18} className="text-cyan-400" /> Feature Correlation Heatmap
              </h4>
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={project.heatmapImage}
                  alt="Feature Correlation Heatmap"
                  className="w-full object-contain max-h-96"
                />
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Pearson correlation matrix across 28 encoded features post One-Hot Encoding. Highlights strong positive correlation between Credit_Score² and DTI_Ratio², and negative correlation with loan approval probability.
              </p>
            </div>
          )}
          {/* Additional EDA Charts (CreditWise) */}
          {project.additionalCharts && project.additionalCharts.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                <BarChart3 size={18} className="text-emerald-400" /> Exploratory Data Analysis (EDA) Gallery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.additionalCharts.map((chart, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center h-48 sm:h-56">
                      <img
                        src={chart.src}
                        alt={chart.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs text-slate-400 font-mono leading-relaxed px-1">
                      {chart.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Tech Tags */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Technologies & Libraries Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-cyan-300 border border-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
