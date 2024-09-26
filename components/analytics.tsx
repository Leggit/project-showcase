"use client";
import { analyticsIsOptedOut } from "@/lib/analytics";
import Script from "next/script";
import React, { useEffect, useState } from "react";

function Analytics() {
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";
  const hostName = `https://project-showcase-hazel.vercel.app${
    isDevelopment ? ".dev" : ""
  }`;
  const scriptSrc = `https://scripts.simpleanalyticscdn.com/latest${
    isDevelopment ? ".dev" : ""
  }.js`;

  useEffect(() => setAllowAnalytics(!analyticsIsOptedOut()), []);

  return (
    allowAnalytics && (
      <Script
        async
        defer
        data-hostname={hostName}
        data-collect-dnt={isDevelopment}
        src={scriptSrc}
      />
    )
  );
}

export default Analytics;
