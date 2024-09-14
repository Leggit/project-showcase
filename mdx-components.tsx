import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => (
      <pre {...props} className="rounded-lg border-2 border-zinc-500 mb-4" />
    ),
    ul: (props) => <ul {...props} className="list-disc ps-8 mb-4" />,
    a: (props) => <a {...props} className="underline" />,
    ...components,
  };
}
