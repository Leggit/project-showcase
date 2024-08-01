"use client";
import ProjectCard, { Project } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  faAngular,
  faCss3,
  faGoogle,
  faHtml5,
  faJava,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  const projects: Project[] = [
    {
      title: "Flocking simulator (boids algorithm)",
      description:
        "A visual display that demonstrates how three simple rules can lead to flocking behaviour. Have a play with the coeficients to see how each one plays their part.",
      imageUrl: "/boids.png",
      siteUrl: "https://leggit.github.io/boids/",
      repoUrl: "https://github.com/Leggit/boids",
      icons: [faHtml5, faJs, faCss3],
    },
    {
      title: "Algebro",
      description:
        "At first glance, its just a calculator...but this calculator shows its workings - view the binary tree to discover how computers interpret mathematic expressions.",
      imageUrl: "/algebro.png",
      siteUrl: "https://algebro.netlify.app/calculator",
      repoUrl: "https://github.com/Leggit/Algebro",
      icons: [faJava, faAngular, faGoogle],
    },
    {
      title: "geovis-lite",
      description:
        "A quick and dirty way of visualising geometries supplied in GeoJSON or WKT format",
      imageUrl: "/geovislite.png",
      siteUrl: "https://leggit.github.io/geovis-lite/",
      repoUrl: "https://github.com/Leggit/geovis-lite",
      icons: [faReact],
    },
    {
      title: "PID Simulator",
      description:
        "This app aims to visually demonstrate how a PID loop can keep a quadcopter level. You can have a play with the different coefficients that are used in the PID calculation to try and perfect the self levelling.",
      imageUrl: "/pidsim.png",
      siteUrl: "https://leggit.github.io/pid-simulator/",
      repoUrl: "https://github.com/Leggit/pid-simulator",
      icons: [faHtml5, faJs, faCss3],
    },
    {
      title: "Naughts and Crosses (with an AI)",
      description:
        "The classic game, but you can make the board bigger, play with timers and play against an AI powered by a minmax alpha-beta pruning algorithm.",
      imageUrl: "/xo.png",
      siteUrl: "https://leggit.github.io/naughtsandcrosses/",
      repoUrl: "https://github.com/Leggit/naughtsandcrosses",
      icons: [faHtml5, faJs, faCss3],
    },
    {
      title: "Timex - time booking system",
      description:
        "A frontend for a time entry system that a business could use to record time spent by their employees on differnt projects. It was originally plugged into a Supabase backend but this example is a backenless demo",
      imageUrl: "/timex.png",
      siteUrl: "https://timex-app.netlify.app",
      repoUrl: "https://github.com/Leggit/timex-public",
      icons: [faReact],
    },
  ];

  return (
    <div className="px-0 md:px-2 lg:px-4 max-w-[1400px] xl:m-auto">
      <div className="px-3 my-8">
        <h1 className="text-7xl mb-2 font-bold">Hi, I'm Ollie.</h1>
        <p className="max-w-[500px] md:max-w-[700px] px-1 text-lg mb-2">
          I'm an enthusiastic results driven developer who loves learning about
          new things and using technology to solve problems. Here's a few of the
          projects I've been working on recently (mostly) for fun.
        </p>
        <p className="px-1 text-sm mb-4">
          To find out more about what I do for work checkout my&nbsp;
          <Button variant="link" className="m-0 p-0">
            <Link
              className="font-semibold"
              href="https://www.linkedin.com/in/oliver-legg-33191b276/"
              target="_blank"
            >
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </Button>
        </p>
        <hr className="max-w-[700px]" />
      </div>
      <div className="flex flex-row flex-wrap ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 flex p-2"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
