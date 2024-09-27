import { getSortedPostsData } from "@/lib/posts";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getSortedPostsData();
  const baseUrl = "https://olliedoesdev.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogPosts.map(({ id }) => ({
      url: `${baseUrl}/blog/${id}`,
      lastModified: new Date(),
    })),
  ];
}
