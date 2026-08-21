import { blog2 as legacyBlog2 } from "../blog2";
import styles from "./blog2-secure-coding-fundamentals.module.css";

const blog2 = {
  ...legacyBlog2,
  id: "cyber/blog2-secure-coding-fundamentals",
  slug: "blog2-secure-coding-fundamentals",
  categorySlug: "cyber",
  category: "Cybersecurity",
  author: { name: "Samrat Bhardwaj", role: "Developer & security writer" },
  tags: ["secure coding", "web development", "owasp"],
  articleClass: styles.article,
};

export default blog2;
