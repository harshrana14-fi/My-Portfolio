"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, HardDrive } from 'lucide-react';


const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const glitchTimer = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);

    const style = document.createElement('style');
    style.textContent = `@keyframes float{0%,100%{transform:translateY(0px) rotateX(0deg)}50%{transform:translateY(-20px) rotateX(10deg)}}.animate-float{animation:float 4s ease-in-out infinite}`;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      clearInterval(glitchTimer);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
     
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          transform: `translate(${mouse.x * 0.03}px, ${mouse.y * 0.03}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Circuit Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg rotate-12 animate-float opacity-30" />
      <div className="absolute top-32 right-24 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full -rotate-12 animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-32 w-20 h-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full rotate-45 animate-float opacity-25" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-16 w-8 h-20 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg -rotate-45 animate-float opacity-35" style={{ animationDelay: '0.5s' }} />

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-cyan-400 rotate-45 animate-spin opacity-20" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-blue-400 animate-pulse opacity-30" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className={`text-6xl md:text-8xl font-mono font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent ${glitch ? 'animate-pulse' : ''}`}>
          HARSH_RANA/
        </h1>

        {/* Terminal */}
        <div className="text-xl text-cyan-300 mb-6 font-mono bg-slate-900/40 backdrop-blur-sm border border-cyan-400/30 rounded p-4 max-w-2xl mx-auto">
  <span className="text-cyan-400">$</span> <span className="text-green-400">whoami</span><br />
  <span className="text-blue-300">► Full_Stack_Developer</span><br />
  <span className="text-blue-300">► Btech_Student</span><br />
  <span className="text-blue-300">► Tech_Enthusiast</span>
  <span className="animate-pulse text-cyan-400 ml-1">|</span>
</div>




        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/public/Harshresume.png"
            download
            className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded border border-slate-600 font-mono font-semibold text-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400"
          >
            <span className="flex items-center gap-2">
              <HardDrive size={20} />
              download_resume.exe
            </span>
          </a>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded border border-cyan-400 font-mono font-semibold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <Terminal size={20} />
              hire_me.sh
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/harshrana14-fi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-slate-600 bg-slate-900/40 backdrop-blur-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-rana-13-fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-slate-600 bg-slate-900/40 backdrop-blur-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="ranajiharsxx14@gmail.com"
            className="p-3 rounded border border-slate-600 bg-slate-900/40 backdrop-blur-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
    </section>
  );
};

export default HeroSection;
