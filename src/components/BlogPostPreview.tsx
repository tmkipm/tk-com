'use client'; // Required for motion

import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

interface BlogPostPreviewProps {
  title: string;
  date: string; // Format as 'YYYY-MM-DD'
  description: string;
  tags: string[];
  slug: string; // For linking to the full post (e.g., /blog/[slug])
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  title,
  date,
  description,
  tags,
  slug,
}) => {
  // Basic date formatting, consider a library like date-fns for robustness
  const formattedDate = new Date(date + 'T00:00:00Z') // Assume UTC to avoid timezone issues
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
  });

  return (
    <motion.article 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-shadow duration-300 border border-transparent hover:border-blue-300 dark:hover:border-blue-700"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Link href={`/blog/${slug}`} className="block group">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h2>
      </Link>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {formattedDate}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
        Read More →
      </Link>
    </motion.article>
  );
};

export default BlogPostPreview; 