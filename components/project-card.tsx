"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface Project {
  title: string;
  description: string;
  siteUrl?: string;
  repoUrl?: string;
  imageUrl: string;
  icons: IconDefinition[];
  isWide?: boolean;
}

function ProjectCard({
  title,
  description,
  siteUrl,
  repoUrl,
  imageUrl,
  icons,
  isWide,
}: Project) {
  const [loadingImg, setLoadingImg] = useState(true);
  const [useWideImages, setUseWideImages] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUseWideImages(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isWide]);

  return (
    <Card className="max-w-[600px] flex-1 flex-grow w-[100%] min-w-[100%] flex flex-col">
      <CardHeader className="flex-grow">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          {icons.map((icon, index) => (
            <FontAwesomeIcon className="text-lg mr-2" key={index} icon={icon} />
          ))}
        </div>
        <Link target="_blank" href={siteUrl ?? "#"}>
          <div className="w-[100%]">
            <AspectRatio ratio={useWideImages && isWide ? 8.7 / 3 : 4 / 3}>
              {loadingImg && <Skeleton className="w-[100%] h-[100%]" />}
              <Image
                loading="lazy"
                src={imageUrl}
                onLoad={() => setLoadingImg(false)}
                fill
                alt="Image"
                className="rounded-md object-cover hover:scale-[103%] transition ease-in-out"
              />
            </AspectRatio>
          </div>
        </Link>
      </CardContent>
      <CardFooter>
        {siteUrl && (
          <Button className="me-2" asChild>
            <Link target="_blank" href={siteUrl}>
              Visit site &nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </Button>
        )}
        {repoUrl && (
          <Button>
            <Link target="_blank" href={repoUrl}>
              View code&nbsp;
              <FontAwesomeIcon className="text-lg" icon={faGithub} />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
