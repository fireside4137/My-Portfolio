import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const categories = [
    { title: "Statistical Modeling & Machine Learning", items: skills.dataScience },
    { title: "Deep Learning & Representation AI", items: skills.aiBiometrics },
    { title: "Distributed Backend & Relational Architecture", items: skills.backendDatabase },
    { title: "Scientific Visualization & Data Tooling", items: skills.frontendDevOps }
  ];

  return (
    <section id="skills" className="py-16 border-b border-paper-400 dark:border-obsidian-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
            <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Technical Ledger</span>
            <span>//</span>
            <span>Core Tooling &amp; Theory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight">
            Capabilities &amp; Scientific Stack
          </h2>
          <p className="text-sm text-stone-600 dark:text-obsidian-200 mt-2 max-w-2xl font-sans leading-relaxed">
            Proficiencies across mathematical statistics, neural network regularization, database isolation, and high-performance inference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-paper-300 dark:border-obsidian-700">
                <h3 className="text-sm font-mono font-semibold text-paper-900 dark:text-obsidian-50 flex items-center gap-2">
                  <span className="text-sage-600 dark:text-sage-400 font-bold">0{idx + 1} //</span> {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {cat.items.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded bg-paper-100 dark:bg-obsidian-900 text-stone-700 dark:text-obsidian-200 border border-paper-300 dark:border-obsidian-700 hover:border-sage-600 dark:hover:border-sage-400 transition-colors">
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
