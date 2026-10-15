import { ogImage, ogSize } from "@/lib/og";
import { getPost, getPosts } from "@/lib/blog";

export const alt = "Blog post by Sai Zayar Hein";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return ogImage({ title: post?.title ?? "Blog", subtitle: [post?.description ?? ""] });
}
