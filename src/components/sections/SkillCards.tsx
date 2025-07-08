"use client";
import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

const SkillCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: -30,
      rotateY: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const iconVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      filter: "brightness(1) saturate(1)",
    },
    hover: {
      scale: 1.3,
      rotate: [0, -8, 8, -8, 0],
      filter:
        "brightness(1.3) saturate(1.4) drop-shadow(0 0 20px currentColor)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        rotate: {
          duration: 0.6,
          ease: "easeInOut" as const,
        },
      },
    },
  };

  const generateRandomParticles = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 relative z-10"
      >
        {TECH_STACK.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            className="relative group"
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Tilt
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#00ffff"
              glarePosition="all"
              glareBorderRadius="20px"
              scale={1.05}
              transitionSpeed={400}
              className="w-full h-full"
            >
              <motion.div
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl
                          border-2 border-slate-700/50 hover:border-cyan-400/60 rounded-3xl p-8 h-32
                          shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,255,255,0.2)]
                          transition-all duration-700 flex flex-col items-center justify-center
                          overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: 5,
                  z: 100,
                }}
                transition={{
                  type: "spring" as const,
                  stiffness: 400,
                  damping: 25,
                }}
              >
                {/* Particle Effects */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div className="absolute inset-0 pointer-events-none">
                      {generateRandomParticles().map((particle) => (
                        <motion.div
                          key={particle.id}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                          initial={{
                            opacity: 0,
                            scale: 0,
                            x: `${particle.x}%`,
                            y: `${particle.y}%`,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, particle.size, 0],
                            x: [
                              `${particle.x}%`,
                              `${particle.x + (Math.random() - 0.5) * 100}%`,
                            ],
                            y: [
                              `${particle.y}%`,
                              `${particle.y + (Math.random() - 0.5) * 100}%`,
                            ],
                          }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{
                            duration: 2,
                            delay: particle.delay,
                            ease: "easeOut" as const,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Skill Icon with Enhanced Effects */}
                <motion.div
                  className="text-5xl mb-3 relative z-20 select-none"
                  variants={iconVariants}
                  initial="idle"
                  animate={hoveredCard === index ? "hover" : "idle"}
                >
                  <div className="relative">
                  

                    {/* Main Icon */}
                    <div className="relative z-10 drop-shadow-2xl">
                      {skill.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Skill Name with Typewriter Effect */}
                <motion.h3
                  className="text-slate-300 text-sm font-bold tracking-wider text-center relative z-20
                            group-hover:text-cyan-400 transition-colors duration-300"
                  animate={
                    hoveredCard === index
                      ? {
                          scale: 1.1,
                          y: -4,
                          color: "#00ffff",
                        }
                      : {
                          scale: 1,
                          y: 0,
                          color: "#cbd5e1",
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.h3>

                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={
                    hoveredCard === index
                      ? {
                          background: [
                            "linear-gradient(0deg, #00ffff00, #00ffff00)",
                            "linear-gradient(90deg, #00ffff44, #ff00ff44)",
                            "linear-gradient(180deg, #ff00ff44, #00ffff44)",
                            "linear-gradient(270deg, #00ffff44, #ff00ff44)",
                            "linear-gradient(360deg, #00ffff00, #00ffff00)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, transparent)",
                    borderRadius: "24px",
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "exclude",
                  }}
                />

                {/* Pulse Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-cyan-400/50 opacity-0"
                  animate={
                    hoveredCard === index
                      ? {
                          scale: [1, 1.1, 1.2],
                          opacity: [0, 0.5, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCards;
