import { BlogPost } from "./types";
import cyberStyles from "./cyber/cyber.module.css";
import eventStyles from "./event/event.module.css";
import journeyStyles from "./journey/journey.module.css";
import moneyTradingStyles from "./money-trading/money-trading.module.css";
import personalHobbyStyles from "./personal-hobby/personal-hobby.module.css";

const blogModules = import.meta.glob<BlogPost>("./*/blog*.ts", {
  eager: true,
  import: "default",
});

const blogRegistry: BlogPost[] = Object.values(blogModules);

export const categories = [
  { slug: "cyber", name: "Cyber", description: "Security, privacy, and the systems behind a safer web.", styles: cyberStyles },
  { slug: "event", name: "Events", description: "Notes and takeaways from rooms worth remembering.", styles: eventStyles },
  { slug: "journey", name: "Journey", description: "Lessons from building, learning, and changing direction.", styles: journeyStyles },
  { slug: "money-trading", name: "Money & Trading", description: "Personal observations on markets, money, and discipline.", styles: moneyTradingStyles },
  { slug: "personal-hobby", name: "Personal Hobby", description: "The interests that keep the work human.", styles: personalHobbyStyles },
] as const;

// Sort blogs by date (newest first) - this runs once on import
export const allBlogPosts: BlogPost[] = [...blogRegistry].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Get recent posts for homepage (configurable count)
export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return allBlogPosts.slice(0, count);
};

// Get a single blog post by ID
export const getBlogById = (id: string): BlogPost | undefined => {
  return allBlogPosts.find((post) => post.id === id);
};

export const getBlogByPath = (categorySlug: string, slug: string): BlogPost | undefined => {
  return allBlogPosts.find((post) => post.categorySlug === categorySlug && post.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
  return allBlogPosts.filter((post) => post.categorySlug === categorySlug);
};

// Create a lookup map for quick access by ID
export const blogPostsMap: Record<string, BlogPost> = allBlogPosts.reduce(
  (acc, post) => {
    acc[post.id] = post;
    return acc;
  },
  {} as Record<string, BlogPost>
);

// Export types
export type { BlogPost } from "./types";
