import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import path from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug: realSlug, ...data, content } as Post;
  } catch (error) {
    console.error("❌ Post file not found:", fullPath);
    return null;
  }
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getAllPosts(): Promise<Post[]> {
  // ✅ Make it async
  const slugs = getPostSlugs();
  const posts = (
    await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  ).filter((post): post is Post => post !== null); // ✅ Await all posts and filter out nulls
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
