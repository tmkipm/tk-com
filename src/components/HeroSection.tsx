'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaDatabase } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const buttonVariants = {
  hover: { 
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.95 }
};

interface HeroSectionProps {
  professionalSummary: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ professionalSummary }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full bg-blue-50/40 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[30%] w-[70%] h-[70%] rounded-full bg-purple-50/30 dark:bg-purple-900/10 blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name and title with enhanced typography */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            <span className="inline-block">Tyler <span className="text-blue-600 dark:text-blue-400">Knibbs</span></span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 flex justify-center items-center gap-2 font-light"
            variants={itemVariants}
          >
            <span className="inline-flex items-center">
              <FaCode className="mr-2 text-blue-500" /> Developer
            </span>
            <span className="inline-block mx-3 text-gray-400">&amp;</span>
            <span className="inline-flex items-center">
              <FaDatabase className="mr-2 text-blue-500" /> Data Analyst
            </span>
          </motion.h2>
          
          {/* Expertise badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            variants={itemVariants}
          >
            {['SQL', 'Power BI', 'Azure', 'Python', '.NET'].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
          
          {/* Professional summary */}
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg"
            variants={itemVariants}
          >
            {professionalSummary}
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
              <Link 
                href="/portfolio" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition duration-300"
              >
                <FaChartLine className="mr-2" />
                View Portfolio
              </Link>
            </motion.div>
            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm transition duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 