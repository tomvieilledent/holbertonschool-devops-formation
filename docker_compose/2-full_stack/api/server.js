const express = require("express");
const { Client } = require("pg");
const { createClient } = require("redis");

const app = express();
const db = new Client({ connectionString: process.env.DATABASE_URL });
const cache = createClient({ url: process.env.CACHE_URL });

cache.on("error", (err) => console.error("Redis error", err));

const CACHE_KEY = "greeting";
const CACHE_TTL_SECONDS = 10;

app.get("/", async (req, res) => {
  const cached = await cache.get(CACHE_KEY);
  if (cached) {
    return res.send(`${cached} (from cache)\n`);
  }

  const result = await db.query("SELECT NOW() AS now");
  const value = `Hello, database time is ${result.rows[0].now}`;
  await cache.setEx(CACHE_KEY, CACHE_TTL_SECONDS, value);

  res.send(`${value} (from database)\n`);
});

async function start() {
  await db.connect();
  await cache.connect();
  app.listen(3000, () => {
    console.log("API listening on port 3000");
  });
}

start();
