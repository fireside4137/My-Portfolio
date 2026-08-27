import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              {personalInfo.name} — Official Resume
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              PDF Preview Mode
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Swapnil_Upadhyay_Resume.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download size={14} /> Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 bg-slate-950 p-2">
          <iframe
            src={personalInfo.resumeUrl}
            title="Resume PDF Preview"
            className="w-full h-full rounded-xl border border-slate-800"
          />
        </div>
      </div>
    </div>
  );
}
