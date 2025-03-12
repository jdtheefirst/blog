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

// ✅ Generate static paths for SSG
export async function generateStaticParams() {
  const posts = await getAllPosts(); // Await the result
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Generate metadata for the post
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug); // Fetch the post by slug

  if (post === null) {
    return notFound(); // Return 404 if post is not found
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${post.ogImage?.url}`,
      type: "article",
      images: [{ url: post.ogImage?.url }],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.ogImage?.url,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
      }),
    },
  };
}

// ✅ Post component
export default async function Post({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug); // Fetch the post by slug

  if (post === null) {
    return notFound(); // Gracefully handle missing posts
  }

  const content = await markdownToHtml(post.content || ""); // Convert markdown to HTML

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
          <PostBody content={content} /> {/* Render the post content */}
        </article>
      </Container>
    </main>
  );
}
