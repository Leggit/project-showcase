import React from "react";

import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import BlogCard from "@/components/blog-card";

async function BlogHome() {
  const allPostsData = await getSortedPostsData();

  return (
    <section>
      <header>
        <h1 className="text-7xl">My blog</h1>
      </header>
      <aside>
        <p className="max-w-[500px] md:max-w-[700px] px-1 text-lg mb-8">
          {`Below will be a selection of fairly random blog posts about what I've been doing in my spare time in the world of tech. Any views I express are my own and don't necessarily reflect my employer's or my parent's or my dog's or anyone else's views.`}
        </p>
      </aside>

      <main>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPostsData.map((blogData) => (
            <li className="flex flex-grow" key={blogData.id}>
              <Link className="flex flex-grow" href={"./blog/" + blogData.id}>
                <BlogCard blogData={blogData} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default BlogHome;
