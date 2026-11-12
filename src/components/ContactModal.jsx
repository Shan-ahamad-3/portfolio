import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../data/resume';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full bg-[#12151e] border border-[var(--border-card)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl cursor-default"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 cursor-pointer transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Header: Exact Phrasing */}
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase theme-accent font-bold tracking-wider">
                Get in Touch
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Initiate a Conversation
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Send a direct message regarding entry-level Python and data opportunities.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] flex items-center gap-2 hover:border-[var(--accent)] transition-colors truncate"
              >
                <FiMail className="w-4 h-4 theme-accent shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] flex items-center gap-2 hover:border-[var(--accent)] transition-colors"
              >
                <FiPhone className="w-4 h-4 theme-accent shrink-0" />
                <span>+91 {profile.phone}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] flex items-center gap-2 hover:border-[var(--accent)] transition-colors"
              >
                <FiLinkedin className="w-4 h-4 theme-accent shrink-0" />
                <span>LinkedIn</span>
              </a>

              <div className="p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] flex items-center gap-2 text-[var(--text-secondary)]">
                <FiMapPin className="w-4 h-4 theme-accent shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Mailto Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-[var(--text-secondary)]">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Hiring Lead"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent)]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[var(--text-secondary)]">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[var(--text-secondary)]">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity: Python / Data Analytics Role"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent)]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[var(--text-secondary)]">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discussing entry-level data processing workflows, Python pipelines, or team opportunities..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-card)] text-[var(--text-primary)] focus:outline-hidden focus:border-[var(--accent)] resize-none"
                />
              </div>

              {/* Robust Non-wrapping Button with Ample Horizontal Padding */}
              <button
                type="submit"
                className="w-full py-3.5 px-8 rounded-lg theme-accent-bg text-[#090a0f] font-bold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm whitespace-nowrap hover:opacity-90"
              >
                <FiSend className="w-4 h-4 shrink-0" />
                <span>Send Message</span>
              </button>
            </form>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
