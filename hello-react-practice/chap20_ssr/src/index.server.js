import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";


// Look up the file paths in "asset-manifest.json".
const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key))    // Find the key that ends with "chunk.js"
  .map(key => `<script src="${manifest.files[key]}"></script>`)   // Convert to script tag.
  .join('');   // join

function createPage(root, tags) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files['main.css']}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      <script src="${manifest.files['runtime-main.js']}"></script>
      ${chunks}
      <script src="${manifest.files['main.js']}"></script>
    </body>
    </html>
      `;
}

const app = express();

const serverRender = (req, res, next) => {    // This function provides SSR without 404 floating in situations where 404 should appear.
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);  // Rendering
  res.send(createPage(root));     // Respond to the results.
};

const serve = express.static(path.resolve('./build'), {
  index: false    // Disables index.html in "/" path 
})

app.user(serve);       // Order is important. Must be located before serverRender
app.use(serverRender);
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
});


// const html = ReactDOMServer.renderToString(
//   <div>Hello Server Side Rendering!</div>
// );

// console.log(html);
