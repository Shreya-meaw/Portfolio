export interface BlogPost {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date format: YYYY-MM-DD
  readTime: string;
  category: string;
  image: string;
  metaDescription?: string;
  content: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
  tags?: string[];
  articleClass?: string;
}
