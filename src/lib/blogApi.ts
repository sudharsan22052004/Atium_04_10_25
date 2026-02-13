import { BlogPost, BlogMetadata, BlogContent } from "@/types/blog";
import { getMetadataUrl, getBlogContentUrl, isS3Configured } from "@/config/blog";
import { mockBlogs } from "@/data/mockBlogs";

/**
 * Fetches blog metadata from S3 or returns mock data
 * @returns Promise resolving to array of blog posts
 */
export const fetchBlogMetadata = async (): Promise<BlogPost[]> => {
  // Use mock data if S3 is not configured
  if (!isS3Configured()) {
    console.log("Using mock blog data (S3 not configured)");
    // Sort mock blogs by date (newest first)
    return [...mockBlogs].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Descending order (newest first)
    });
  }

  try {
    const metadataUrl = getMetadataUrl();
    const response = await fetch(metadataUrl, {
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog metadata: ${response.status} ${response.statusText}`);
    }

    const data: BlogMetadata = await response.json();
    
    // Validate that blogs array exists
    if (!data.blogs || !Array.isArray(data.blogs)) {
      throw new Error("Invalid blog metadata format: missing blogs array");
    }

    // Sort blogs by date (newest first)
    return data.blogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // Descending order (newest first)
    });
  } catch (error) {
    console.error("Error fetching blog metadata from S3:", error);
    console.log("Falling back to mock blog data");
    // Fallback to mock data if S3 fetch fails
    return [...mockBlogs].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }
};

/**
 * Fetches a single blog post by slug
 * @param slug - The blog post slug
 * @returns Promise resolving to blog post or null if not found
 */
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const blogs = await fetchBlogMetadata();
    return blogs.find((blog) => blog.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    throw error;
  }
};

/**
 * Fetches blog content from S3 or returns mock content
 * @param contentUrl - The S3 URL or path to the blog content
 * @returns Promise resolving to blog content (HTML or Markdown)
 */
export const fetchBlogContent = async (contentUrl: string): Promise<BlogContent> => {
  // Use mock content if S3 is not configured
  if (!isS3Configured()) {
    console.log("Using mock blog content (S3 not configured)");
    // Return a simple HTML content for mock blogs
    return {
      html: `
        <div class="prose max-w-none">
          <p>This is sample blog content. In production, this content would be fetched from S3.</p>
          <p>To configure S3, update the <code>VITE_BLOG_S3_BASE_URL</code> environment variable or modify <code>src/config/blog.ts</code>.</p>
          <h2>Getting Started</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h3>Key Features</h3>
          <ul>
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      `,
    };
  }

  try {
    const url = getBlogContentUrl(contentUrl);
    const response = await fetch(url, {
      headers: {
        "Accept": "text/html, text/markdown, text/plain, */*",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog content: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();

    // Determine if content is HTML or Markdown
    if (contentType.includes("text/html") || text.trim().startsWith("<")) {
      return { html: text };
    } else {
      return { markdown: text };
    }
  } catch (error) {
    console.error("Error fetching blog content:", error);
    throw error;
  }
};

/**
 * Gets related blog posts based on category and tags
 * @param currentBlog - The current blog post
 * @param allBlogs - Array of all blog posts
 * @param limit - Maximum number of related posts to return (default: 4)
 * @returns Array of related blog posts
 */
export const getRelatedBlogs = (
  currentBlog: BlogPost,
  allBlogs: BlogPost[],
  limit: number = 4
): BlogPost[] => {
  // Filter out the current blog
  const otherBlogs = allBlogs.filter((blog) => blog.slug !== currentBlog.slug);

  // Score blogs based on category and tags match
  const scoredBlogs = otherBlogs.map((blog) => {
    let score = 0;

    // Category match gets highest priority
    if (blog.category === currentBlog.category) {
      score += 10;
    }

    // Tag matches
    if (currentBlog.tags && blog.tags) {
      const commonTags = currentBlog.tags.filter((tag) => blog.tags?.includes(tag));
      score += commonTags.length * 2;
    }

    return { blog, score };
  });

  // Sort by score (highest first) and take top N
  return scoredBlogs
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.blog);
};

