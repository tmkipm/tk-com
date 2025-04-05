import { getAllPostSlugs, getPostData } from '@/lib/posts';
import type { Metadata } from 'next';

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((slug) => ({ slug }));
}

// Type definition for the page component props
type Props = {
  params: { slug: string };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Get the post data
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.description,
  };
}

// Custom components for MDX rendering that handle missing images gracefully
const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
      <img 
        {...props} 
        className="w-full h-64 object-cover bg-blue-100 dark:bg-blue-800"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevent infinite loop
          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%234a90e2'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='32' fill='white' text-anchor='middle' dominant-baseline='middle'%3E" + (props.alt || 'Image placeholder') + "%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
  ),
};

// Use more permissive typing for the page component
export default async function Post({ params }: Props) {
  const postData = await getPostData(params.slug);

  return (
    <article className="prose dark:prose-invert lg:prose-xl mx-auto py-8">
      <h1>{postData.title}</h1>
      <div className="text-gray-600 dark:text-gray-400">
        <time dateTime={postData.date}>{postData.date}</time>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 mb-8">
        {postData.tags && postData.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div
        className="mdx-content"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}

// Optional: Revalidate posts periodically if needed (e.g., every hour)
// export const revalidate = 3600; 