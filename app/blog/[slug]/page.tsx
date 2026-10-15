import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "../../components/PageHead";
import JsonLd from "../../components/JsonLd";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { pageMetadata, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const meta = pageMetadata({ title: post.title, description: post.description, path: `/blog/${slug}`, type: "article" });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, modifiedTime: post.updated ?? post.date, authors: [site.name], tags: post.tags },
    ...(post.draft && { robots: { index: false } }),
  };
}

const PostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          url: `${site.url}/blog/${slug}`,
          mainEntityOfPage: `${site.url}/blog/${slug}`,
          keywords: post.tags,
          author: { "@type": "Person", name: site.name, url: site.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}/blog` },
            { "@type": "ListItem", position: 2, name: post.title, item: `${site.url}/blog/${slug}` },
          ],
        }}
      />
      <article>
        <PageHead title={post.title} lede={post.description} crumbs={[{ href: "/blog", label: "Blog" }]}>
          <div className="meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingMinutes} min read</span>
            {post.draft && <span className="badge">Draft</span>}
          </div>
        </PageHead>
        <section>
          <div className="prose">
            <Content />
          </div>
        </section>
      </article>
      <section>
        <Link className="btn btn-outline btn-sm" href="/blog">
          ← All posts
        </Link>
      </section>
    </>
  );
};

export default PostPage;
