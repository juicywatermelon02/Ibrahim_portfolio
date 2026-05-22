'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
{
  label: 'GitHub',
  href: 'https://github.com/ibrahimazeem',
  icon:
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>

},
{
  label: 'LinkedIn',
  href: 'https://linkedin.com/in/ibrahimazeem',
  icon:
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

},
{
  label: 'LeetCode',
  href: 'https://leetcode.com/ibrahimazeem',
  icon:
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>

},
{
  label: 'Email',
  href: 'mailto:ibrahim.azeem@email.com',
  icon: <Icon name="EnvelopeIcon" size={18} />
}];


const codeSnippets = [
{
  lines: [
  { color: 'text-accent', text: 'async def' },
  { color: 'text-foreground', text: ' run_agent()' },
  { color: 'text-muted-foreground', text: ':' }],

  extra: [
  '  pipeline = ADKPipeline()',
  '  async for event in',
  '    pipeline.stream():',
  '    yield event.data'],

  delay: '0s',
  position: 'top-[12%] right-[2%] md:right-[5%]',
  rotation: 'rotate-[2deg]'
},
{
  lines: [
  { color: 'text-secondary-foreground', text: '@app.websocket' },
  { color: 'text-muted-foreground', text: '("/ws")' }],

  extra: [
  'async def ws_endpoint(',
  '  ws: WebSocket',
  '):',
  '  await ws.accept()'],

  delay: '0.3s',
  position: 'bottom-[18%] left-[1%] md:left-[2%]',
  rotation: 'rotate-[-2deg]'
}];


