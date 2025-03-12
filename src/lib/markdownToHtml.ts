import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  try {
    const result = await remark().use(html).process(markdown);
    console.log("✅ Processed HTML:", result.toString()); // Check output
    return result.toString();
  } catch (error) {
    console.error("❌ Markdown conversion failed:", error);
    return "<p>Error processing content</p>";
  }
}
