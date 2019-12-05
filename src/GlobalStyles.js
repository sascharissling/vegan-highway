import React from "react";
import { Global, css } from "@emotion/core";
export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Roboto Slab", serif;
          background: linear-gradient(to right, #dd3e54, #6be585);
        }
      `}
    />
  );
}
