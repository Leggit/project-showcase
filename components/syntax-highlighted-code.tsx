"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import json from "highlight.js/lib/languages/json";

import "highlight.js/styles/github.css";

export function SyntaxHighlightedCode(props: any) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("java", java);
    hljs.registerLanguage("json", json);
    hljs.highlightAll();
  }, []);

  return <></>;
}

export function SyntaxHighlightedCode2(props: any) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("java", java);
    hljs.registerLanguage("json", json);
    hljs.highlightAll();
  }, []);

  return <></>;
}
