import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm"; // ✅ Enables tables

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkGfm).use(html).process(markdown);
  return result.toString();
}
