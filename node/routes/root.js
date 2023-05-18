import { database } from "../express.js";
import { rootStyles } from "../styles/root.js";
import { addRootPage } from "../templates/root.js";
import { faker } from "../utils/faker.js";
import express from "express";

export const rootRouter = express.Router();

rootRouter.get("/", async (_req, res) => {
  database.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }

    const name = faker.person.fullName();

    const sql = `INSERT INTO people(name) values('${name}')`;

    connection.query(sql);

    connection.query(
      "SELECT name FROM people",
      function (error, results, _fields) {
        connection.release();

        const data = addRootPage({ results }, rootStyles);

        res.send(data);

        if (error) {
          throw error;
        }
      }
    );
  });
});
