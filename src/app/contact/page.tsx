import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export const metadata: Metadata = {
  title: 'Contact - Tyler Knibbs',
  description: 'Get in touch with Tyler Knibbs, Data Analyst & Developer. Fill out the contact form or reach out via email or LinkedIn.',
};

export default function ContactPage() {
  return (
    <PageTransitionWrapper>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;d love to hear from you! Feel free to reach out using the form below or through my social profiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Email:</h3>
                  <Link href="mailto:listed-14.tags@icloud.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    listed-14.tags@icloud.com
                  </Link>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">LinkedIn:</h3>
                  <Link 
                    href="https://www.linkedin.com/in/tyler-knibbs/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    linkedin.com/in/tyler-knibbs
                  </Link>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">GitHub:</h3>
                  <Link 
                    href="https://github.com/tmkipm" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    github.com/tmkipm
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Currently Available For:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Fulltime Positions</li>
                <li>Contract Work</li>
                <li>Consulting Projects</li>
                <li>Remote Opportunities</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* GDPR Notice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Privacy Notice</h3>
          <p>
            By submitting this form, you consent to having your data processed to respond to your inquiry.
            I respect your privacy and will only use your information to respond to your message. Your data will not be shared with third parties.
            You can request deletion of your information at any time.
          </p>
        </motion.div>
      </div>
    </PageTransitionWrapper>
  );
} 