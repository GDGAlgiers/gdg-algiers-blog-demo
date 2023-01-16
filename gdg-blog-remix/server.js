import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/dev/server-build";

function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;

  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }

  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];

  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }

  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken: netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader,
  };

  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });

  return loadContext;
}

export const handler = createRequestHandler({
  build,
  getLoadContext,
  mode: process.env.NODE_ENV,
});
