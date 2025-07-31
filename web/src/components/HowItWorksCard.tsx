"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface HowItWorksCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 text-left overflow-hidden"
    >
      {/* Central Light Source */}
      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-violet-500/30 via-pink-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

      <div className="relative">
        <div className="mb-4 p-2 rounded-lg bg-white/10 w-fit group-hover:bg-white/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-200 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HowItWorksCard;
