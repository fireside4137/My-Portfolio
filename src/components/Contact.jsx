import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError('Form submission encountered an issue. Opening mail client...');
      setTimeout(() => {
        const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUri;
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Direct Info Column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-obsidian-200 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-600 dark:bg-sage-400"></span>
                <span className="uppercase tracking-wider font-semibold text-stone-800 dark:text-obsidian-50">Communication Desk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-paper-900 dark:text-obsidian-50 tracking-tight">
                Let&apos;s Collaborate
              </h2>
              <p className="text-stone-600 dark:text-obsidian-200 text-sm mt-2 leading-relaxed font-sans">
                Open for Data Science, Quantitative Modeling, Machine Learning Engineering, and Full-Stack Data positions. Send a message or reach out directly.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 space-y-2 font-mono">
              <div className="text-[10px] text-stone-500 dark:text-obsidian-200 uppercase tracking-wider">Direct Inbox</div>
              <div className="text-sm font-bold text-paper-900 dark:text-obsidian-50 truncate">{personalInfo.email}</div>
              <button
                onClick={handleCopyEmail}
                className="w-full mt-1 py-1.5 rounded bg-paper-100 dark:bg-obsidian-700 hover:bg-paper-200 dark:hover:bg-obsidian-600 text-stone-800 dark:text-obsidian-100 text-xs transition-colors flex items-center justify-center gap-1.5 border border-paper-300 dark:border-obsidian-600"
              >
                {copied ? <><Check size={13} className="text-sage-600 dark:text-sage-400" /> Copied to Clipboard!</> : <><Copy size={13} /> Copy Email Address</>}
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded bg-paper-50 dark:bg-obsidian-800 border border-paper-400 dark:border-obsidian-500 text-stone-700 dark:text-obsidian-200 hover:text-stone-950 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded bg-paper-50 dark:bg-obsidian-800 border border-paper-400 dark:border-obsidian-500 text-stone-700 dark:text-obsidian-200 hover:text-stone-950 dark:hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-paper-50 dark:bg-obsidian-800/60 border border-paper-400 dark:border-obsidian-500 space-y-4 shadow-sm">
              <div className="border-b border-paper-300 dark:border-obsidian-700 pb-3">
                <h3 className="text-base font-serif font-bold text-paper-900 dark:text-obsidian-50">Dispatch Direct Ingestion Form</h3>
                <p className="text-xs font-mono text-stone-500 dark:text-obsidian-200 mt-0.5">Delivered immediately to author inbox</p>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-sage-50 dark:bg-obsidian-900 border border-sage-300 dark:border-obsidian-700 text-sage-800 dark:text-sage-300 text-xs font-mono flex items-center gap-2">
                  <Check size={15} className="shrink-0 text-sage-600 dark:text-sage-400" /> Message delivered successfully!
                </div>
              )}

              {error && (
                <div className="p-3 rounded-lg bg-terracotta-50 dark:bg-obsidian-900 border border-terracotta-300 dark:border-obsidian-700 text-terracotta-700 dark:text-terracotta-400 text-xs font-mono flex items-start gap-2">
                  <AlertCircle size={15} className="shrink-0 mt-0.5" />
                  <div>{error}</div>
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="block text-[11px] font-mono text-stone-600 dark:text-obsidian-200 mb-1 uppercase tracking-wider">Sender Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded bg-paper-100 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700 text-stone-900 dark:text-obsidian-50 text-sm focus:outline-none focus:border-sage-600 dark:focus:border-sage-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[11px] font-mono text-stone-600 dark:text-obsidian-200 mb-1 uppercase tracking-wider">Sender Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 rounded bg-paper-100 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700 text-stone-900 dark:text-obsidian-50 text-sm focus:outline-none focus:border-sage-600 dark:focus:border-sage-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11px] font-mono text-stone-600 dark:text-obsidian-200 mb-1 uppercase tracking-wider">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Swapnil, I reviewed your research and would like to discuss..."
                  className="w-full px-3 py-2 rounded bg-paper-100 dark:bg-obsidian-900 border border-paper-300 dark:border-obsidian-700 text-stone-900 dark:text-obsidian-50 text-sm focus:outline-none focus:border-sage-600 dark:focus:border-sage-400 transition-colors resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded bg-sage-600 hover:bg-sage-700 text-white dark:bg-sage-400 dark:hover:bg-sage-500 dark:text-stone-950 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Transmitting Message...
                  </>
                ) : (
                  <>
                    <Send size={13} /> Dispatch Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
