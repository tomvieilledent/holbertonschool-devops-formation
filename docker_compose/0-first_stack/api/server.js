const express = require("express");
const { createClient } = require("redis");

const app = express();
const client = createClient({ url: process.env.REDIS_URL });

client.on("error", (err) => console.error("Redis error", err));

app.get("/", async (req, res) => {
  const count = await client.incr("visits");
  res.send(`Hello, you are visitor #${count}\n`);
});

async function start() {
  await client.connect();
  app.listen(3000, () => {
    console.log("API listening on port 3000");
  });
}

start();
