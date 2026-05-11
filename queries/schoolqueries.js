const pool = require("../services/dbconnect");

async function createSchool({
    name,
    address,
    latitude,
    longitude
}) {
    const sql = `INSERT INTO SCHOOL (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
    const values = [name, address, longitude, latitude]

    const [result] = await pool.execute(sql, values);
 
    return result;
}

async function getAllSchools(){
    const sql = `SELECT * FROM SCHOOL`;
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    createSchool,
    getAllSchools
}