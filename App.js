import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id:"heading1",
        key: "h"
    },
    "H1 from parcel"
);
const heading1 = React.createElement(
    "h1",
    {
      id: "title",
      key: "h1"
    },
    "heading1"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);