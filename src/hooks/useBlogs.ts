import { useQuery } from "@tanstack/react-query";
import { fetchBlogMetadata } from "@/lib/blogApi";
import { BlogPost } from "@/types/blog";
import { BLOG_CONFIG } from "@/config/blog";

/**
 * Hook to fetch all blog posts
 */
export const useBlogs = () => {
  return useQuery<BlogPost[], Error>({
    queryKey: ["blogs"],
    queryFn: fetchBlogMetadata,
    staleTime: BLOG_CONFIG.STALE_TIME,
    gcTime: BLOG_CONFIG.CACHE_TIME, // Previously cacheTime in older versions
    retry: 2,
    retryDelay: 1000,
  });
};


