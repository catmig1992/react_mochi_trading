import React from "react";

const Default = (html) => {
  return (
    <html>
      <head>
        <title>Title</title>
        {/* <title>{html.title || "Default"}</title> */}
        <link rel="stylesheet" href="App.css" />
      </head>
      <body>{html.children}</body>
    </html>
  );
};

export default Default;
