'use client';
import React from 'react';
import { TECH_STACK } from '@/lib/constants';
import { motion } from 'framer-motion';

const SkillCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {TECH_STACK.map((skill, index) => (
        <motion.div
          key={index}
          className="group bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/30"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`text-4xl mb-3 ${skill.color}`}>
            {skill.icon}
          </div>
          <h3 className="text-cyan-400 font-medium text-sm group-hover:text-white transition">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillCards;
