import express from "express";
// import { PrismaClient } from "@prisma/client";

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.json('server is running!');
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});