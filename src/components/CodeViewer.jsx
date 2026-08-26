import React, { useState } from 'react';
import { Code, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { codeSnippets } from '../data/portfolioData';

export default function CodeViewer() {
  const [activeTab, setActiveTab] = useState('pythonDataScience');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'pythonDataScience', label: 'Python OLS Regression', language: 'python' },
    { id: 'sqlRLS', label: 'PostgreSQL Multi-Tenant RLS', language: 'sql' },
    { id: 'biometrics', label: 'FaceID & SVM Vector Pipeline', language: 'python' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Terminal size={14} className="text-cyan-400" /> Production Code Inspector
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-slate-900/90 border-b border-slate-800/80 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-slate-800 text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="p-4 bg-[#090d16] overflow-x-auto max-h-80 text-xs font-mono text-slate-200 leading-relaxed">
        <pre>
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}
