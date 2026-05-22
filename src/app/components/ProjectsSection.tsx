'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  result?: string;
  tags: string[];
  features: string[];
  accent: string;
  accentBg: string;
  github: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'docreviver',
    title: 'DocReviver',
    subtitle: 'Agentic Memory Surgeon',
    description:
      'An advanced multi-agent AI system capable of repairing and reconstructing documents using intelligent agent collaboration with real-time observability and stateful memory.',
    tags: ['FastAPI', 'Google ADK', 'WebSockets', 'Multi-Agent', 'Agentic AI'],
    features: [
      'FastAPI async backend',
      'WebSocket telemetry',
      'Multi-agent architecture',
      'Google ADK integration',
      'Stateful memory system',
      'Real-time observability',
    ],
    accent: 'text-secondary-foreground',
    accentBg: 'bg-primary/10',
    github: 'https://github.com/ibrahimazeem',
    featured: true,
  },
  {
    id: 'ml-pipeline',
    title: 'ML Predictive Modeling',
    subtitle: 'High-Performance Forecasting',
    description:
      'High-performance forecasting system using Rust-powered stream processing and real-time ML pipelines. Improved forecasting accuracy by 18% through optimized data ingestion.',
    result: '18% improvement in forecasting accuracy',
    tags: ['Rust', 'Scikit-learn', 'Pathway', 'Streaming ML'],
    features: [
      'Rust-powered stream processing',
      'Real-time ML inference',
      'Pathway integration',
      'Optimized data pipelines',
    ],
    accent: 'text-accent',
    accentBg: 'bg-accent/10',
    github: 'https://github.com/ibrahimazeem',
    featured: false,
  },
  {
    id: 'microstation',
    title: 'Microstation Automation',
    subtitle: 'Railway Engineering Workflows',
    description:
      'Automation framework for railway engineering workflows using Python scripting and DGN file processing. Achieved 35% faster processing and reduced reporting errors.',
    result: '35% faster processing, reduced reporting errors',
    tags: ['Python', 'DGN Processing', 'Automation', 'CI/CD'],
    features: [
      'Python scripting automation',
      'DGN file processing',
      'Workflow orchestration',
      'Error reduction system',
    ],
    accent: 'text-secondary-foreground',
    accentBg: 'bg-primary/10',
    github: 'https://github.com/ibrahimazeem',
    featured: false,
  },
];

export default function ProjectsSection() {
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

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Projects"
    >
      <div
        className="blob-accent absolute w-[400px] h-[400px] bottom-0 right-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-section-label text-primary mb-4">Featured Work</p>
          <h2 className="text-display font-bold text-foreground">
            Projects that{' '}
            <span className="gradient-text">ship.</span>
          </h2>
        </div>

        {/* Bento grid: DocReviver (col-span-2) + ML Predictive (col-span-1) top row, Microstation (col-span-3) bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* DocReviver — featured, col-span-2 */}
          {featured && (
            <div
              className={`lg:col-span-2 project-card glass-card gradient-border p-7 flex flex-col gap-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-section-label ${featured.accent}`}>
                      {featured.subtitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-secondary-foreground">
                      FEATURED
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{featured.title}</h3>
                </div>
                <div className={`w-12 h-12 rounded-xl ${featured.accentBg} flex items-center justify-center shrink-0`}>
                  <Icon name="CpuChipIcon" size={22} className="text-secondary-foreground" />
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {featured.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-2">
                {featured.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="skill-pill px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                  <Icon name="CodeBracketIcon" size={15} />
                  View Case Study
                </a>
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2 text-sm">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          )}

          {/* ML Predictive — col-span-1 */}
          {rest[0] && (
            <div
              className={`lg:col-span-1 project-card glass-card p-6 flex flex-col gap-5 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`w-10 h-10 rounded-xl ${rest[0].accentBg} flex items-center justify-center`}>
                <Icon name="ChartBarIcon" size={20} className="text-accent" />
              </div>
              <div>
                <p className={`text-section-label ${rest[0].accent} mb-1`}>{rest[0].subtitle}</p>
                <h3 className="text-lg font-bold text-foreground">{rest[0].title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {rest[0].description}
              </p>
              {rest[0].result && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                  <Icon name="ArrowTrendingUpIcon" size={14} className="text-accent shrink-0" />
                  <span className="text-xs font-semibold text-accent">{rest[0].result}</span>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {rest[0].tags.map((tag) => (
                  <span key={tag} className="skill-pill px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={rest[0].github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center justify-center gap-2 text-sm mt-auto">
                <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                View Project
              </a>
            </div>
          )}

          {/* Microstation — col-span-3 (full width) */}
          {rest[1] && (
            <div
              className={`lg:col-span-3 project-card glass-card p-6 flex flex-col md:flex-row gap-6 items-start transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`w-12 h-12 rounded-xl ${rest[1].accentBg} flex items-center justify-center shrink-0`}>
                <Icon name="WrenchScrewdriverIcon" size={22} className="text-secondary-foreground" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className={`text-section-label ${rest[1].accent} mb-1`}>{rest[1].subtitle}</p>
                  <h3 className="text-xl font-bold text-foreground">{rest[1].title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {rest[1].description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {rest[1].tags.map((tag) => (
                    <span key={tag} className="skill-pill px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                {rest[1].result && (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon name="BoltIcon" size={14} className="text-secondary-foreground shrink-0" variant="solid" />
                    <span className="text-xs font-semibold text-secondary-foreground">{rest[1].result}</span>
                  </div>
                )}
                <a href={rest[1].github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center justify-center gap-2 text-sm">
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                  View Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}