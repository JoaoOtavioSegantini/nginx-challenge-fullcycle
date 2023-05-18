import { rootRouter } from "./routes/root.js";
import express from "express";
import mysql from "mysql";

export const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

export const database = mysql.createPool(config);

app.use("/", rootRouter);

app.use(express.static('public'))
