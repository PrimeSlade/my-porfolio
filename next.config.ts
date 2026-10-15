import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // the About page was merged into the home page
  async redirects() {
    return [{ source: "/about", destination: "/", permanent: true }];
  },
};

// Blog posts are .mdx files in content/blog, imported by the blog routes.
const withMDX = createMDX({});

export default withMDX(nextConfig);
