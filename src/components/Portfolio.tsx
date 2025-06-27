'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useThreeJS } from '@/hooks/useThreeJS';
import { useCursor } from '@/hooks/useCursor';

import HeroSection from '@/components/sections/Herosection';
import AboutSection from '@/components/sections/Aboutsection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navbar from '@/components/Navbar';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const { canvasRef, sphereRef, initThreeJS } = useThreeJS();
  const { cursorRef, cursorFollowerRef } = useCursor(sphereRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      initThreeJS();
    }, 2500);

    return () => clearTimeout(timer);
  }, [initThreeJS]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        // Other scroll-based logic here
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

   if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-purple-500/30 rounded-full"></div>
            <div className="absolute inset-2 border-2 border-purple-500 border-b-transparent rounded-full animate-spin animate-reverse"></div>
          </div>
          <p className="text-white text-lg font-mono">Initializing Systems...</p>
          <div className="mt-4 text-green-400 font-mono text-sm">
            <div className="typing-animation">
              Loading neural networks... ████████████ 100%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* Navbar */}
      <Navbar />

      {/* 3D Background Canvas */}
      {isHeroVisible && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0 pointer-events-none"
          style={{ opacity: 0.6 }}
        />
      )}

      {/* Matrix-style overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="matrix-bg"></div>
      </div>

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-100 ease-out shadow-lg shadow-cyan-400/50"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="absolute inset-1 bg-cyan-400/20 rounded-full animate-pulse"></div>
      </div>
      <div
        ref={cursorFollowerRef}
        className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-40 transition-all duration-200 ease-out blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Page Sections */}
      <section id="home" ref={heroRef}>
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Portfolio;
