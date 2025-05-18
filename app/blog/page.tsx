import React from "react";

import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import BlogCard from "@/components/blog-card";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Ollie's blog",
  description:
    "A selection of fairly random posts about what I've been doing in my spare time in the world of tech",
};

async function BlogHome() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <header>
        <h1 className="text-7xl">My blog</h1>
      </header>
      <aside>
        <p className="max-w-[500px] md:max-w-[700px] px-1 text-lg mb-8">
          {`A selection of fairly random posts about what I've been doing in my spare time in the world of tech, that I will be adding to on an unpredictable and most likely fairly rare basis. Any views I express are my own.`}
        </p>
      </aside>

      <main>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPostsData.map((blogData, index) => (
            <li className="flex flex-grow" key={blogData.id}>
              <Link
                className="flex flex-grow w-full"
                href={"./blog/" + blogData.id}
              >
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex flex-grow w-full"
                >
                  <BlogCard blogData={blogData} />
                </motion.section>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default BlogHome;
