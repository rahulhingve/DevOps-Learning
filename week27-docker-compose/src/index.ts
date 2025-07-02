import express from "express";
import { PrismaClient } from "../src/generated/prisma";
const app = express();

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json({
    message: "get endpoint",
    data: data,
  });
});

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(36).substring(2, 15) + "@example.com",
      password: Math.random().toString(36).substring(2, 15),
    },
  });

  res.json({
    message: "post endpoint",
  });
});

app.listen(3000, () => {
  console.log(" Server is running on http://localhost:3000");
});