export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Stagger entrance animation
    const elements = document.querySelectorAll('.hero-entrance');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(32px)';
      setTimeout(() => {
        htmlEl.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)`;
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 140);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 overflow-hidden"
      aria-label="Hero section">
      
      {/* Atmospheric background layers */}
      <div
        className="absolute inset-0 mesh-bg pointer-events-none"
        aria-hidden="true" />
      

      {/* Blob layer 1 — background (0.3x parallax feel) */}
      <div
        className="blob-primary absolute w-[500px] h-[500px] top-[-10%] left-[-10%] animate-pulse-glow pointer-events-none"
        aria-hidden="true" />
      
      {/* Blob layer 2 */}
      <div
        className="blob-accent absolute w-[400px] h-[400px] bottom-[5%] right-[-5%] animate-float-slow pointer-events-none"
        aria-hidden="true" />
      
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true" />
      

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, idx) =>
      <div
        key={idx}
        className={`code-float-card absolute hidden lg:block p-4 w-64 ${snippet.position} ${snippet.rotation} animate-float-slow pointer-events-none z-10`}
        style={{ animationDelay: snippet.delay }}
        aria-hidden="true">
        
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex gap-1 flex-wrap">
            {snippet.lines.map((l, li) =>
          <span key={li} className={`text-xs ${l.color}`}>
                {l.text}
              </span>
          )}
          </div>
          {snippet.extra.map((line, li) =>
        <div key={li} className="text-xs text-muted-foreground mt-1">
              {line}
            </div>
        )}
        </div>
      )}

      {/* AI network visual (SVG orbits) */}
      <div
        className="absolute top-1/2 right-[-120px] -translate-y-1/2 w-[500px] h-[500px] opacity-10 hidden xl:block pointer-events-none"
        aria-hidden="true">
        
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="200" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="4 8" className="animate-orbit" style={{ transformOrigin: '250px 250px' }} />
          <circle cx="250" cy="250" r="140" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 6" className="animate-orbit" style={{ animationDirection: 'reverse', transformOrigin: '250px 250px' }} />
          <circle cx="250" cy="250" r="80" stroke="#A78BFA" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="8" fill="#7C3AED" />
          <circle cx="250" cy="50" r="5" fill="#3B82F6" />
          <circle cx="450" cy="250" r="5" fill="#A78BFA" />
          <circle cx="250" cy="450" r="5" fill="#3B82F6" />
          <circle cx="50" cy="250" r="5" fill="#A78BFA" />
          <line x1="250" y1="250" x2="250" y2="50" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
          <line x1="250" y1="250" x2="450" y2="250" stroke="#3B82F6" strokeWidth="0.5" opacity="0.5" />
          <line x1="250" y1="250" x2="250" y2="450" stroke="#7C3AED" strokeWidth="0.5" opacity="0.5" />
          <line x1="250" y1="250" x2="50" y2="250" stroke="#3B82F6" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <div className="lg:col-span-8 space-y-8">
            {/* Status badge */}
            <div className="hero-entrance flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-secondary-foreground glass-card border-primary/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities · NIT Warangal ECE · 3rd Year
              </span>
            </div>

            {/* Headline */}
            <div className="hero-entrance">
              <h1
                ref={headlineRef}
                className="text-hero font-extrabold leading-none tracking-tight">
                
                <span className="block text-foreground">Building</span>
                <span className="block gradient-text">Intelligent</span>
                <span className="block text-foreground">Systems</span>
                <span className="block gradient-text-blue">for the Future.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="hero-entrance">
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
                Software Engineering Intern, Agentic AI Developer, and ECE student at NIT Warangal
                specializing in{' '}
                <span className="text-secondary-foreground font-semibold">FastAPI</span>,{' '}
                <span className="text-secondary-foreground font-semibold">asynchronous systems</span>,{' '}
                <span className="text-secondary-foreground font-semibold">real-time AI pipelines</span>,
                and scalable backend engineering.
              </p>
            </div>

            {/* Authority statement */}
            <div className="hero-entrance">
              <div className="inline-flex items-start gap-3 px-4 py-3 rounded-xl glass-card border-accent/20">
                <Icon name="BoltIcon" size={18} className="text-accent mt-0.5 shrink-0" variant="solid" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimized systems by up to{' '}
                  <span className="text-foreground font-semibold">35%</span>, built real-time
                  multi-agent architectures, and engineered scalable AI workflows.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-entrance flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <Icon name="FolderOpenIcon" size={16} />
                View Projects
              </a>
              <a href="#contact" className="btn-ghost flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={16} />
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="hero-entrance flex items-center gap-5">
              {socialLinks.map((s) =>
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 p-1">
                
                  {s.icon}
                </a>
              )}
            </div>
          </div>

          {/* Avatar side */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">
            <div className="hero-entrance relative">
              {/* Glow ring */}
              <div
                className="absolute inset-[-8px] rounded-full animate-pulse-glow"
                style={{
                  background:
                  'conic-gradient(from 0deg, #7C3AED, #3B82F6, #A78BFA, #7C3AED)',
                  opacity: 0.4,
                  filter: 'blur(8px)'
                }}
                aria-hidden="true" />
              
              {/* Avatar */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/40 glow-violet">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1dd653779-1763292913504.png"
                  alt="Ibrahim Azeem — Software Engineering Intern and Agentic AI Developer at NIT Warangal"
                  fill
                  sizes="(max-width: 768px) 160px, 208px"
                  className="object-cover"
                  priority />
                
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 glass-card px-3 py-2 rounded-xl border-primary/30 animate-float-fast"
                style={{ animationDelay: '1s' }}>
                
                <span className="text-xs font-bold gradient-text">AI Engineer</span>
              </div>
            </div>

            {/* Quick stats */}
            <div className="hero-entrance grid grid-cols-2 gap-3 w-full max-w-[220px]">
              {[
              { value: '150+', label: 'LeetCode' },
              { value: '35%', label: 'Optimized' },
              { value: 'ADK', label: 'Google' },
              { value: 'NITW', label: 'ECE' }].
              map((stat) =>
              <div
                key={stat.label}
                className="stat-card p-3 text-center">
                
                  <div className="text-lg font-extrabold gradient-text leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-section-label text-muted-foreground">Scroll</span>
        <div className="w-px h-10 timeline-line" />
      </div>
    </section>);

}