import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import AnalyticsInfo from "./analytics-info";

function Footer() {
  return (
    <footer className="bg-secondary min-h-[200px] flex justify-center flex-col">
      <div className="p-2 md:px-2 lg:px-4 max-w-[1400px] xl:m-auto h-full">
        <div className="flex flex-col justify-center flex-grow flex-1">
          <div className="text-center font-light text-sm">
            <div>
              {"Find out more about what I've been up to in these places:"}
            </div>
            <div className="inline-grid grid-cols-2 gap-2 mt-2">
              <Link
                href="https://www.linkedin.com/in/oliver-legg-33191b276/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <span className="sr-only">My LinkedIn</span>
              </Link>
              <Link href="https://github.com/Leggit" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <span className="sr-only">My GitHub</span>
              </Link>
            </div>
            <div className="mt-5">
              <em>
                This site was made with Next.js and Tailwind CSS - check out the
                source code{" "}
                <Link
                  className="underline"
                  href="https://github.com/Leggit/project-showcase"
                  target="_blank"
                >
                  here
                </Link>
              </em>
            </div>
            <AnalyticsInfo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
