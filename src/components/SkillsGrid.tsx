'use client';

import { motion } from 'framer-motion';
import { 
  FaDatabase, 
  FaChartBar, 
  FaCloud, 
  FaPython, 
  FaCode, 
  FaAws,
  FaMicrosoft
} from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

// Define skill categories
const skillCategories = [
  {
    name: 'Data Analytics',
    icon: FaChartBar,
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-500 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-900/30',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-900/20',
    description: 'Turning data into actionable insights',
  },
  {
    name: 'Cloud Services',
    icon: FaCloud,
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-500 dark:text-purple-400',
    borderColor: 'border-purple-200 dark:border-purple-900/30',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-900/20',
    description: 'Building and managing cloud solutions',
  },
  {
    name: 'Data Engineering',
    icon: FaDatabase,
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-500 dark:text-green-400',
    borderColor: 'border-green-200 dark:border-green-900/30',
    bgLight: 'bg-green-50',
    bgDark: 'dark:bg-green-900/20',
    description: 'Creating efficient data pipelines and structures',
  },
  {
    name: 'Development',
    icon: FaCode,
    color: 'from-amber-500 to-amber-600',
    textColor: 'text-amber-500 dark:text-amber-400',
    borderColor: 'border-amber-200 dark:border-amber-900/30',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-900/20',
    description: 'Building applications and tools',
  }
];

// Define core skills with icons
const coreSkills = [
  { name: 'SQL', icon: FaDatabase, category: 'Data Engineering' },
  { name: 'Power BI', icon: FaMicrosoft, category: 'Data Analytics' },
  { name: 'Azure', icon: FaMicrosoft, category: 'Cloud Services' },
  { name: 'Python', icon: FaPython, category: 'Development' },
  { name: '.NET', icon: SiDotnet, category: 'Development' },
  { name: 'AWS', icon: FaAws, category: 'Cloud Services' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

const skillVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  }
};

const SkillsGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Skill Categories */}
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              className={`rounded-xl border ${category.borderColor} ${category.bgLight} ${category.bgDark} p-6 flex flex-col items-center text-center`}
              variants={categoryVariants}
            >
              <div className={`p-3 rounded-full bg-gradient-to-br ${category.color} text-white mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h4 className={`text-xl font-bold mb-2 ${category.textColor}`}>{category.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{category.description}</p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {coreSkills
                  .filter(skill => skill.category === category.name)
                  .map(skill => (
                    <span 
                      key={skill.name} 
                      className="px-3 py-1 text-xs rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700"
                    >
                      {skill.name}
                    </span>
                  ))
                }
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Skills Detail */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-white">Core Technical Skills</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                variants={skillVariants}
                whileHover="hover"
              >
                <skill.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="font-bold text-gray-800 dark:text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid; 