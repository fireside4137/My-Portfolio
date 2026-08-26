import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
            Career Timeline
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Professional Industry Experience
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Real-world achievements, production contributions, and engineering impact from my software engineering internship.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                      {exp.role} <span className="text-xs font-mono text-cyan-400 font-normal">({exp.company})</span>
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mt-1 font-mono">
                      <span className="flex items-center gap-1"><Building2 size={14} /> Enterprise Software Project</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
