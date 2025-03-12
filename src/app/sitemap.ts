import { getAllPosts } from "@/lib/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://example.com"; // Change to your actual domain

  // ✅ Await getAllPosts() because it's async
  const posts = await getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  // Define static pages
  const staticPages = [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/contact` },
  ];

  return [...staticPages, ...postUrls];
}
