import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/data/blogs";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
  accentClass?: string;
}

const BlogCard = ({ post, accentClass = "text-primary" }: BlogCardProps) => (
  <Link to={`/blog/${post.categorySlug}/${post.slug}`} className="block h-full">
    <Card className={`group flex h-full flex-col overflow-hidden border-border/70 bg-card/90 ${styles.card}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.image}
          alt={post.title}
          className={`h-full w-full object-cover ${styles.image}`}
        />
        <span className={`absolute left-4 top-4 rounded-full border border-background/40 bg-background/90 px-3 py-1 text-xs font-semibold ${accentClass}`}>
          {post.category}
        </span>
      </div>
      <CardContent className="flex h-[15rem] flex-col p-6">
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold leading-tight transition-colors group-hover:text-primary">{post.title}</h3>
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className={`mt-auto flex items-center gap-1 text-sm font-semibold ${styles.action} ${accentClass}`}>Read article <ArrowUpRight size={16} /></span>
      </CardContent>
    </Card>
  </Link>
);

export default BlogCard;