"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { analyticsIsOptedOut, setOptOutCookie } from "@/lib/analytics";

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
      This site collects basic analytics data - such as how many times this page
      has been viewed. It <b>never</b> collects personal data (such as your IP
      address).
      <p>
        You can still{" "}
        <Button
          variant="link"
          size="sm"
          className="p-0 text-white"
          onClick={setOptOutCookie}
        >
          opt out
        </Button>{" "}
        of any data being stored if you want.
      </p>
    </div>
  ) : (
    <div className="mt-5 text-muted-foreground">
      No analytics data is being collected from your browser on this website.
      Either because you have opted out here or because you browser has asked
      this website not to track anything.
    </div>
  );
}

export default AnalyticsInfo;
