import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const categories = [
    { title: "Data Science & Statistics", items: skills.dataScience },
    { title: "AI & Computer Vision", items: skills.aiBiometrics },
    { title: "Backend & Databases", items: skills.backendDatabase },
    { title: "Frontend & Tools", items: skills.frontendDevOps }
  ];

  return (
    <section id="skills" className="py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-base font-bold text-slate-100 mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
