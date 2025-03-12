"use client";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import markdownToHtml from "@/lib/markdownToHtml";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllPosts(); // ✅ No await needed (SSG)
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug); // ✅ Still sync

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://example.com/blog/${params.slug}`,
      type: "article",
      images: [{ url: post.ogImage.url }],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.ogImage.url,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
      }),
    },
  };
}

export default function Post({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug); // ✅ Sync, no hydration issues

  if (!post) {
    console.error("❌ Post not found for slug:", params.slug);
    return notFound();
  }

  const htmlContent = markdownToHtml(post.content);
  console.log("Markdown:", htmlContent);

  console.log("content:", post.content);

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />{" "}
          {/* ✅ Directly use pre-converted HTML */}
        </article>
      </Container>
    </main>
  );
}
