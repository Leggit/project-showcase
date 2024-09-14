"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="mt-4 py-2 space-x-3">
      <Link
        className={
          isActive("/") ? "font-semibold nav-link nav-link-active" : "nav-link"
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
    </nav>
  );
}
