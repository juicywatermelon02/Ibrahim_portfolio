import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import SkillsSection from '@/app/components/SkillsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import CodingSection from '@/app/components/CodingSection';
import ContactSection from '@/app/components/ContactSection';
import CursorGlow from '@/app/components/CursorGlow';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Cursor glow (client) */}
      <CursorGlow />

      {/* Navigation */}
      <Header />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CodingSection />
      <ContactSection />

      <Footer />
    </main>
  );
}