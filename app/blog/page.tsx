import PageHead from "../components/PageHead";
import PostList from "../components/blog/PostList";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Writing by Sai Zayar Hein on software engineering, system design and back-end development.",
  path: "/blog",
});

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageHead
        title="Blog"
        lede="Notes on software engineering, system design and back-end development, from building real systems."
      >
        <div className="actions">
          <a className="btn btn-outline btn-sm" href="/blog/rss.xml">
            RSS feed
          </a>
        </div>
      </PageHead>
      <section>
        <PostList posts={posts} headingLevel={2} />
      </section>
    </>
  );
};

export default BlogPage;
