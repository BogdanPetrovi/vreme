import mysql from 'mysql2';
import 'dotenv/config'

const db = mysql.createPool({
  host: process.env.HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
}).promise();

export default db;
