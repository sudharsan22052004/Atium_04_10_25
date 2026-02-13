import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug, fetchBlogContent } from "@/lib/blogApi";
import { BlogPost, BlogContent } from "@/types/blog";
import { BLOG_CONFIG } from "@/config/blog";

/**
 * Hook to fetch a single blog post by slug
 */
export const useBlog = (slug: string) => {
  return useQuery<BlogPost | null, Error>({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug),
    enabled: !!slug,
    staleTime: BLOG_CONFIG.STALE_TIME,
    gcTime: BLOG_CONFIG.CACHE_TIME,
    retry: 2,
    retryDelay: 1000,
  });
};

/**
 * Hook to fetch blog content (HTML/Markdown) for a blog post
 */
export const useBlogContent = (contentUrl: string | undefined) => {
  return useQuery<BlogContent, Error>({
    queryKey: ["blog-content", contentUrl],
    queryFn: () => fetchBlogContent(contentUrl!),
    enabled: !!contentUrl,
    staleTime: BLOG_CONFIG.STALE_TIME,
    gcTime: BLOG_CONFIG.CACHE_TIME,
    retry: 2,
    retryDelay: 1000,
  });
};


