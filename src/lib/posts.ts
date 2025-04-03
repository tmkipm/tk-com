import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc'; // Use RSC version for App Router

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow other frontmatter fields
}

export interface PostData extends PostFrontmatter {
  slug: string;
}

export interface FullPostData {
  frontmatter: PostFrontmatter;
  slug: string;
  content: React.ReactElement; // Compiled MDX content
}

// Get all post slugs (filenames without .mdx)
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

// Get sorted data for all posts (for the blog list page)
export function getSortedPostsData(): PostData[] {
  const slugs = getAllPostSlugs();
  const allPostsData = slugs.map((slug): PostData | null => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      // Basic validation
      if (!data.title || !data.date || !data.description || !data.tags) {
        console.warn(`Post "${slug}" is missing required frontmatter.`);
        return null;
      }

      return {
        slug,
        ...(data as PostFrontmatter),
      };
    } catch (error) {
      console.error(`Error reading or parsing post "${slug}":`, error);
      return null;
    }
  });

  // Filter out null values (posts that failed validation or reading)
  const validPosts = allPostsData.filter((post): post is PostData => post !== null);

  // Sort posts by date in descending order
  return validPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get full data and compiled content for a single post
export async function getPostData(slug: string): Promise<FullPostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content: source } = matter(fileContents);

    if (!data.title || !data.date || !data.description || !data.tags) {
        console.warn(`Post "${slug}" is missing required frontmatter.`);
        return null;
    }

    // Compile the MDX content using the RSC-compatible function
    const { content } = await compileMDX<PostFrontmatter>({
      source,
      options: { parseFrontmatter: false }, // We already parsed it with gray-matter
      // components: {}, // Add custom components if needed
    });

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error getting post data for "${slug}":`, error);
    // Check if the error is specifically file not found
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
        return null; // Explicitly return null if file not found
    }
    // Re-throw other errors or handle them differently if needed
    // For now, returning null for any error during processing
    return null;
  }
} 