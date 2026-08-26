import React from 'react';
import { Database, Cpu, Layers, Code, CheckCircle2 } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Science & Statistics",
      icon: <Database className="text-cyan-400" size={20} />,
      items: skills.dataScience,
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    },
    {
      title: "AI & Computer Vision",
      icon: <Cpu className="text-emerald-400" size={20} />,
      items: skills.aiBiometrics,
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    {
      title: "Backend & Database Engineering",
      icon: <Layers className="text-purple-400" size={20} />,
      items: skills.backendDatabase,
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    },
    {
      title: "Frontend & Infrastructure",
      icon: <Code className="text-amber-400" size={20} />,
      items: skills.frontendDevOps,
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
            Technical Stack
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Skills & Technical Proficiency
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            A comprehensive matrix of tools, statistical models, framework libraries, and infrastructure environments I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-1.5 ${cat.badgeColor}`}
                  >
                    <CheckCircle2 size={12} className="opacity-70" />
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
