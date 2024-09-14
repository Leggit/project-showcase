"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="mt-4 py-2  flex justify-between">
      <div className="space-x-3">
        <Link
          className={
            isActive("/")
              ? "font-semibold nav-link nav-link-active"
              : "nav-link"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            isActive("/blog")
              ? "font-semibold nav-link nav-link-active"
              : "nav-link"
          }
          href="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="grid grid-flow-col gap-2">
        <Link
          href="https://www.linkedin.com/in/oliver-legg-33191b276/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>
        <Link href="https://github.com/Leggit" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
      </div>
    </nav>
  );
}
