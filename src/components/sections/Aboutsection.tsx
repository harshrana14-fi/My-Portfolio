"use client";
import React, { useState, useEffect, useRef } from "react";
import { User, Award, BookOpen, Target, TrendingUp } from "lucide-react";
import { TECH_STACK, CERTIFICATIONS } from "@/lib/constants";
import SkillsSection from "@/components/sections/SkillCards"; // adjust the path if needed


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const sectionRef = useRef<HTMLElement>(null);

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

  const tabs = [
    { id: "overview", label: "Overview", icon: <User className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <TrendingUp className="w-5 h-5" /> },
    {
      id: "certifications",
      label: "Certifications",
      icon: <Award className="w-5 h-5" />,
    },
    {
      id: "philosophy",
      label: "Philosophy",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a first-year B.Tech Information Technology student at Maharaja
              Agrasen Institute of Technology, I’ve actively built a strong
              foundation in programming, data structures, and web development.
              Through self-initiated learning and hands-on practice, I’ve
              explored technologies like HTML, CSS, JavaScript, Git, and basic
              backend concepts. I’m a fast learner with a strong interest in
              full-stack development and cloud computing, continuously working
              to turn academic concepts into real-world skills.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                  Experience
                </h4>
                <p className="text-gray-300">
                  I’ve recently completed my first year as a B.Tech student in
                  Information Technology at Maharaja Agrasen Institute of
                  Technology. While I don&apos;t have formal industry experience
                  yet, I’ve learned a great deal through coursework,
                  self-practice, and consistent hands-on exploration.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">
                  Specialization
                </h4>
                <p className="text-gray-300">
                  Specialized in frontend development using HTML, CSS,
                  JavaScript, and React. Proficient in programming languages
                  including C, C++, and Python. Also, Familiar with data
                  structures and problem-solving.
                </p>
              </div>
            </div>
          </div>
        );

      case "skills":
  return <SkillsSection />;

      case "certifications":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case "philosophy":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-6 border border-indigo-500/20">
              <h4 className="text-xl font-semibold text-indigo-400 mb-4">
                Code Philosophy
              </h4>
              <p className="text-gray-300 leading-relaxed">
                &quot;Clean code is not written by following a set of rules.
                Clean code is written by programmers who care about their craft
                and their fellow developers. It&apos;s about writing code that
                tells a story, code that is easy to understand, maintain, and
                extend.&quot;
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Core Values
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Continuous learning and adaptation
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    User-centric design thinking
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Performance and scalability first
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">▸</span>
                    Collaborative problem-solving
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Mission
                </h4>
                <p className="text-gray-300">
                  To leverage cutting-edge technologies and innovative thinking
                  to create digital solutions that make a meaningful impact on
                  businesses and users worldwide.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate Explored creating digital experiences with modern
            technologies and innovative solutions
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-800/30 backdrop-blur-sm rounded-full p-2 border border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {renderTabContent()}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              number: "15+",
              label: "Projects Completed",
              color: "from-cyan-400 to-blue-500",
            },
            {
              number: "1",
              label: "Years Experience",
              color: "from-purple-400 to-pink-500",
            },
            {
              number: "20+",
              label: "Technologies",
              color: "from-green-400 to-emerald-500",
            },
            {
              number: "100%",
              label: "Client Satisfaction",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
