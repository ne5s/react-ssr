const express = require("express");
const app = express();
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const path = require("path");
const fs = require("fs");
const App = require("./client/App").default;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const template = `
  <html>
  <head>
  <title>SSR React App</title>
  </head>
    <body>

    <div id="root">${app}</div>
    <script src="bundle.js"></script>
    </body>
  </html>
  `;

  res.send(template);
});

app.listen(4000, () => {
  console.log("포트 4000에서 서버 작동.");
});
