import { env } from 'process';

const { Pool, Client } = require('pg');
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_ADDR,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASS,
  port: process.env.DATABASE_PORT
});

const { Pool, Client } = require('pg');
const connectionString =
  'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';
const pool = new Pool({
  connectionString
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
const client = new Client({
  connectionString
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'Austin Gray' });
};
