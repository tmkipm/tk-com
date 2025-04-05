import { getAllPostSlugs, getPostData } from '@/lib/posts';
import type { Metadata } from 'next';

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((slug) => ({ slug }));
}

// Generate metadata for the page using the built-in types
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: postData.frontmatter.title,
    description: postData.frontmatter.description,
  };
}

// Use built-in Next.js typing for the page component
export default async function Post({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const postData = await getPostData(params.slug);
  
  // If postData is null, return a fallback message
  if (!postData) {
    return <div className="text-center py-12">Post not found</div>;
  }

  // Access the frontmatter directly
  const { frontmatter, content } = postData;

  return (
    <article className="prose dark:prose-invert lg:prose-xl mx-auto py-8">
      <h1>{frontmatter.title}</h1>
      <div className="text-gray-600 dark:text-gray-400">
        <time dateTime={frontmatter.date}>{frontmatter.date}</time>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 mb-8">
        {frontmatter.tags && frontmatter.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Render the MDX content */}
      <div className="mdx-content">
        {content}
      </div>
    </article>
  );
}

// Optional: Revalidate posts periodically if needed (e.g., every hour)
// export const revalidate = 3600; 