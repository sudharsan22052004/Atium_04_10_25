// Blog configuration for S3 integration
// You can override these with environment variables if needed

export const BLOG_CONFIG = {
  // S3 bucket base URL - Update this with your actual S3 bucket URL
  // Example: "https://your-bucket.s3.region.amazonaws.com"
  // Set to empty string or use USE_MOCK_DATA=true to use mock data
  S3_BASE_URL: import.meta.env.VITE_BLOG_S3_BASE_URL || "https://your-bucket.s3.region.amazonaws.com",
  
  // Path to the metadata JSON file in S3
  // Example: "blog/metadata.json"
  METADATA_PATH: import.meta.env.VITE_BLOG_METADATA_PATH || "blog/metadata.json",
  
  // Blog content base path in S3
  // Example: "blog/content"
  CONTENT_BASE_PATH: import.meta.env.VITE_BLOG_CONTENT_PATH || "blog/content",
  
  // Use mock data instead of S3 (for development)
  USE_MOCK_DATA: import.meta.env.VITE_BLOG_USE_MOCK_DATA === "true" || 
                  import.meta.env.VITE_BLOG_S3_BASE_URL === undefined ||
                  import.meta.env.VITE_BLOG_S3_BASE_URL === "",
  
  // Cache settings
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes in milliseconds
  STALE_TIME: 2 * 60 * 1000, // 2 minutes in milliseconds
} as const;

/**
 * Check if S3 is properly configured
 */
export const isS3Configured = (): boolean => {
  const baseUrl = BLOG_CONFIG.S3_BASE_URL;
  return !BLOG_CONFIG.USE_MOCK_DATA && 
         baseUrl !== "https://your-bucket.s3.region.amazonaws.com" &&
         baseUrl !== "" &&
         (baseUrl.startsWith("http://") || baseUrl.startsWith("https://"));
};

// Helper function to get full S3 URL
export const getS3Url = (path: string): string => {
  const baseUrl = BLOG_CONFIG.S3_BASE_URL.replace(/\/$/, ""); // Remove trailing slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}/${cleanPath}`;
};

// Helper function to get metadata URL
export const getMetadataUrl = (): string => {
  return getS3Url(BLOG_CONFIG.METADATA_PATH);
};

// Helper function to get blog content URL
export const getBlogContentUrl = (contentUrl: string): string => {
  // If contentUrl is already a full URL, return it
  if (contentUrl.startsWith("http://") || contentUrl.startsWith("https://")) {
    return contentUrl;
  }
  // Otherwise, construct from base path
  return getS3Url(contentUrl);
};

