import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, GraduationCap, Award, Trophy, Camera } from 'lucide-react';
import { experiences, educationList, achievements } from '../data/portfolioData';
import FootballPhotosModal from './FootballPhotosModal';

export default function Experience() {
  const [isFootballModalOpen, setIsFootballModalOpen] = useState(false);

  return (
    <div className="space-y-12">
      
      {/* 1. Work Experience Section */}
      <section id="experience" className="py-14 border-b border-paper-400 dark:border-obsidian-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
              <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Industry Practice</span>
              <span>//</span>
              <span>Production Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight flex items-center gap-2.5">
              Professional Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-paper-300 dark:border-obsidian-700">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-paper-900 dark:text-obsidian-50">
                      {exp.role} <span className="text-sage-600 dark:text-sage-400 font-sans font-medium">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-obsidian-200 mt-1">
                      <span className="flex items-center gap-1"><Building2 size={12} /> {exp.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-sage-100 dark:bg-obsidian-900 text-sage-700 dark:text-sage-400 text-xs font-mono border border-sage-300 dark:border-obsidian-700 self-start sm:self-auto font-medium">
                    {exp.type}
                  </span>
                </div>

                <div className="space-y-2.5 font-sans">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-sage-600 dark:text-sage-400 font-mono text-xs mt-1 shrink-0">✦</span>
                      <p className="text-sm text-stone-700 dark:text-obsidian-100 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-paper-300 dark:border-obsidian-700 font-mono text-xs">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-paper-200 dark:bg-obsidian-700 text-stone-800 dark:text-obsidian-50 border border-paper-400 dark:border-obsidian-500 text-[11px]">
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
      <section id="education" className="py-14 border-b border-paper-400 dark:border-obsidian-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
              <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Academic Foundation</span>
              <span>//</span>
              <span>Qualifications &amp; Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight flex items-center gap-2.5">
              Education &amp; Academic Qualifications
            </h2>
          </div>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-paper-900 dark:text-obsidian-50">
                      {edu.degree}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded bg-paper-200 dark:bg-obsidian-900 text-stone-900 dark:text-obsidian-50 text-xs font-mono font-bold border border-paper-300 dark:border-obsidian-700">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-sage-600 dark:text-sage-400 font-medium">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-obsidian-200 pt-0.5">
                    <span className="flex items-center gap-1"><Building2 size={12} /> {edu.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-obsidian-200 leading-relaxed pt-2 font-sans">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Notable Achievements Section */}
      <section className="py-14 border-b border-paper-400 dark:border-obsidian-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
              <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Milestones</span>
              <span>//</span>
              <span>Honors &amp; Merits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight flex items-center gap-2.5">
              Recognitions &amp; Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 shadow-sm space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-paper-200 dark:bg-obsidian-900 text-stone-600 dark:text-obsidian-200 text-[11px] font-mono border border-paper-300 dark:border-obsidian-700">
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-paper-900 dark:text-obsidian-50 flex items-center gap-2">
                    <Trophy size={16} className="text-amber-600 dark:text-amber-400 shrink-0" /> {ach.title}
                  </h3>

                  <p className="text-xs font-mono text-stone-500 dark:text-obsidian-200 mt-0.5">{ach.subtitle}</p>

                  <p className="text-xs text-stone-600 dark:text-obsidian-200 leading-relaxed pt-2 font-sans">
                    {ach.detail}
                  </p>
                </div>

                {/* Photo Trigger Button for Football Achievement */}
                {ach.title.includes("Football") && (
                  <div className="pt-2 border-t border-paper-300 dark:border-obsidian-700">
                    <button
                      onClick={() => setIsFootballModalOpen(true)}
                      className="px-3 py-1.5 rounded bg-paper-100 dark:bg-obsidian-700 hover:bg-paper-200 dark:hover:bg-obsidian-600 text-stone-700 dark:text-obsidian-100 text-xs font-mono flex items-center gap-1.5 border border-paper-300 dark:border-obsidian-600 transition-colors w-full justify-center"
                    >
                      <Camera size={13} /> View Meet Photos (2)
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
