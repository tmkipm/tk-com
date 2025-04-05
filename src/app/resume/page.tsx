'use client';

import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import CollapsibleSection from '@/components/CollapsibleSection';

const resumeData = {
  fullName: "Tyler Knibbs",
  title: "Developer & Data Analyst",
  location: "London, GB",
  email: "listed-14.tags@icloud.com",
  linkedIn: "https://www.linkedin.com/in/tyler-knibbs/",
  github: "https://github.com/tmkipm",
  
  summary: "Experienced Data Analyst and Developer specializing in SQL, Power BI, Python, and Azure, with a strong track record in data migrations, analytics automation, and strategic decision-making support. Skilled in agile environments, I excel in translating complex technical challenges into clear insights.",
  
  skills: [
    { category: "Data Analysis & BI Tools", items: ["Power BI (Advanced)", "SSRS", "Excel", "Power Apps"] },
    { category: "Programming Languages", items: ["SQL (Mastery: MS SQL, SQL Server)", "Python (Data Analysis)", "PHP", "R (Basic)", "Swift (Learning)"] },
    { category: "Cloud Technologies", items: ["Azure (Full migration experience)", "AWS Fundamentals"] },
    { category: "Frameworks & Platforms", items: [".NET Framework", "ServiceNow", "Power Apps"] },
    { category: "Security & Compliance", items: ["Data Security", "Privacy Standards (Legal sector experience)"] },
    { category: "Web Development", items: ["UI/UX Principles", "Frontend & Backend Development"] },
  ],
  
  experience: [
    {
      title: "Developer for Data Services",
      company: "Stratagem IPM",
      period: "Mar 2023 – Dec 2024",
      responsibilities: [
        "Led creation of advanced Power BI dashboards to deliver business-critical insights for executive decision-making within intellectual property law.",
        "Supported infrastructure transition from on-premises SQL Server to Azure Cloud, including data migration, cloud architecture, and process modernization.",
        "Improved operational efficiency through automation of financial and performance reports, significantly reducing manual overhead.",
        "Ensured rigorous compliance with security, data protection, and privacy standards required in the legal sector.",
        "Led redevelopment of the company website (UI/UX, backend architecture [.NET], cybersecurity)."
      ]
    },
    {
      title: "Data & IT Apprenticeship Instructor",
      company: "Contract Work",
      period: "Apr 2024 – Feb 2025",
      responsibilities: [
        "Designed and delivered comprehensive training programs for Level 4 IT and Data Analytics apprentices from organizations including the NHS, following BCS (British Computer Society) standards and frameworks.",
        "Created bespoke curriculum materials focusing on real-world applications of SQL, Python, Power BI and data visualization techniques that directly addressed workplace challenges faced by apprentices.",
        "Mentored NHS and healthcare sector apprentices in implementing data-driven solutions, helping them transform departmental reporting processes and improve operational efficiency in clinical environments.",
        "Facilitated hands-on workshops that empowered apprentices to apply technical skills to their specific workplace projects, resulting in measurable improvements in their organizations' data processes.",
        "Developed and administered assessments aligned with BCS requirements, providing detailed feedback and personalized development plans for each apprentice.",
        "Maintained 95% apprentice satisfaction ratings through adaptive teaching approaches that accommodated diverse learning styles and technical backgrounds."
      ]
    },
    {
      title: "Junior Developer for Data Services",
      company: "Stratagem IPM",
      period: "Aug 2021 – Mar 2023",
      responsibilities: [
        "Developed a PHP-based data integrity checking tool, automating manual processes and saving 100+ hours annually.",
        "Transitioned firm-wide reporting from SSRS to Power BI, enhancing visualization and operational decision-making capabilities.",
        "Automated monthly financial reporting, cutting manual effort by 16 hours/month/employee.",
        "Delivered client-specific reporting solutions and technical support, significantly improving client satisfaction and operational efficiency."
      ]
    }
  ],
  
  education: [
    { degree: "BSc Computer Science", institution: "UEA", year: "2021" },
    { degree: "Level 3 Extended Diploma in IT", institution: "Havering Sixth Form", year: "2017" },
    { degree: "11 GCSEs (A–C)", institution: "Gaynes", year: "2012" }
  ],
  
  certifications: [
    { name: "Power BI Data Analyst Specialization", issuer: "Microsoft", year: "2024" },
    { name: "AWS Fundamentals Specialization", issuer: "Amazon Web Services", year: "2024" },
    { name: "Trade Mark Support Professional", issuer: "CITMA", year: "2022" }
  ],
  
  courses: [
    { name: "Migrating to the AWS Cloud", issuer: "Amazon Web Services", grade: "95.78%" },
    { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services", grade: "100%" },
    { name: "Architecting Solutions on AWS", issuer: "Amazon Web Services", grade: "97.14%" },
    { name: "Databases and SQL for Data Science with Python", issuer: "IBM", grade: "92.62%" },
    { name: "Introduction to Relational Databases (RDBMS)", issuer: "IBM", grade: "84.90%" },
    { name: "Deploy and Maintain Power BI Assets and Capstone project", issuer: "Microsoft", grade: "93%" },
    { name: "Introduction to Data Engineering", issuer: "IBM", grade: "93.20%" },
    { name: "Python for Data Science, AI & Development", issuer: "IBM", grade: "84.66%" },
    { name: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", grade: "97%" },
    { name: "Microsoft PL-300 Exam Preparation and Practice", issuer: "Microsoft", grade: "86%" },
    { name: "Preparing Data for Analysis with Microsoft Excel", issuer: "Microsoft", grade: "87.33%" },
    { name: "Extract, Transform and Load Data in Power BI", issuer: "Microsoft", grade: "83.66%" },
    { name: "Harnessing the Power of Data with Power BI", issuer: "Microsoft", grade: "82.50%" },
    { name: "Data Modeling in Power BI", issuer: "Microsoft", grade: "92.66%" },
    { name: "Creative Designing in Power BI", issuer: "Microsoft", grade: "84%" },
    { name: "Data Science Math Skills", issuer: "Duke University", grade: "98.07%" },
    { name: "Foundations: Data, Data, Everywhere", issuer: "Google", grade: "94.12%" },
    { name: "Data Analysis and Visualization with Power BI", issuer: "Microsoft", grade: "88.33%" }
  ]
  // Add personal projects if desired
};

// Group courses by provider for easier filtering
const courseProviders = [
  { name: "Amazon Web Services", displayName: "Amazon Web Services" },
  { name: "Microsoft", displayName: "Microsoft" },
  { name: "IBM", displayName: "IBM" },
  { name: "Other", displayName: "Other Providers", filter: (issuer: string) => 
    !["Amazon Web Services", "Microsoft", "IBM"].includes(issuer) 
  }
];

export default function ResumePage() {
  return (
    <PageTransitionWrapper>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{resumeData.fullName}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{resumeData.title}</p>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span>{resumeData.location}</span>
            <Link href={`mailto:${resumeData.email}`} className="hover:text-blue-500">{resumeData.email}</Link>
            <Link href={resumeData.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</Link>
          </div>
          <div className="mt-6">
            <a 
              href="/assets/Tyler_Knibbs_CV.pdf" 
              download 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{skillGroup.category}</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Professional Experience</h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{job.title}</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{job.period}</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{job.company}</p>
              <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education & Certifications - Two columns on larger screens */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-wrap justify-between">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{edu.year}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Certifications</h2>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-wrap justify-between">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{cert.year}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Additional Courses/Training - Collapsible sections by provider */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">
            Courses & Training
          </h2>
          
          <div className="space-y-4 mt-6">
            {courseProviders.map((provider) => {
              // Filter courses based on provider
              const filteredCourses = provider.name === "Other" 
                ? resumeData.courses.filter(course => provider.filter?.(course.issuer))
                : resumeData.courses.filter(course => course.issuer === provider.name);
              
              // Skip if no courses for this provider
              if (filteredCourses.length === 0) return null;
              
              return (
                <CollapsibleSection 
                  key={provider.name} 
                  title={provider.displayName}
                  count={filteredCourses.length}
                >
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredCourses.map((course, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{course.name}</h4>
                        <div className="flex justify-between items-center mt-1 text-sm">
                          <span className="text-gray-500 dark:text-gray-400">
                            {provider.name === "Other" ? course.issuer : ""}
                          </span>
                          <span className="text-green-600 dark:text-green-400 font-medium">{course.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>
              );
            })}
          </div>
          
          {/* Complete course list (collapsible) */}
          <div className="mt-8 border-t pt-4 border-gray-200 dark:border-gray-700">
            <CollapsibleSection 
              title="Complete Course List" 
              count={resumeData.courses.length}
            >
              <div className="space-y-3">
                {resumeData.courses.map((course, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{course.name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-gray-600 dark:text-gray-400">{course.issuer}</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">{course.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
} 