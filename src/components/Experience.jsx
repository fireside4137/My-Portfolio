import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, GraduationCap, Award, Trophy } from 'lucide-react';
import { experiences, education, achievements } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
            Career & Academic Background
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Industry Experience & Education
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Real-world achievements, production contributions, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Briefcase size={20} className="text-cyan-400" /> Work Experience
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  {/* Timeline marker node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-100">
                          {exp.role}
                        </h4>
                        <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-400 mt-1 font-mono">
                          <span className="flex items-center gap-1"><Building2 size={13} /> {exp.location}</span>
                          <span className="flex items-center gap-1"><Calendar size={13} /> {exp.period}</span>
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

          {/* Right Column: Education & Achievements (Col 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-emerald-400" /> Education
              </h3>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    {education.cgpa}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{education.period}</span>
                </div>

                <h4 className="text-base font-bold text-slate-100">
                  {education.degree}
                </h4>

                <p className="text-sm text-slate-300 font-medium">
                  {education.institution}
                </p>

                <p className="text-xs font-mono text-slate-400">
                  {education.location}
                </p>
              </div>
            </div>

            {/* Notable Achievements */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Award size={20} className="text-purple-400" /> Notable Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                        <Trophy size={16} className="text-purple-400" /> {ach.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {ach.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{ach.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{ach.detail}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
