const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "persondb",
  password: "password",
  port: 5432,
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL pool"))
  .catch((err) => console.error("Connection error", err));

async function fetchDataWithPool() {
  try {
    const res = await pool.query("SELECT * FROM your_table");
    console.log(res.rows);
  } catch (err) {
    console.error("Error executing query", err);
  }
}
fetchDataWithPool();
