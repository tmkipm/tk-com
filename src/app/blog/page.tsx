import type { Metadata } from 'next';
// No longer import BlogPostPreview directly here
import { getSortedPostsData } from '@/lib/posts'; 
// No motion needed here
import BlogList from '@/components/BlogList'; // Import the new client component

// Metadata can be defined here again
export const metadata: Metadata = {
  title: "Blog - Tyler Knibbs",
  description: "Read articles and insights from Tyler Knibbs on data, development, and technology.",
};

// This remains a Server Component
export default function BlogPage() {
  const posts = getSortedPostsData(); // Fetch data on the server

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">Blog Posts</h1>
      
      {/* Render the Client Component, passing data as props */}
      <BlogList posts={posts} />
      
    </div>
  );
} 