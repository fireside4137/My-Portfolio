import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import useAccessibleDialog from '../hooks/useAccessibleDialog';

export default function ResumeModal({ isOpen, onClose }) {
  const dialogRef = useAccessibleDialog(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 dark:bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-4xl h-[85vh] bg-paper-100 dark:bg-obsidian-900 border border-paper-400 dark:border-obsidian-500 rounded-xl shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-3.5 bg-paper-50 dark:bg-obsidian-800 border-b border-paper-400 dark:border-obsidian-500 flex items-center justify-between gap-4">
          <div>
            <h3 id="resume-modal-title" className="text-base font-serif font-bold text-paper-900 dark:text-obsidian-50">
              {personalInfo.name} — Curriculum Vitae
            </h3>
            <p className="text-[11px] text-stone-500 dark:text-obsidian-200 font-mono">
              Official Document Preview
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <a
              href={personalInfo.resumeUrl}
              download="Swapnil_Upadhyay_Resume.pdf"
              className="px-3 py-1.5 rounded bg-sage-600 hover:bg-sage-700 text-white dark:bg-sage-400 dark:hover:bg-sage-500 dark:text-stone-950 font-medium text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download size={13} /> Download PDF
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded border border-paper-300 dark:border-obsidian-600 text-stone-500 dark:text-obsidian-300 hover:text-stone-900 dark:hover:text-white hover:bg-paper-200 dark:hover:bg-obsidian-700 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 bg-paper-200 dark:bg-obsidian-950 p-2">
          <iframe
            src={personalInfo.resumeUrl}
            title="Resume PDF Preview"
            className="w-full h-full rounded border border-paper-300 dark:border-obsidian-800"
          />
        </div>
      </div>
    </div>
  );
}
