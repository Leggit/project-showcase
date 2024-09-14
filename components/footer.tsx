import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-secondary min-h-[200px] flex justify-center flex-col">
      <div className="p-2 md:px-2 lg:px-4 max-w-[1400px] xl:m-auto h-full">
        <div className="flex flex-col justify-center flex-grow flex-1">
          <div className="text-center font-light text-sm">
            <div>Find out more about what I've been up to in these places:</div>
            <div className="inline-grid grid-cols-2 gap-2 mt-2">
              <Link
                href="https://www.linkedin.com/in/oliver-legg-33191b276/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </Link>
              <Link href="https://github.com/Leggit" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" />
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
