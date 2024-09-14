"use client";

import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    initializeFaro({
      url: "https://faro-collector-prod-eu-west-2.grafana.net/collect/5f121970176be6afc12a94027709e172",
      app: {
        name: "Leggit [dev]",
        version: "1.0.0",
        environment: "production",
      },

      instrumentations: [
        // Mandatory, omits default instrumentations otherwise.
        ...getWebInstrumentations(),

        // Tracing package to get end-to-end visibility for HTTP requests.
        new TracingInstrumentation(),
      ],
    });
  }, []);

  return <></>;
}
