const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const app = express();

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port" + PORT);
  });
});
