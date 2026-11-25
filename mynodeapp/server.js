const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const WELCOME_MSG = process.env.WELCOME_MSG || "Hello from Node.js v2.0!";

app.get("/", (req, res) => {
  res.send(`<h1>${WELCOME_MSG}</h1><p>Running on port: ${PORT}</p>`);
});

app.get("/about", (req, res) => {
  res.send("<h2>This is a simple Express app running in Docker</h2>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
