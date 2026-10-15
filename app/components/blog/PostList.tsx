import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";

const PostList = ({ posts, headingLevel = 3 }: { posts: Post[]; headingLevel?: 2 | 3 }) => {
  const Heading = `h${headingLevel}` as const;

  if (posts.length === 0) {
    return (
      <div className="empty">
        <h3>First post coming soon</h3>
        <p>
          I&apos;ll write about what I learn building real systems: designs that worked, mistakes I made,
          and how I fixed them.
        </p>
        <Link className="btn btn-outline btn-sm" href="/projects">
          See my projects meanwhile
        </Link>
      </div>
    );
  }

  return (
    <div className="posts boxed">
      {posts.map((post) => (
        <Link className="post-row" key={post.slug} href={`/blog/${post.slug}`}>
          <Heading>
            {post.draft && <span className="badge">Draft</span>} {post.title}
          </Heading>
          <span className="when">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
          </span>
          <p>{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <span className="tags">
              {post.tags.map((t) => (
                <span className="badge badge-secondary" key={t}>
                  {t}
                </span>
              ))}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default PostList;
