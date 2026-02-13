import { BlogPost } from "@/types/blog";
import { getRelatedBlogs } from "@/lib/blogApi";
import BlogCard from "./BlogCard";

interface RelatedArticlesProps {
  currentBlog: BlogPost;
  allBlogs: BlogPost[];
  limit?: number;
}

const RelatedArticles = ({ currentBlog, allBlogs, limit = 4 }: RelatedArticlesProps) => {
  const relatedBlogs = getRelatedBlogs(currentBlog, allBlogs, limit);

  if (relatedBlogs.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-semibold font-lato mb-6 text-foreground">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;


