// Central export for all static data
export { socialLinks, type SocialLink } from "./social-links";
export { navItems, footerQuickLinks, type NavItem } from "./navigation";
export { servicesList } from "./services";

// Blog exports
export { 
  allBlogPosts, 
  getRecentPosts, 
  getBlogById, 
  getBlogByPath,
  getPostsByCategory,
  categories,
  blogPostsMap,
  type BlogPost 
} from "./blogs";
