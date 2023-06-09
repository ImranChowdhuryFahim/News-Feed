"use strict";
import express from "express";
import cors from "cors";
const app = express();
const port = 8080;

app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.listen(port, () => {
  console.log(`server started ${port}`);
});
