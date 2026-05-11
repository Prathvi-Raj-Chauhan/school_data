require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function testConnection() {
    try{
        const connection = await pool.getConnection()

        console.log('DB connected')

        const [rows] = await connection.query('SELECT 1 AS test')

        console.log(rows)

        connection.release()
    }
    catch(e){
        console.error('DB Connectoin failed : ', e.message)
    }
}

testConnection()

module.exports = pool;