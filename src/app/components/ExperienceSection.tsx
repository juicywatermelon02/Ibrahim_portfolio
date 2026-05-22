'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const experience = {
  role: 'Software Engineering Intern',
  company: 'KFUPM Hyperspectral Imaging System',
  period: '2024 – Present',
  location: 'Remote / Dhahran, Saudi Arabia',
  description:
    'Worked on a cutting-edge hyperspectral imaging pipeline for KFUPM, building automated data ingestion systems, cross-platform GUI tools, and hardware-software integration layers.',
  highlights: [
    { text: 'Built hyperspectral data pipelines for spectral analysis', icon: 'ChartBarIcon' },
    { text: 'Automated data ingestion reducing manual effort by 30%', icon: 'BoltIcon' },
    { text: 'Developed cross-platform GUI tools for data visualization', icon: 'ComputerDesktopIcon' },
    { text: 'Reduced operational errors by 30% through automation', icon: 'ShieldCheckIcon' },
    { text: 'Improved system reliability by 15% via robust error handling', icon: 'ArrowTrendingUpIcon' },
    { text: 'Hardware-software integration for imaging sensors', icon: 'CpuChipIcon' },
  ],
};

const leadership = [
  {
    role: 'Joint Secretary',
    org: 'Robotics Club NITW',
    icon: 'CogIcon',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
    description: 'Organized robotics workshops and competitive events for 200+ student members.',
  },
  {
    role: 'Secretary of Events',
    org: 'IEEE Student Branch',
    icon: 'AcademicCapIcon',
    color: 'text-accent',
    bg: 'bg-accent/10',
    description: 'Coordinated technical seminars and IEEE flagship events across NIT Warangal campus.',
  },
  {
    role: 'Student Coordinator',
    org: 'Dean International Relations',
    icon: 'GlobeAltIcon',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
    description: 'Facilitated international student exchange programs and global academic partnerships.',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Experience and Leadership"
    >
      <div
        className="blob-accent absolute w-[350px] h-[350px] bottom-0 left-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-20">
        {/* Experience */}
        <div>
          <div
            className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-section-label text-primary mb-4">Work Experience</p>
            <h2 className="text-display font-bold text-foreground">
              Where I&apos;ve{' '}
              <span className="gradient-text">Worked</span>
            </h2>
          </div>

          <div
            className={`glass-card gradient-border p-7 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
                <p className="text-secondary-foreground font-semibold mt-1">{experience.company}</p>
                <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-card-light text-muted-foreground border-white/10">
                <Icon name="CalendarIcon" size={13} />
                {experience.period}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {experience.description}
            </p>

            {/* Timeline of highlights */}
            <div className="relative pl-5">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px timeline-line" aria-hidden="true" />

              <div className="space-y-5">
                {experience.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 relative"
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-[1.35rem] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background shrink-0" />
                    <div className="flex items-start gap-3">
                      <Icon name={h.icon as any} size={15} className="text-secondary-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{h.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <div
            className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-section-label text-primary mb-4">Leadership</p>
            <h2 className="text-display font-bold text-foreground">
              Community &amp;{' '}
              <span className="gradient-text">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {leadership.map((item, i) => (
              <div
                key={item.org}
                className={`glass-card p-6 flex flex-col gap-4 project-card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                  <Icon name={item.icon as any} size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.role}</h3>
                  <p className={`text-xs font-semibold mt-1 ${item.color}`}>{item.org}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}