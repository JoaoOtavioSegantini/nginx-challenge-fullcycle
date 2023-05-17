const express = require("express");
const { Faker, en_US, pt_BR } = require("@faker-js/faker");

const faker = new Faker({
  locale: [pt_BR, en_US],
});

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

app.get("/", (req, res) => {
  const pool = mysql.createPool(config);

  pool.getConnection(function (err, connection) {
    if (err) {
      throw err;
    }

    const name = faker.person.fullName();

    const sql = `INSERT INTO people(name) values('${name}')`;
    connection.query(sql);

    connection.query(
      "SELECT name FROM people",
      function (error, results, fields) {
        connection.release();

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

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
