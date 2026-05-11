const pool = require("../services/dbconnect");

async function createSchool({
    name,
    address,
    latitude,
    longitude
}) {
    const sql = `INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
    const values = [name, address, longitude, latitude]

    const [result] = await pool.execute(sql, values);
 
    return result;
}

async function getAllSchools(){
    const sql = `SELECT * FROM school`;
    const [rows] = await pool.query(sql);
    return rows;
}

async function listAllSchool(
    latitude,
    longitude
) {

    const sql = `
        SELECT
            id,
            name,
            address,
            latitude,
            longitude,

            (
                6371 * ACOS(
                    COS(RADIANS(?))
                    * COS(RADIANS(latitude))
                    * COS(RADIANS(longitude) - RADIANS(?))
                    + SIN(RADIANS(?))
                    * SIN(RADIANS(latitude))
                )
            ) AS distance

        FROM school

        ORDER BY distance ASC
    `;

    const values = [
        latitude,
        longitude,
        latitude
    ];

    const [rows] = await pool.execute(sql, values);

    return rows;
}

module.exports = {
    createSchool,
    getAllSchools,
    listAllSchool
}