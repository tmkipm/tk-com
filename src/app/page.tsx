'use client'; // Required for motion components

import { motion } from 'framer-motion'; // Import motion
import TechStackGrid from '@/components/TechStackGrid';
import HeroSection from '@/components/HeroSection';
import SkillsGrid from '@/components/SkillsGrid';

// Metadata should be defined in layout or via generateMetadata if needed
// export const metadata: Metadata = { ... };

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1s
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Home() {
  // Extract relevant info from CV for easy use
  const professionalSummary = "Experienced Data Analyst and Developer specializing in SQL, Power BI, Python, and Azure, with a strong track record in data migrations, analytics automation, and strategic decision-making support. Skilled in agile environments, I excel in translating complex technical challenges into clear insights. My expertise includes data analytics, data engineering, databases, education, cloud migrations, and implementing secure data solutions in highly regulated industries.";

  return (
    <div>
      {/* Enhanced Hero Section */}
      <HeroSection professionalSummary={professionalSummary} />

      {/* Enhanced Skills Grid */}
      <SkillsGrid />

      {/* Enhanced Experience & Education Timeline Section */}
      <section className="py-20">
         <motion.h3 
          className="text-3xl font-semibold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Experience, Education & Certifications
        </motion.h3>
        
        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">

          {/* Item 1: Teaching */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.364 2.278a.75.75 0 0 0-1.09-.608l-7 4A.75.75 0 0 0 2 6.284v4.828a.75.75 0 0 0 .636.743l7 1.5a.75.75 0 0 0 .728 0l7-1.5a.75.75 0 0 0 .636-.743V6.284a.75.75 0 0 0-.278-.563l-7-4a.75.75 0 0 0-.394-.143ZM16.5 6.77v4.117l-6 1.286V8.14L16.5 6.77ZM3.5 6.77l6 1.371v4.03l-6-1.286V6.77Z"></path><path d="M2 12.5a.75.75 0 0 0 0 1.5h.043a.75.75 0 0 0 0-1.5H2Zm16 0a.75.75 0 0 0 0 1.5h.043a.75.75 0 0 0 0-1.5H18Zm-8.75 2.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Data & IT Apprenticeship Instructor</h4>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Freelance <span className="text-gray-500 dark:text-gray-400 font-normal">| Apr 2024 – Feb 2025</span></p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Delivered training and mentoring for Level 4 apprentices covering SQL, Python, data visualization, cloud fundamentals, and professional practices.</p>
          </motion.div>

          {/* Item 2: Developer for Data Services */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v1.5h4.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H1.25a.75.75 0 0 1-.75-.75v-11a.75.75 0 0 1 .75-.75H6v-1.5ZM8.75 2.5a1.25 1.25 0 0 0-1.25 1.25v1.5h5v-1.5a1.25 1.25 0 0 0-1.25-1.25h-2.5Z"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Developer for Data Services</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Stratagem IPM <span className="text-gray-500 dark:text-gray-400 font-normal">| Mar 2023 – Dec 2024</span></p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Led Power BI dashboard creation, supported Azure migration, automated reports, and ensured compliance in the legal sector.</p>
          </motion.div>

          {/* Item 3: Power BI Cert */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.877 3.195A2.5 2.5 0 0 0 5.5 5.173V6.5H3.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75H14.5V5.173a2.5 2.5 0 0 0-2.377-1.978l-4.746-.002ZM10 4.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 .75.75v1.173A2.499 2.499 0 0 0 14.5 8.38V16H9V8.312C8.096 7.69 7.5 6.63 7.5 5.474V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.474a2.5 2.5 0 0 0-1.877 2.192V16h-1V6.663A2.499 2.499 0 0 0 3.25 8.113V16h10V8.113a2.5 2.5 0 0 0-1.877-1.95V5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 0 0-.5.5v-.474A2.5 2.5 0 0 0 7.123 2.55 L10 2.546a.75.75 0 0 1 .75.75v.94a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V3.296a.75.75 0 0 1 .75-.75L17 2.546Z" clipRule="evenodd"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Power BI Data Analyst Specialization</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">Microsoft <span className="text-gray-500 dark:text-gray-400 font-normal">| 2024</span></p>
          </motion.div>

          {/* Item 4: AWS Cert */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.877 3.195A2.5 2.5 0 0 0 5.5 5.173V6.5H3.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75H14.5V5.173a2.5 2.5 0 0 0-2.377-1.978l-4.746-.002ZM10 4.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 .75.75v1.173A2.499 2.499 0 0 0 14.5 8.38V16H9V8.312C8.096 7.69 7.5 6.63 7.5 5.474V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.474a2.5 2.5 0 0 0-1.877 2.192V16h-1V6.663A2.499 2.499 0 0 0 3.25 8.113V16h10V8.113a2.5 2.5 0 0 0-1.877-1.95V5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 0 0-.5.5v-.474A2.5 2.5 0 0 0 7.123 2.55 L10 2.546a.75.75 0 0 1 .75.75v.94a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V3.296a.75.75 0 0 1 .75-.75L17 2.546Z" clipRule="evenodd"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">AWS Fundamentals Specialization</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">Amazon Web Services <span className="text-gray-500 dark:text-gray-400 font-normal">| 2024</span></p>
          </motion.div>

          {/* Item 5: Junior Developer for Data Services */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
             <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v1.5h4.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H1.25a.75.75 0 0 1-.75-.75v-11a.75.75 0 0 1 .75-.75H6v-1.5ZM8.75 2.5a1.25 1.25 0 0 0-1.25 1.25v1.5h5v-1.5a1.25 1.25 0 0 0-1.25-1.25h-2.5Z"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Junior Developer for Data Services</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Stratagem IPM <span className="text-gray-500 dark:text-gray-400 font-normal">| Aug 2021 – Mar 2023</span></p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Developed PHP tools, transitioned SSRS reporting to Power BI, and automated financial reporting processes.</p>
          </motion.div>

          {/* Item 6: CITMA Cert */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.877 3.195A2.5 2.5 0 0 0 5.5 5.173V6.5H3.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75H14.5V5.173a2.5 2.5 0 0 0-2.377-1.978l-4.746-.002ZM10 4.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 .75.75v1.173A2.499 2.499 0 0 0 14.5 8.38V16H9V8.312C8.096 7.69 7.5 6.63 7.5 5.474V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.474a2.5 2.5 0 0 0-1.877 2.192V16h-1V6.663A2.499 2.499 0 0 0 3.25 8.113V16h10V8.113a2.5 2.5 0 0 0-1.877-1.95V5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 0 0-.5.5v-.474A2.5 2.5 0 0 0 7.123 2.55 L10 2.546a.75.75 0 0 1 .75.75v.94a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V3.296a.75.75 0 0 1 .75-.75L17 2.546Z" clipRule="evenodd"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">Trade Mark Support Professional</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">CITMA <span className="text-gray-500 dark:text-gray-400 font-normal">| 2022</span></p>
          </motion.div>

          {/* Item 7: BSc Computer Science */}
          <motion.div 
            className="relative pl-10" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="absolute -left-1 top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.877 3.195A2.5 2.5 0 0 0 5.5 5.173V6.5H3.25a.75.75 0 0 0-.75.75v10a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-10a.75.75 0 0 0-.75-.75H14.5V5.173a2.5 2.5 0 0 0-2.377-1.978l-4.746-.002ZM10 4.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V2.75a.75.75 0 0 1 1.5 0V4a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 .75.75v1.173A2.499 2.499 0 0 0 14.5 8.38V16H9V8.312C8.096 7.69 7.5 6.63 7.5 5.474V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.474a2.5 2.5 0 0 0-1.877 2.192V16h-1V6.663A2.499 2.499 0 0 0 3.25 8.113V16h10V8.113a2.5 2.5 0 0 0-1.877-1.95V5a.5.5 0 0 0-.5-.5H9.5a.5.5 0 0 0-.5.5v-.474A2.5 2.5 0 0 0 7.123 2.55 L10 2.546a.75.75 0 0 1 .75.75v.94a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5V3.296a.75.75 0 0 1 .75-.75L17 2.546Z" clipRule="evenodd"></path></svg>
            </div>
            <h4 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">BSc Computer Science</h4>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">University of East Anglia (UEA) <span className="text-gray-500 dark:text-gray-400 font-normal">| Graduated 2021</span></p>
          </motion.div>

        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/30">
        <motion.h3 
          className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h3>
        <div className="max-w-6xl mx-auto px-4">
          <TechStackGrid />
        </div>
      </section>

    </div>
  );
}
