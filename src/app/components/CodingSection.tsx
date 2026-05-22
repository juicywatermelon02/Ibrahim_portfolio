'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const codingProfiles = [
  {
    platform: 'LeetCode',
    handle: 'ibrahimazeem',
    stat: '150+',
    statLabel: 'Problems Solved',
    detail: 'Trees · DP · Graphs · Arrays · Strings',
    color: 'text-accent',
    bg: 'bg-accent/10',
    borderColor: 'border-accent/20',
    href: 'https://leetcode.com/ibrahimazeem',
  },
  {
    platform: 'Codeforces',
    handle: 'ibrahimazeem',
    stat: 'Active',
    statLabel: 'Competitive Coder',
    detail: 'Rating building · Regular contests',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
    borderColor: 'border-primary/20',
    href: 'https://codeforces.com/profile/ibrahimazeem',
  },
  {
    platform: 'CodeChef',
    handle: 'ibrahimazeem',
    stat: 'Active',
    statLabel: 'Competitive Coder',
    detail: 'Monthly challenges · Long contests',
    color: 'text-accent',
    bg: 'bg-accent/10',
    borderColor: 'border-accent/20',
    href: 'https://codechef.com/users/ibrahimazeem',
  },
];

const dsaTopics = [
  { label: 'Trees', level: 88 },
  { label: 'Dynamic Programming', level: 75 },
  { label: 'Arrays', level: 92 },
  { label: 'Graphs', level: 70 },
  { label: 'String Algorithms', level: 80 },
];

const terminalLines = [
  { prefix: '$ ', text: 'leetcode stats --user ibrahimazeem', color: 'text-accent' },
  { prefix: '  ', text: 'Problems Solved: 150+', color: 'text-secondary-foreground' },
  { prefix: '  ', text: 'Acceptance Rate: 68.4%', color: 'text-muted-foreground' },
  { prefix: '  ', text: 'Difficulty: Easy(48) Medium(79) Hard(23)', color: 'text-muted-foreground' },
  { prefix: '$ ', text: 'expertise --areas', color: 'text-accent' },
  { prefix: '  ', text: '✓ Trees  ✓ DP  ✓ Arrays  ✓ Graphs  ✓ Strings', color: 'text-secondary-foreground' },
  { prefix: '$ ', text: 'status', color: 'text-accent' },
  { prefix: '  ', text: 'Actively solving · Building expertise', color: 'text-secondary-foreground' },
];

const certifications = [
  {
    title: 'Machine Learning Certification',
    issuer: 'IIT Guwahati',
    year: '2024',
    icon: 'AcademicCapIcon',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
  },
  {
    title: 'Google GDG Member',
    issuer: 'Google Developer Groups',
    year: '2025',
    icon: 'StarIcon',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    title: 'GDG Agentathon 2025 Participant',
    issuer: 'Google Developer Groups',
    year: '2025',
    icon: 'TrophyIcon',
    color: 'text-secondary-foreground',
    bg: 'bg-primary/10',
  },
];

export default function CodingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [typedLines, setTypedLines] = useState(0);

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

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedLines(i);
      if (i >= terminalLines.length) clearInterval(timer);
    }, 220);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section
      id="coding"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Coding Profile and Certifications"
    >
      <div
        className="blob-primary absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-20">
        {/* Coding profiles */}
        <div>
          <div
            className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-section-label text-primary mb-4">Competitive Programming</p>
            <h2 className="text-display font-bold text-foreground">
              Coding{' '}
              <span className="gradient-text">Profile</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Terminal */}
            <div
              className={`terminal-bg p-5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  ibrahimazeem@nitw ~ competitive
                </span>
              </div>
              <div className="space-y-1.5 min-h-[200px]">
                {terminalLines.slice(0, typedLines).map((line, i) => (
                  <div key={i} className="flex gap-2 text-xs font-mono">
                    <span className="text-muted-foreground shrink-0">{line.prefix}</span>
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
                {typedLines < terminalLines.length && (
                  <div className="flex gap-2 text-xs font-mono">
                    <span className="text-muted-foreground">$ </span>
                    <span className="w-2 h-4 bg-accent animate-blink inline-block" />
                  </div>
                )}
              </div>
            </div>

            {/* DSA topics + platform cards */}
            <div className="space-y-5">
              {/* DSA proficiency */}
              <div
                className={`glass-card p-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <h3 className="text-sm font-bold text-foreground mb-4">DSA Expertise</h3>
                <div className="space-y-3">
                  {dsaTopics.map((topic) => (
                    <div key={topic.label} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground font-medium">{topic.label}</span>
                        <span className="text-secondary-foreground font-semibold">{topic.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: visible ? `${topic.level}%` : '0%',
                            background: 'linear-gradient(90deg, #7C3AED, #3B82F6)',
                            transitionDelay: '600ms',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform cards */}
              <div className="grid grid-cols-3 gap-3">
                {codingProfiles.map((p, i) => (
                  <a
                    key={p.platform}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-4 flex flex-col gap-2 project-card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                    aria-label={`${p.platform} profile`}
                  >
                    <span className={`text-section-label ${p.color}`}>{p.platform}</span>
                    <span className={`text-xl font-extrabold ${p.color}`}>{p.stat}</span>
                    <span className="text-xs text-muted-foreground">{p.statLabel}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div
            className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-section-label text-primary mb-4">Credentials</p>
            <h2 className="text-display font-bold text-foreground">
              Certifications &amp;{' '}
              <span className="gradient-text">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`glass-card p-6 flex flex-col gap-4 project-card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + i * 120}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl ${cert.bg} flex items-center justify-center ${cert.color}`}>
                  <Icon name={cert.icon as any} size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-snug">{cert.title}</h3>
                  <p className={`text-xs font-semibold mt-1 ${cert.color}`}>{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}