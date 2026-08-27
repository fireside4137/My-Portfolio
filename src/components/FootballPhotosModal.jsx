import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Trophy, Camera } from 'lucide-react';

export default function FootballPhotosModal({ isOpen, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isOpen) return null;

  const photos = [
    {
      url: '/football1.jpg',
      caption: 'Inter-Collegiate Football Tournament — University Sports Meet Team Photo'
    },
    {
      url: '/football2.jpg',
      caption: 'Inter-Collegiate Football Tournament — Runner-Up Trophy & Team Moment'
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-purple-400" />
            <div>
              <h3 className="text-base font-bold text-slate-100">
                Inter-Collegiate Football Tournament Photos
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                University Sports Meet — Runner-Up Trophy ({activeIdx + 1} of {photos.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Image Display Area with Fixed Aspect Container */}
        <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center">
          {/* Uniform Container Frame (Fixed Height & Aspect) */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden p-2">
            <img
              src={photos[activeIdx].url}
              alt={photos[activeIdx].caption}
              className="max-w-full max-h-full object-contain rounded-lg shadow-md transition-all duration-300"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors shadow-lg"
              title="Previous Photo"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-3 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors shadow-lg"
              title="Next Photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Caption & Indicators */}
          <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-slate-300 font-medium text-center sm:text-left flex items-center gap-1.5">
              <Camera size={14} className="text-purple-400 shrink-0" />
              {photos[activeIdx].caption}
            </p>

            {/* Dots / Tabs */}
            <div className="flex items-center gap-2">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3 py-1 rounded-md font-mono transition-all ${
                    activeIdx === idx
                      ? 'bg-purple-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200'
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
