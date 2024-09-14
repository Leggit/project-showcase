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
    <Card className="bg-card flex-1 flex-grow flex flex-col">
      <CardHeader className="flex-grow">
        <CardTitle>{blogData.title}</CardTitle>
        <CardDescription>{blogData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-[100%]">
          <AspectRatio ratio={16 / 9}>
            {loadingImg && <Skeleton className="w-[100%] h-[100%]" />}
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
        <div className="">
          <div className="grid grid-flow-col gap-2">
            {blogData.tags.map((tag) => (
              <Badge>{tag.title}</Badge>
            ))}
          </div>
          <p className="font-light text-sm mt-2">{blogData.date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
