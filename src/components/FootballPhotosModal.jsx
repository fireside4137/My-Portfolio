import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Trophy, Camera } from 'lucide-react';
import useAccessibleDialog from '../hooks/useAccessibleDialog';

export default function FootballPhotosModal({ isOpen, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const dialogRef = useAccessibleDialog(isOpen, onClose);

  if (!isOpen) return null;

  const photos = [
    {
      url: '/football1.jpg',
      caption: 'Inter-Collegiate Football Tournament — University Sports Meet Squad Photo'
    },
    {
      url: '/football2.jpg',
      caption: 'Inter-Collegiate Football Tournament — Runner-Up Trophy & Presentation'
    }
  ];

  const nextPhoto = () => {
    setActiveIdx((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActiveIdx((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/50 dark:bg-black/80 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="football-photos-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-3xl bg-paper-100 dark:bg-obsidian-900 border border-paper-400 dark:border-obsidian-500 rounded-xl shadow-2xl overflow-hidden flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-3.5 bg-paper-50 dark:bg-obsidian-800 border-b border-paper-400 dark:border-obsidian-500 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-amber-600 dark:text-amber-400" />
            <div>
              <h3 id="football-photos-modal-title" className="text-base font-serif font-bold text-paper-900 dark:text-obsidian-50">
                Varsity Sports Meet Archive
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-obsidian-200 font-mono">
                Inter-Collegiate Football Tournament — Runner-Up Trophy ({activeIdx + 1} of {photos.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close football photos"
            className="p-1.5 rounded border border-paper-300 dark:border-obsidian-600 text-stone-500 dark:text-obsidian-300 hover:text-stone-900 dark:hover:text-white hover:bg-paper-200 dark:hover:bg-obsidian-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Image Display Area with Fixed Aspect Container */}
        <div className="p-4 sm:p-6 bg-paper-100 dark:bg-obsidian-950 flex flex-col items-center justify-center">
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-lg bg-paper-200 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700 flex items-center justify-center overflow-hidden p-2">
            <img
              src={photos[activeIdx].url}
              alt={photos[activeIdx].caption}
              className="max-w-full max-h-full object-contain rounded shadow-sm transition-all duration-300"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="absolute left-3 p-2 rounded-full bg-paper-100/90 dark:bg-obsidian-800/90 hover:bg-paper-50 dark:hover:bg-obsidian-700 text-stone-800 dark:text-obsidian-100 border border-paper-400 dark:border-obsidian-600 transition-colors shadow-md"
              title="Previous Photo"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="absolute right-3 p-2 rounded-full bg-paper-100/90 dark:bg-obsidian-800/90 hover:bg-paper-50 dark:hover:bg-obsidian-700 text-stone-800 dark:text-obsidian-100 border border-paper-400 dark:border-obsidian-600 transition-colors shadow-md"
              title="Next Photo"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Caption & Indicators */}
          <div className="mt-3.5 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-stone-700 dark:text-obsidian-200 font-sans text-center sm:text-left flex items-center gap-1.5">
              <Camera size={13} className="text-sage-600 dark:text-sage-400 shrink-0" />
              {photos[activeIdx].caption}
            </p>

            <div className="flex items-center gap-1.5 font-mono text-xs">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Show photo ${idx + 1}`}
                  aria-pressed={activeIdx === idx}
                  className={`px-2.5 py-1 rounded transition-all ${
                    activeIdx === idx
                      ? 'bg-paper-900 text-paper-50 dark:bg-obsidian-50 dark:text-obsidian-900 font-bold'
                      : 'bg-paper-200 text-stone-600 dark:bg-obsidian-800 dark:text-obsidian-300 hover:text-stone-900 dark:hover:text-obsidian-100'
                  }`}
                >
                  Photo {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
