import { blog1 as legacyBlog1 } from "../blog1";
import styles from "./blog1-deepfake-videos.module.css";

const blog1 = {
  ...legacyBlog1,
  id: "cyber/blog1-deepfake-videos",
  slug: "blog1-deepfake-videos",
  categorySlug: "cyber",
  category: "Cybersecurity",
  author: { name: "Samrat Bhardwaj", role: "Developer & security writer" },
  tags: ["deepfakes", "cybersecurity", "india", "privacy"],
  articleClass: styles.article,
};

export default blog1;
