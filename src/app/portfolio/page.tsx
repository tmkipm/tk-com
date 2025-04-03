'use client'; // Required for motion components

import { useState } from 'react'; // Import useState
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion'; // Import motion

// Metadata cannot be handled here anymore
// export const metadata: Metadata = { ... };

// Placeholder project data with added categories for filtering
const projects = [
  {
    title: "Project Alpha",
    description: "A brief description of Project Alpha focusing on data analysis techniques.",
    tags: ["Data Analysis", "Power BI", "SQL"],
    projectUrl: "#", // Link to detailed page or modal
    category: "Data Analysis"
  },
  {
    title: "Project Beta",
    description: "Details about Project Beta, highlighting data engineering aspects.",
    tags: ["Data Engineering", "Azure", "Python"],
    projectUrl: "#",
    category: "Data Engineering"
  },
  {
    title: "Web App Gamma",
    description: "Showcasing the development of a web application using modern frameworks.",
    tags: ["Web Dev", "Next.js", "React", "Tailwind"],
    projectUrl: "#",
    category: "Web Dev"
  },
  {
    title: "Another Data Analysis Project",
    description: "Further exploration in data analysis.",
    tags: ["Data Analysis", "Excel", "Python"],
    projectUrl: "#",
    category: "Data Analysis"
  },
  // Add more projects...
];

// Categories including "All"
const filterCategories = ["All", "Data Analysis", "Data Engineering", "Web Dev", "Apps"];

// Define animation variants (can be shared or defined per component)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All'); // State for active filter

  // Filter projects based on the active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">Portfolio</h1>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filterCategories.map((category) => {
          const isActive = category === activeFilter;
          return (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 
                         ${isActive 
                           ? 'bg-blue-600 text-white' 
                           : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'}
                        `}
              onClick={() => setActiveFilter(category)} // Update filter state on click
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} // Add tap animation
            >
              {category}
            </motion.button>
          );
        })}
      </div>

      {/* Project Grid - Use filteredProjects and AnimatePresence for exit/enter animations */}
      <motion.div 
        layout // Animate layout changes when filters change
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        // Use variants for initial load animation
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* AnimatePresence handles enter/exit animations for filtered items */}
        {/* Note: AnimatePresence might require direct children to be motion components with unique keys */} 
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.title} // Key is crucial for AnimatePresence
            variants={itemVariants} // Re-use item variants for enter animation
            layout // Animate position changes
            initial="hidden" // Animate in when filtering
            animate="show"
            exit={{ opacity: 0, scale: 0.8 }} // Example exit animation
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={project.projectUrl}
              // Add category prop to ProjectCard if needed for display, or use tags
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 