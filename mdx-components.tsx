import type { MDXComponents } from "mdx/types";
import Code from "./components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} />,
    ul: (props) => <ul {...props} className="list-disc ps-8 mb-4" />,
    a: (props) => <a {...props} className="underline" />,
    code: (props) => <code {...props} className="rounded-0" />,
    Code: (props) => <Code {...props} />,
    img: (props) => <img {...props} className="m-auto" />,
    ...components,
  };
}
