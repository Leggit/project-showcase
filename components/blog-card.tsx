"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BlogData } from "@/types/blog-data.interface";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { Badge } from "./ui/badge";

function BlogCard({ blogData }: { blogData: BlogData }) {
  const [loadingImg, setLoadingImg] = useState(true);
  return (
    <Card className="bg-card flex-1 flex-grow flex flex-col w-full">
      <CardHeader className="flex-grow">
        <CardTitle>{blogData.title}</CardTitle>
        <CardDescription>{blogData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            {loadingImg && <Skeleton className="w-full h-full" />}
            <Image
              loading="lazy"
              src={blogData.coverImage.src}
              onLoad={() => setLoadingImg(false)}
              fill
              alt={blogData.coverImage.alt}
              className="rounded-md object-cover hover:scale-[103%] transition ease-in-out"
            />
          </AspectRatio>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          {blogData.tags.map((tag, index) => (
            <Badge key={index}>{tag.title}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
