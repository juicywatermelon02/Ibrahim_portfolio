'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatItem {
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  icon: string;
  iconVariant: 'outline' | 'solid';
  color: string;
}

const stats: StatItem[] = [
  {
    value: '150',
    numericTarget: 150,
    suffix: '+',
    label: 'LeetCode Problems Solved',
    icon: 'CodeBracketIcon',
    iconVariant: 'outline',
    color: 'text-accent',
  },
  {
    value: '35',
    numericTarget: 35,
    suffix: '%',
    label: 'System Optimization Achieved',
    icon: 'BoltIcon',
    iconVariant: 'solid',
    color: 'text-secondary-foreground',
  },
  {
    value: '3',
    numericTarget: 3,
    suffix: '+',
    label: 'Real-time AI Pipelines Built',
    icon: 'CpuChipIcon',
    iconVariant: 'outline',
    color: 'text-accent',
  },
  {
    value: '1',
    numericTarget: 1,
    suffix: 'x',
    label: 'GDG Agentathon Participant',
    icon: 'TrophyIcon',
    iconVariant: 'solid',
    color: 'text-secondary-foreground',
  },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatCard({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.numericTarget, active);
  return (
    <div className="stat-card p-6 flex flex-col gap-4">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color} bg-white/5`}
      >
        <Icon name={stat.icon as any} size={20} variant={stat.iconVariant} />
      </div>
      <div>
        <div className={`counter-number font-extrabold ${stat.color} leading-none`}>
          {count}
          {stat.suffix}
        </div>
        <div className="text-sm text-muted-foreground mt-1 font-medium leading-snug">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      aria-label="About Ibrahim Azeem"
    >
      {/* Background accent */}
      <div
        className="blob-primary absolute w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-section-label text-primary mb-4">About Me</p>
          <h2 className="text-display font-bold text-foreground mb-12">
            Engineer.{' '}
            <span className="gradient-text">Builder.</span>{' '}
            Innovator.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              I&apos;m{' '}
              <span className="text-foreground font-semibold">Ibrahim Azeem</span>, a versatile
              software engineering intern and Electronics &amp; Communication Engineering student
              at{' '}
              <span className="text-secondary-foreground font-semibold">NIT Warangal</span> with a
              strong focus on backend systems, Agentic AI, asynchronous programming, and scalable
              software architecture.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I specialize in building real-time AI applications using{' '}
              <span className="text-foreground font-semibold">FastAPI</span>,{' '}
              <span className="text-foreground font-semibold">Google ADK</span>,{' '}
              <span className="text-foreground font-semibold">WebSockets</span>, and Rust-powered
              pipelines. My work combines high-performance engineering with intelligent automation
              systems capable of handling streaming workflows and live telemetry.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                'FastAPI Expert',
                'Agentic AI',
                'WebSocket Systems',
                'NIT Warangal',
                'Google ADK',
                'Rust Pipelines',
              ].map((tag) => (
                <span key={tag} className="skill-pill px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            {/* Download resume */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-ghost mt-2 text-sm"
            >
              <Icon name="ArrowDownTrayIcon" size={16} />
              Download Resume
            </a>
          </div>

          {/* Stats grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} active={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}