"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { analyticsIsOptedOut, setAnalyticsOptOut } from "@/lib/analytics";

function AnalyticsInfo() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const [doNotTrack, setDoNotTrack] = useState(true);

  useEffect(() => {
    setDoNotTrack(
      analyticsIsOptedOut() || (!!navigator?.doNotTrack && !isDevelopment)
    );
  }, []);

  return !doNotTrack ? (
    <div className="mt-5  text-muted-foreground">
      This site collects anonymous analytics data - such as how many times this
      page has been viewed. It <b>never</b> collects personal data.
      <p>
        You can still{" "}
        <Button
          variant="link"
          size="sm"
          className="p-0 text-white underline font-semibold"
          onClick={setAnalyticsOptOut}
        >
          opt out
        </Button>{" "}
        of any data being stored if you want.
      </p>
    </div>
  ) : (
    <div className="mt-5 text-muted-foreground">
      <p>
        No analytics data is being collected from your browser by this website.
      </p>
      <p>
        Either because you have opted out here or because you browser has asked
        this website not to track anything.
      </p>
    </div>
  );
}

export default AnalyticsInfo;
