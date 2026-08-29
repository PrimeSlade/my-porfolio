import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-black min-h-[calc(100vh-57px)] flex flex-col">
      <div className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500 mb-3">
            <span className="w-8 h-px bg-white/20" />
            Blog
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-white">
            Writing
          </h2>
          <p className="font-mono text-sm text-neutral-500 mt-2">
            Thoughts on software engineering, system design & backend.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full border border-white/10 bg-[#050505] p-10 text-center">
          <div className="w-12 h-px bg-white mx-auto mb-6" />
          <p className="font-mono text-[13px] leading-6 text-neutral-400">
            Stay tuned! I&apos;ll be sharing insights about software engineering,
            system design, and backend development soon.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500">
            <span className="w-2 h-2 bg-white animate-pulse" />
            Drafting first post
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
