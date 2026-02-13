import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useBlog, useBlogContent } from "@/hooks/useBlog";
import { useBlogs } from "@/hooks/useBlogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { format } from "date-fns";
import { Calendar, Clock, User, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/blog/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: blog, isLoading: blogLoading, error: blogError } = useBlog(slug || "");
  const { data: content, isLoading: contentLoading, error: contentError } = useBlogContent(blog?.contentUrl);
  const { data: allBlogs } = useBlogs();

  useEffect(() => {
    if (blog) {
      window.scrollTo(0, 0);
      
      // Update page title
      document.title = `${blog.title} | ATIUM Sports Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", blog.excerpt);
      }
      
      // Update OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", blog.title);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute("content", blog.excerpt);
      }
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", window.location.href);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        meta.setAttribute("content", window.location.href);
        document.head.appendChild(meta);
      }
      
      // Add OG image if featured image exists
      if (blog.featuredImage) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
          ogImage.setAttribute("content", blog.featuredImage);
        } else {
          const meta = document.createElement("meta");
          meta.setAttribute("property", "og:image");
          meta.setAttribute("content", blog.featuredImage);
          document.head.appendChild(meta);
        }
      }
    }
  }, [blog]);

  // Show 404 if blog not found
  if (!blogLoading && !blog && !blogError) {
    return <NotFound />;
  }

  // Format date: "24 April 2025"
  const formattedDate = blog ? format(new Date(blog.date), "d MMMM yyyy") : "";

  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 -ml-2">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>

              {blogLoading && (
                <div className="space-y-4">
                  <Skeleton className="h-12 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              )}

              {blogError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Failed to load blog post. Please try again later.
                  </AlertDescription>
                </Alert>
              )}

              {blog && (
                <>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-sm">
                      {blog.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h1 className="text-section-mobile md:text-section-tablet lg:text-section-desktop font-semibold font-lato mb-6 text-foreground">
                    {blog.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span className="font-roboto">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-roboto">{formattedDate}</span>
                    </div>
                    {blog.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="font-roboto">{blog.readTime} min read</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {contentLoading && (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              )}

              {contentError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Failed to load blog content. Please try again later.
                  </AlertDescription>
                </Alert>
              )}

              {content && blog && (
                <article className="prose prose-lg max-w-none prose-headings:font-lato prose-headings:text-foreground prose-p:font-roboto prose-p:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-foreground prose-ul:font-roboto prose-ol:font-roboto prose-li:text-foreground prose-img:rounded-lg prose-img:shadow-md">
                  {content.html ? (
                    <div dangerouslySetInnerHTML={{ __html: content.html }} />
                  ) : content.markdown ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {content.markdown}
                    </ReactMarkdown>
                  ) : null}
                </article>
              )}

              {/* Related Articles */}
              {blog && allBlogs && allBlogs.length > 1 && (
                <RelatedArticles currentBlog={blog} allBlogs={allBlogs} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetail;

