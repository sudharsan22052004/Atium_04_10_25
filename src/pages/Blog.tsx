import { useEffect, useState } from "react";
import { useBlogs } from "@/hooks/useBlogs";
import BlogCard from "@/components/blog/BlogCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";

const BLOGS_PER_PAGE = 9;

const Blog = () => {
  const { data: blogs, isLoading, error } = useBlogs();
  const [displayedCount, setDisplayedCount] = useState(BLOGS_PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Blog | ATIUM Sports - Performance Intelligence Platform";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Insights on athlete management, performance tracking, and platform usage from the ATIUM Sports Performance Team");
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Blog | ATIUM Sports");
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Insights on athlete management, performance tracking, and platform usage");
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href);
    } else {
      // Create og:url if it doesn't exist
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      meta.setAttribute("content", window.location.href);
      document.head.appendChild(meta);
    }
  }, []);

  const displayedBlogs = blogs?.slice(0, displayedCount) || [];
  const hasMore = blogs ? displayedCount < blogs.length : false;

  const handleLoadMore = () => {
    setDisplayedCount((prev) => prev + BLOGS_PER_PAGE);
  };

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-4 text-foreground">
                Blog
              </h1>
              <p className="text-lg md:text-xl font-roboto text-muted-foreground">
                Insights on athlete management, performance tracking, and platform usage from the ATIUM Sports Performance Team
              </p>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border rounded-lg p-6">
                    <Skeleton className="h-6 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            )}

            {error && (
              <Alert variant="destructive" className="max-w-2xl mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to load blog posts. Please try again later.
                  {error.message && (
                    <span className="block mt-2 text-sm opacity-80">
                      {error.message}
                    </span>
                  )}
                </AlertDescription>
              </Alert>
            )}

            {!isLoading && !error && blogs && blogs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground font-roboto">
                  No blog posts available at the moment. Check back soon!
                </p>
              </div>
            )}

            {!isLoading && !error && displayedBlogs.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedBlogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="flex justify-center mt-12">
                    <Button
                      onClick={handleLoadMore}
                      variant="outline"
                      className="px-8"
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;

