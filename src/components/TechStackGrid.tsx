'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiDotnet,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiVercel,
} from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { FaMicrosoft, FaAws, FaDatabase, FaReact } from 'react-icons/fa';

// Map of technology name to icon component
const techIcons: Record<string, { icon: IconType; color: string }> = {
  // Frontend
  'React': { icon: FaReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'HTML': { icon: SiHtml5, color: '#E34F26' },
  'CSS': { icon: SiCss3, color: '#1572B6' },
  
  // Backend & Data
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'SQL': { icon: FaDatabase, color: '#CC2927' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'Python': { icon: DiPython, color: '#3776AB' },
  'PHP': { icon: SiPhp, color: '#777BB4' },
  '.NET': { icon: SiDotnet, color: '#512BD4' },
  
  // Cloud & Tools
  'Azure': { icon: FaMicrosoft, color: '#0078D4' },
  'AWS': { icon: FaAws, color: '#FF9900' },
  'Power BI': { icon: FaMicrosoft, color: '#F2C811' },
  'Git': { icon: SiGit, color: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#181717' },
  'Vercel': { icon: SiVercel, color: '#000000' },
};

// Define categories and their technologies
const categories = [
  {
    name: 'Frontend Development',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Backend & Data',
    technologies: ['Node.js', 'SQL', 'PostgreSQL', 'MySQL', 'Python', 'PHP', '.NET'],
  },
  {
    name: 'Cloud & Tools',
    technologies: ['Azure', 'AWS', 'Power BI', 'Git', 'GitHub', 'Vercel'],
  }
];

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.05,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

interface TechIconProps {
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name }) => {
  const iconData = techIcons[name];
  if (!iconData) return null;
  
  const { icon: Icon, color } = iconData;
  
  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-2"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div className="relative flex items-center justify-center w-14 h-14 p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm border border-gray-200 dark:border-gray-700">
        <Icon 
          className="h-full w-full"
          style={{ color }} 
        />
      </div>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {name}
      </p>
    </motion.div>
  );
};

const TechStackGrid: React.FC = () => {
  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {categories.map((category) => (
        <motion.div 
          key={category.name}
          className="space-y-4"
          variants={categoryVariants}
        >
          <motion.h4 
            className="text-xl font-semibold mb-4 text-center md:text-left text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700"
            variants={itemVariants}
          >
            {category.name}
          </motion.h4>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center"
            variants={categoryVariants}
          >
            {category.technologies.map((tech) => (
              <TechIcon key={tech} name={tech} />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStackGrid; 