import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Resume - Tyler Knibbs",
  description: "View the professional resume of Tyler Knibbs, detailing experience in data analysis, development, and more.",
};

// Extracted from CV for structure
const resumeData = {
  name: "Tyler Knibbs",
  title: "Developer & Data Analyst",
  location: "London, GB",
  phone: "07748 106 8170",
  email: "Tknibbs31@gmail.com",
  linkedIn: "#", // Replace with actual LinkedIn URL
  professionalSummary: "Experienced Data Analyst and Developer specializing in SQL, Power BI, Python, and Azure, with a strong track record in data migrations, analytics automation, and strategic decision-making support. Skilled in agile environments, I excel in translating complex technical challenges into clear insights. My expertise includes data analytics, data engineering, databases, education, cloud migrations, and implementing secure data solutions in highly regulated industries. Currently open to new opportunities and actively engaged in professional development through personal projects.",
  technicalSkills: [
    { category: "Data Analysis & BI Tools", skills: "Power BI (Advanced), SSRS, Excel, Power Apps" },
    { category: "Programming Languages", skills: "SQL (Mastery: MS SQL, SQL Server), Python (Data Analysis), PHP, R (Basic), Swift (Learning)" },
    { category: "Cloud Technologies", skills: "Azure (Full migration experience), AWS Fundamentals" },
    { category: "Frameworks & Platforms", skills: ".NET Framework, ServiceNow, Power Apps" },
    { category: "Security & Compliance", skills: "Data Security, Privacy Standards (Legal sector experience)" },
    { category: "Web Development", skills: "UI/UX Principles, Frontend & Backend Development" },
  ],
  professionalExperience: [
    {
      title: "Developer for Data Services",
      company: "Stratagem IPM",
      dates: "Mar 2023 – Dec 2024",
      points: [
        "Led creation of advanced Power BI dashboards to deliver business-critical insights for executive decision-making within intellectual property law.",
        "Supported infrastructure transition from on-premises SQL Server to Azure Cloud, including data migration, cloud architecture, and process modernization.",
        "Improved operational efficiency through automation of financial and performance reports, significantly reducing manual overhead.",
        "Ensured rigorous compliance with security, data protection, and privacy standards required in the legal sector.",
        "Led redevelopment of the company website (UI/UX, backend architecture [.NET], cybersecurity).",
      ],
    },
    {
      title: "Junior Developer for Data Services",
      company: "Stratagem IPM",
      dates: "Aug 2021 – Mar 2023",
      points: [
        "Developed a PHP-based data integrity checking tool, automating manual processes and saving 100+ hours annually.",
        "Transitioned firm-wide reporting from SSRS to Power BI, enhancing visualization and operational decision-making capabilities.",
        "Automated monthly financial reporting, cutting manual effort by 16 hours/month/employee.",
        "Delivered client-specific reporting solutions and technical support, significantly improving client satisfaction and operational efficiency.",
      ],
    },
    {
        title: "Data & IT Apprenticeship Instructor (Freelance, Part-Time)",
        company: "Contract Work",
        dates: "Apr 2024 – Feb 2025",
        points: [
            "Delivered training and mentoring for Level 4 IT and Data Analytics apprentices, covering SQL, Python, data visualization, cloud computing fundamentals, and professional best practices.",
            "Developed curriculum, delivered structured lectures, assessed practical projects, and provided direct career mentorship.",
        ]
    },
    // Add Customer Service/Logistics if desired
  ],
  education: [
    { degree: "BSc Computer Science", institution: "UEA", year: "2021" },
    { degree: "Level 3 Extended Diploma in IT", institution: "Havering Sixth Form", year: "2017" },
    { degree: "11 GCSEs (A–C)", institution: "Gaynes", year: "2012" },
  ],
  certifications: [
    { name: "Power BI Data Analyst Specialization", issuer: "Microsoft", year: "2024" },
    { name: "AWS Fundamentals Specialization", issuer: "Amazon Web Services", year: "2024" },
    { name: "Trade Mark Support Professional", issuer: "CITMA", year: "2022" },
  ],
  // Add courses if desired
  professionalAttributes: [
    "Technical: Experienced leading complex data projects and analytics initiatives.",
    "Communication & Teaching: Effective communicator; skilled in explaining complex technical concepts clearly, with experience instructing up to Level 4 apprentices.",
    "Analytical Problem-Solving: Strong ability to identify and solve complex data and technical problems, improving organizational efficiency.",
  ],
  // Add personal projects if desired
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 print:space-y-4 bg-white dark:bg-gray-900 p-8 print:p-0 rounded-lg shadow-lg print:shadow-none">
      {/* Header */}
      <header className="text-center border-b pb-4 mb-6 print:border-none print:pb-2 print:mb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{resumeData.name}</h1>
        <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">{resumeData.title}</p>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>{resumeData.location}</span>
          <span>{resumeData.phone}</span>
          <Link href={`mailto:${resumeData.email}`} className="hover:text-blue-500">{resumeData.email}</Link>
          <Link href={resumeData.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</Link>
        </div>
        <div className="mt-6 print:hidden"> {/* Hide button when printing */}
            <Link href="/assets/TylerKnibbsCV.pdf" // Replace with actual PDF file name in public/assets
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                Download Resume (PDF)
            </Link>
        </div>
      </header>

      {/* Professional Summary */}
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Professional Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 print:text-sm">{resumeData.professionalSummary}</p>
      </section>

      {/* Technical Skills */}
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Technical Skills</h2>
        <div className="space-y-1 print:space-y-0.5">
          {resumeData.technicalSkills.map(skillGroup => (
            <p key={skillGroup.category} className="text-gray-700 dark:text-gray-300 print:text-sm">
              <span className="font-medium text-gray-800 dark:text-gray-200">{skillGroup.category}:</span> {skillGroup.skills}
            </p>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Professional Experience</h2>
        <div className="space-y-4 print:space-y-2">
          {resumeData.professionalExperience.map(job => (
            <div key={job.title + job.company}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white print:text-base">{job.title}</h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 print:text-xs">{job.company} | {job.dates}</p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-gray-700 dark:text-gray-300 print:text-sm">
                {job.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Education</h2>
        <div className="space-y-2 print:space-y-1">
          {resumeData.education.map(edu => (
            <div key={edu.degree}>
                <p className="font-medium text-gray-800 dark:text-gray-200 print:text-sm">{edu.degree} – {edu.institution}, {edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section aria-labelledby="certifications-heading">
        <h2 id="certifications-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Certifications</h2>
        <div className="space-y-1 print:space-y-0.5">
          {resumeData.certifications.map(cert => (
             <p key={cert.name} className="text-gray-700 dark:text-gray-300 print:text-sm">{cert.name} – {cert.issuer}, {cert.year}</p>
          ))}
        </div>
      </section>

      {/* Professional Attributes */}
       <section aria-labelledby="attributes-heading">
        <h2 id="attributes-heading" className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 print:text-lg">Professional Attributes</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 print:text-sm">
            {resumeData.professionalAttributes.map((attr, index) => (
              <li key={index}>{attr}</li>
            ))}
        </ul>
      </section>

    </div>
  );
} 