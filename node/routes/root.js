import { database } from "../express.js";
import { faker } from "../utils/faker.js";
import express from "express";

export const rootRouter = express.Router();

const styles = `
<style> 
li { 
    margin-top: 0.6rem; 
    margin-bottom: 0.3rem; 
    margin-left: 1rem; 
    font-weight: normal;
   }

   li:nth-child(1) {
    margin-top: 1.5rem; 

   }

   ul {
    font-weight: bold;
    font-size: 1.2rem;
   }

</style>
`;

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

        let data =
          `<div><h1>Full Cycle Rocks!</h1> <ul>Lista de nomes cadastrada no banco de dados${results.map(
            (p, i) => `<li key={${i}}>${p.name}</li>`
          )}</ul></div>` + styles;

        data = data.replaceAll(",", "");

        res.send(data);

        if (error) {
          throw error;
        }
      }
    );
  });
});
