const express = require("express");

const app = express();
const greeting = process.env.GREETING || "Hello world";

app.get("/", (req, res) => {
  res.send(greeting);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});