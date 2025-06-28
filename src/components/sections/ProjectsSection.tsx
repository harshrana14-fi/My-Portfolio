'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Filter,
  Zap,
  Database,
  Brain,
  Globe,
} from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', 'Backend', 'AI/ML', 'Blockchain', 'IoT'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Database className="w-5 h-5" />;
      case 'AI/ML':
        return <Brain className="w-5 h-5" />;
      case 'Blockchain':
        return <Zap className="w-5 h-5" />;
      case 'IoT':
        return <Globe className="w-5 h-5" />;
      default:
        return <Filter className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'from-green-400 to-emerald-500';
      case 'AI/ML':
        return 'from-purple-400 to-pink-500';
      case 'Blockchain':
        return 'from-yellow-400 to-orange-500';
      case 'IoT':
        return 'from-blue-400 to-cyan-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies and modern development practices
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-transparent text-white shadow-lg shadow-cyan-500/25'
                  : 'border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-white bg-gray-800/50 backdrop-blur-sm'
              }`}
            >
              {getCategoryIcon(category)}
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image on Hover */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              {/* Foreground Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <div
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(
                          project.category
                        )} text-white text-sm font-medium mt-2`}
                      >
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more projects?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Explore my complete portfolio on GitHub, featuring open-source contributions, 
              personal experiments, and collaborative projects with the developer community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/harshrana14-fi"
                target="_blank"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="flex items-center space-x-2 z-10 relative">
                  <Github className="w-5 h-5" />
                  <span>View GitHub</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '25+', label: 'Repositories', icon: <Github className="w-6 h-6" /> },
            { number: '1k+', label: 'GitHub Stars', icon: <Zap className="w-6 h-6" /> },
            { number: '15+', label: 'Contributors', icon: <Globe className="w-6 h-6" /> },
            { number: '99%', label: 'Uptime', icon: <Database className="w-6 h-6" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3 text-cyan-400">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
