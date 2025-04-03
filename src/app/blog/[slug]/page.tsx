import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import type { Metadata } from 'next';

// Generate static paths for all posts at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata dynamically using inline param definition
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
        title: 'Post Not Found',
        description: 'This blog post could not be found.',
    };
  }

  return {
    title: `${post.frontmatter.title} - Tyler Knibbs Blog`,
    description: post.frontmatter.description,
    // Add other metadata like open graph tags if desired
  };
}

// Define the page component using inline param definition
export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Show 404 page if post doesn't exist
  }

  const formattedDate = new Date(post.frontmatter.date + 'T00:00:00Z')
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
  });

  return (
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto py-8">
      {/* Article Header */}
      <header className="mb-8 border-b pb-4 dark:border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 !leading-tight">{post.frontmatter.title}</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>Published on {formattedDate}</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full no-underline">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Render the compiled MDX content */}
      {post.content}

    </article>
  );
}

// Optional: Revalidate posts periodically if needed (e.g., every hour)
// export const revalidate = 3600; 