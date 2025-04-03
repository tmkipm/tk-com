import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {currentYear} Tyler Knibbs. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          {/* Replace '#' with actual links from CV */}
          <Link href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            GitHub
          </Link>
          <Link href="mailto:Tknibbs31@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 