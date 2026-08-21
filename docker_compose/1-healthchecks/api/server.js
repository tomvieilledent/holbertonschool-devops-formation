const express = require("express");
const { Client } = require("pg");

const app = express();
const client = new Client({ connectionString: process.env.DATABASE_URL });

async function start() {
  console.log("Connecting to the database...");
  await client.connect();
  console.log("Connected to the database");

  app.get("/", (req, res) => {
    res.send("API is up and connected to the database");
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

start().catch((err) => {
  console.error("Failed to connect to the database", err);
  process.exit(1);
});
