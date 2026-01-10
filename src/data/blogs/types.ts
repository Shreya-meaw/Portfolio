export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date format: YYYY-MM-DD
  readTime: string;
  category: string;
  image: string;
  metaDescription?: string;
  content: string;
}
