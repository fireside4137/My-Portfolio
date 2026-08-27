import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, GraduationCap, Award, Trophy, Camera } from 'lucide-react';
import { experiences, educationList, achievements } from '../data/portfolioData';
import FootballPhotosModal from './FootballPhotosModal';

export default function Experience() {
  const [isFootballModalOpen, setIsFootballModalOpen] = useState(false);

  return (
    <div className="space-y-16">
      
      {/* 1. Work Experience Section */}
      <section id="experience" className="py-16 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
              Industry Experience
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2.5">
              <Briefcase className="text-cyan-400" size={28} /> Professional Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-1">
                      <span className="flex items-center gap-1"><Building2 size={13} /> {exp.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={13} /> {exp.period}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Education History Section */}
      <section id="education" className="py-16 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-2">
              Academic Qualifications
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2.5">
              <GraduationCap className="text-emerald-400" size={28} /> Education & Academic Background
            </h2>
          </div>

          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-cyan-400">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1"><Building2 size={13} /> {edu.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={13} /> {edu.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Notable Achievements Section */}
      <section className="py-16 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono mb-2">
              Recognitions & Awards
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2.5">
              <Award className="text-purple-400" size={28} /> Key Achievements & Honors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20">
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <Trophy size={18} className="text-purple-400 shrink-0" /> {ach.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1">{ach.subtitle}</p>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {ach.detail}
                  </p>
                </div>

                {/* Photo Trigger Button for Football Achievement */}
                {ach.title.includes("Football") && (
                  <div className="pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setIsFootballModalOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-1.5 border border-purple-500/30 transition-colors w-full justify-center"
                    >
                      <Camera size={14} /> View Tournament Photos (2)
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Football Photos Lightbox Modal */}
      <FootballPhotosModal
        isOpen={isFootballModalOpen}
        onClose={() => setIsFootballModalOpen(false)}
      />

    </div>
  );
}
