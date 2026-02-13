import { BlogPost } from "@/types/blog";

/**
 * Mock blog data for development/testing
 * Replace this with actual S3 data when ready for production
 */
export const mockBlogs: BlogPost[] = [
  {
    title: "How to Use Injury Management Module",
    slug: "how-to-use-injury-management-module",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-24",
    category: "Platform Guide",
    excerpt: "Learn how to effectively use the injury management module to track and manage athlete injuries. This comprehensive guide covers everything from initial injury reporting to recovery tracking.",
    contentUrl: "/blog-content/how-to-use-injury-management-module.html",
    readTime: 5,
    tags: ["Injury Management", "Platform Guide", "Tutorial"],
    featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
  },
  {
    title: "Understanding Performance Metrics",
    slug: "understanding-performance-metrics",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-20",
    category: "Performance Analysis",
    excerpt: "Dive deep into the key performance metrics that matter most for athlete development. Learn how to interpret data and make informed decisions.",
    contentUrl: "/blog-content/understanding-performance-metrics.html",
    readTime: 7,
    tags: ["Performance", "Analytics", "Data"],
    featuredImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=400&fit=crop",
  },
  {
    title: "Best Practices for Athlete Monitoring",
    slug: "best-practices-athlete-monitoring",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-15",
    category: "Best Practices",
    excerpt: "Discover the best practices for monitoring athlete health and performance. Learn how to prevent injuries and optimize training schedules.",
    contentUrl: "/blog-content/best-practices-athlete-monitoring.html",
    readTime: 6,
    tags: ["Monitoring", "Best Practices", "Health"],
    featuredImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop",
  },
  {
    title: "Getting Started with ATIUM Platform",
    slug: "getting-started-atium-platform",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-10",
    category: "Platform Guide",
    excerpt: "New to ATIUM? This guide will walk you through the basics of setting up your account, adding athletes, and navigating the platform.",
    contentUrl: "/blog-content/getting-started-atium-platform.html",
    readTime: 8,
    tags: ["Getting Started", "Platform Guide", "Tutorial"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    title: "Data-Driven Training Decisions",
    slug: "data-driven-training-decisions",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-05",
    category: "Performance Analysis",
    excerpt: "Learn how to leverage data analytics to make smarter training decisions. Understand which metrics to focus on and how to interpret trends.",
    contentUrl: "/blog-content/data-driven-training-decisions.html",
    readTime: 9,
    tags: ["Data", "Training", "Analytics"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    title: "Recovery Protocols and Best Practices",
    slug: "recovery-protocols-best-practices",
    author: "ATIUM Sports Performance Team",
    date: "2025-04-01",
    category: "Best Practices",
    excerpt: "Explore effective recovery protocols that help athletes bounce back faster and perform better. Learn about the science behind recovery.",
    contentUrl: "/blog-content/recovery-protocols-best-practices.html",
    readTime: 6,
    tags: ["Recovery", "Best Practices", "Health"],
    featuredImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop",
  },
];


