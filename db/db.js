const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Render automatically ise utha lega
  ssl: { rejectUnauthorized: false } // Live server ke liye zaroori hai
});

module.exports = pool;