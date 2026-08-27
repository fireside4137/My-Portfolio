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
      // Send real email via FormSubmit API to swapnilupadhyay4137@gmail.com
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
          _subject: `New Portfolio Message from ${formData.name}`,
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
      // Fallback: Open mailto client if API call fails
      setError('Live API delivery requires email activation link confirmation. Opening your mail client as fallback...');
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Open for Data Science, Data Analysis, and Software Engineering roles. Feel free to send a message here or copy my direct email!
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Official Email</div>
              <div className="text-sm font-semibold text-slate-100 truncate">{personalInfo.email}</div>
              <button
                onClick={handleCopyEmail}
                className="w-full mt-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
              >
                {copied ? <><Check size={14} className="text-emerald-400" /> Copied to Clipboard!</> : <><Copy size={14} /> Copy Email Address</>}
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Github size={16} /> GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-slate-100">Send Me a Direct Email</h3>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check size={16} className="shrink-0" /> Message sent successfully! Check your inbox for activation if this is the first submission.
                </div>
              )}

              {error && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div>{error}</div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Swapnil, I came across your portfolio..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending Email...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message to Gmail
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
