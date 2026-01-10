// Blog data index - Auto-sorted by date (newest first)
// To add a new blog: 
// 1. Create a new file (e.g., blog7.ts) following the BlogPost interface
// 2. Import and add it to the blogRegistry array below
// 3. The blog will automatically appear at the correct position based on its date

import { BlogPost } from "./types";
import { blog1 } from "./blog1";
import { blog2 } from "./blog2";


// Register all blogs here - order doesn't matter, they're auto-sorted by date
const blogRegistry: BlogPost[] = [
  blog1,
  blog2
];

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
