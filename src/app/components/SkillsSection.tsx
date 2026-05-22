'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillCategory {
  title: string;
  icon: string;
  iconVariant: 'outline' | 'solid';
  color: string;
  borderColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'CodeBracketIcon',
    iconVariant: 'outline',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    skills: ['Python', 'C++', 'SQL', 'C', 'JavaScript', 'HTML/CSS', 'Git', 'MicroPython'],
  },
  {
    title: 'AI & Backend',
    icon: 'CpuChipIcon',
    iconVariant: 'outline',
    color: 'text-secondary-foreground',
    borderColor: 'border-primary/20',
    skills: ['FastAPI', 'Asyncio', 'Google ADK', 'WebSockets', 'Agentic AI', 'Pathway'],
  },
  {
    title: 'Machine Learning',
    icon: 'BeakerIcon',
    iconVariant: 'outline',
    color: 'text-accent',
    borderColor: 'border-accent/20',
    skills: [
      'Scikit-learn',
      'OpenCV',
      'NLP',
      'Neural Networks',
      'Supervised Learning',
      'Unsupervised Learning',
    ],
  },
  {
    title: 'Engineering & Tools',
    icon: 'WrenchScrewdriverIcon',
    iconVariant: 'outline',
    color: 'text-secondary-foreground',
    borderColor: 'border-primary/20',
    skills: ['Linux', 'CI/CD', 'TDD', 'Agile', 'OOP', 'DSA', 'Firebase', 'Gemini SDK'],
  },
];

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Skills"
    >
      <div
        className="blob-primary absolute w-[300px] h-[300px] top-0 right-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-section-label text-primary mb-4">Technical Arsenal</p>
          <h2 className="text-display font-bold text-foreground">
            Skills &amp;{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* 2x2 skill category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`glass-card p-6 flex flex-col gap-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIdx * 120}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 ${cat.color}`}>
                  <Icon name={cat.icon as any} size={18} variant={cat.iconVariant} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className={`skill-pill px-3 py-1.5 text-xs font-semibold ${cat.color}`}
                    style={{ transitionDelay: `${catIdx * 120 + skillIdx * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}