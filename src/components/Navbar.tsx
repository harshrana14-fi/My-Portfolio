"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Terminal,
  Code,
  User,
  Mail,
  Github,
  ExternalLink,
} from "lucide-react";

// Type for nav items
type NavItem = {
  name: string;
  id: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: "Home", id: "home", icon: Terminal },
  { name: "About", id: "about", icon: User },
  { name: "Projects", id: "projects", icon: Code },
  { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 100 && top + height >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Animated border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded border border-cyan-400 flex items-center justify-center font-mono font-bold text-white group-hover:animate-pulse transition-all duration-300">
                HR
              </div>
              <div className="hidden sm:block">
                <div className="text-cyan-400 font-mono text-lg font-bold group-hover:text-cyan-300 transition-colors duration-300">
                  HARSH_Jatoliya
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  <span className="text-green-400">&gt;</span> developer.exe
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map(({ name, id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    const section = document.getElementById(id);
                    section?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(id);
                  }}
                  className={`group relative px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeSection === id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span>{name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() =>
                window.open("https://github.com/harshrana14-fi", "_blank")
              }
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 rounded hover:bg-slate-800/50"
            >
              <Github size={20} />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/harsh-rana-13-fi/",
                  "_blank"
                )
              }
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-mono text-sm font-medium rounded border border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center justify-center space-x-2">
                <Terminal size={16} />
                <span>Connect</span>
                <ExternalLink size={14} />
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-slate-950/95 backdrop-blur-lg border-b border-cyan-400/20`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map(({ name, id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                const section = document.getElementById(id);
                section?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-300 ${
                activeSection === id
                  ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                  : "text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon size={18} />
                <span>{name}</span>
              </div>
            </button>
          ))}

          {/* Connect button */}
          <div className="pt-4 border-t border-slate-700 space-y-3">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/harsh-rana-13-fi/",
                  "_blank"
                )
              }
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-mono text-sm font-medium rounded border border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center justify-center space-x-2">
                <Terminal size={16} />
                <span>Connect</span>
                <ExternalLink size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
