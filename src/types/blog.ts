export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string; // ISO date string (e.g., "2025-04-24")
  category: string;
  excerpt: string;
  contentUrl: string; // S3 URL to the blog content (HTML or Markdown)
  readTime?: number; // Estimated read time in minutes
  tags?: string[];
  featuredImage?: string; // Optional featured image URL
}

export interface BlogMetadata {
  blogs: BlogPost[];
}

export interface BlogContent {
  html?: string; // Pre-rendered HTML content
  markdown?: string; // Markdown content
}


