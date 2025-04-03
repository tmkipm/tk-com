'use client';

import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

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
      title: "Junior Developer for Data Services",
      company: "Stratagem IPM",
      period: "Aug 2021 – Mar 2023",
      responsibilities: [
        "Developed a PHP-based data integrity checking tool, automating manual processes and saving 100+ hours annually.",
        "Transitioned firm-wide reporting from SSRS to Power BI, enhancing visualization and operational decision-making capabilities.",
        "Automated monthly financial reporting, cutting manual effort by 16 hours/month/employee.",
        "Delivered client-specific reporting solutions and technical support, significantly improving client satisfaction and operational efficiency."
      ]
    },
    {
      title: "Data & IT Apprenticeship Instructor",
      company: "Contract Work",
      period: "Apr 2024 – Feb 2025",
      responsibilities: [
        "Delivered training and mentoring for Level 4 IT and Data Analytics apprentices, covering SQL, Python, data visualization, cloud computing fundamentals, and professional best practices.",
        "Developed curriculum, delivered structured lectures, assessed practical projects, and provided direct career mentorship."
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
    { name: "Data Analysis and Visualization with Power BI", issuer: "Microsoft", grade: "88.33%" }
  ]
  // Add personal projects if desired
};

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

        {/* Additional Courses/Training */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">Additional Courses</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {resumeData.courses.map((course, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{course.name}</h3>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{course.issuer}</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{course.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransitionWrapper>
  );
} 