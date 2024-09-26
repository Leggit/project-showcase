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
