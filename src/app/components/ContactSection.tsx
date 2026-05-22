'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactLinks = [
  {
    label: 'Email',
    value: 'ibrahim.azeem@email.com',
    href: 'mailto:ibrahim.azeem@email.com',
    icon: 'EnvelopeIcon',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ibrahimazeem',
    href: 'https://linkedin.com/in/ibrahimazeem',
    icon: 'UserIcon',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
  },
  {
    label: 'GitHub',
    value: 'github.com/ibrahimazeem',
    href: 'https://github.com/ibrahimazeem',
    icon: 'CodeBracketIcon',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend connection point — wire up to email service or API here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Contact Ibrahim Azeem"
    >
      <div
        className="blob-primary absolute w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="blob-accent absolute w-[300px] h-[300px] top-0 left-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-section-label text-primary mb-4">Get In Touch</p>
          <h2 className="text-display font-bold text-foreground">
            Let&apos;s Build{' '}
            <span className="gradient-text">Together.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
            Open to internships, AI research collaborations, software engineering opportunities,
            and high-impact projects. Let&apos;s connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <div
            className={`lg:col-span-3 glass-card gradient-border p-7 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="CheckIcon" size={28} className="text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold gradient-text">Message Sent!</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Icon name="PaperAirplaneIcon" size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right side — 2 cols */}
          <div
            className={`lg:col-span-2 flex flex-col gap-5 justify-between transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card flex items-center gap-4 p-4 project-card group"
                >
                  <div className={`w-10 h-10 rounded-xl ${link.bg} flex items-center justify-center ${link.color} shrink-0`}>
                    <Icon name={link.icon as any} size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </div>
                    <div className="text-sm text-foreground font-medium truncate group-hover:text-secondary-foreground transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-muted-foreground ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Resume + Calendly */}
            <div className="space-y-3">
              <a
                href="#"
                download
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Icon name="ArrowDownTrayIcon" size={16} />
                Download Resume
              </a>
              <a
                href="https://calendly.com/ibrahimazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full flex items-center justify-center gap-2"
              >
                <Icon name="CalendarDaysIcon" size={16} />
                Schedule a Call
              </a>

              {/* Availability badge */}
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-foreground">Available for Opportunities</div>
                  <div className="text-xs text-muted-foreground">Internships · Research · Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}