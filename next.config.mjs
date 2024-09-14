/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
