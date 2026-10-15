import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. Posts are styled through the `.prose` wrapper, so no overrides yet.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
