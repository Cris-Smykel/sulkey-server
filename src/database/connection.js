const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_USER_PASSWORD,
    port: process.env.MYSQL_POST,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

module.exports = pool;
