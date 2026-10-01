import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Sai Zayar Hein",
};

const BlogPage = () => {
  return (
    <main className="page-head">
      <div className="sec-head">
        <h1 className="page-title">Writing</h1>
        <p>Notes on software engineering, system design and back-end development.</p>
      </div>
      <div className="blog-empty">
        <span className="status">
          <span className="dot" />
          Drafting the first post
        </span>
        <p>
          Nothing published yet. I&apos;ll share what I learn building real systems:
          designs that worked, mistakes I made, and how I fixed them.
        </p>
        <Link className="pill solid" href="/projects">
          See my projects meanwhile
        </Link>
      </div>
    </main>
  );
};

export default BlogPage;
