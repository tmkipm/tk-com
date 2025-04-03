'use client';

import { motion } from 'framer-motion';
import BlogPostPreview from './BlogPostPreview';
import type { PostData } from '@/lib/posts'; // Import the PostData type

// Animation variants (can be defined here or passed as props)
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

interface BlogListProps {
  posts: PostData[]; // Expect posts array as a prop
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <motion.div
      className="space-y-6 max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {posts.length > 0 ? (
        posts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <BlogPostPreview
              title={post.title}
              date={post.date}
              description={post.description}
              tags={post.tags}
              slug={post.slug}
            />
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No blog posts yet. Stay tuned!</p>
      )}
    </motion.div>
  );
};

export default BlogList; 