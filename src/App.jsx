import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Inline PDF Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
