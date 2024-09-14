"use client";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";

function Code({ name, children }: any) {
  const ref = useRef<any>(null);
  const [justCopied, setJustCopied] = useState(false);

  const handleCopy = () => {
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.innerText);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 1000);
    }
  };

  return (
    <div className="rounded-lg border-2 border-zinc-500 mb-4 bg-gray-50 dark:bg-slate-800">
      <div className="bg-gray-200 dark:bg-slate-900 rounded-t-lg border-b-2 border-zinc-500 flex justify-between">
        <pre className="p-3">{name}</pre>
        <div className="flex flex-col justify-center">
          <Button
            className="w-[120px] me-2"
            size="sm"
            variant="ghost"
            onClick={handleCopy}
          >
            {justCopied ? (
              <>
                Copied&nbsp;
                <FontAwesomeIcon size="xl" icon={faCheck} />
              </>
            ) : (
              <>
                Copy code&nbsp;
                <FontAwesomeIcon size="xl" icon={faCopy} />
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="p-3" ref={ref}>
        {children}
      </div>
    </div>
  );
}

export default Code;
