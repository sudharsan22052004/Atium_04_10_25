import { Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
}

const BlogCard = ({ blog, className }: BlogCardProps) => {
  // Format date: "24 April 2025"
  const formattedDate = format(new Date(blog.date), "d MMMM yyyy");

  return (
    <Link to={`/blog/${blog.slug}`} className={cn("block h-full", className)}>
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
        {/* Featured Image (if available) */}
        {blog.featuredImage && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-3">
            <Badge variant="secondary" className="text-xs">
              {blog.category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold font-lato mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground font-roboto mb-4 line-clamp-2 flex-grow">
            {blog.excerpt}
          </p>

          {/* Footer: Author, Date, Read Time */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span className="font-roboto">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span className="font-roboto">{formattedDate}</span>
            </div>
            {blog.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span className="font-roboto">{blog.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;


