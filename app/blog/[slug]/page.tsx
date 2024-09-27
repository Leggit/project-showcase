import React from "react";
import { getPostContent, getSortedPostsData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const posts = getSortedPostsData();
  return posts.map((post: any) => ({ slug: post.id }));
};

export async function generateMetadata({
  params: { slug },
}: any): Promise<Metadata> {
  const { data } = getPostContent(slug);
  return {
    title: { absolute: data.title + " | Ollie's blog" },
    description: data.description,
  };
}

async function BlogPage({ params: { slug } }: any) {
  const { content, data } = getPostContent(slug);
  const mdxComponents = useMDXComponents({});

  return (
    <main>
      <article className="">
        <div className="max-w-[900px] m-auto">
          <header>
            <h1>
              {data.title}
              <em className="mb-4 block text-sm font-light mt-2">
                {data.description}
              </em>
              <small className="mb-4 block text-sm font-light mt-2">
                {data.date}
              </small>
            </h1>
          </header>

          <Image
            className="mb-4 w-[100%] h-auto"
            width={500}
            height={1000}
            src={data.coverImage.src}
            loading="lazy"
            alt={data.coverImage.alt}
          />

          <MDXRemote
            source={content}
            options={{
              mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] },
            }}
            components={mdxComponents}
          />
        </div>
      </article>
    </main>
  );
}

export default BlogPage;
