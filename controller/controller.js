const { createSchool, getAllSchools, listAllSchool} = require("../queries/schoolqueries");

async function addSchool(req, res) {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (
      name == null ||
      address == null ||
      latitude == null ||
      longitude == null
    ) {
      return res.status(400).json({
        error: "missing fields in the request",
      });
    }
    const data = { name, address, latitude, longitude };

    const result = await createSchool(data);
    await console.debug(result);
    return res.status(201).json({
      message: "School added successfully",
    });
  } catch (e) {
    if (e.statusCode) {
      return res.status(e.statusCode).json({
        error: e.message,
      });
    }
    return res.status(500).json({
        error: "Internal server error",
        message : e.message
    });
  }
}

async function listAllSchools(req, res) {
  try {
      const rows = await getAllSchools()
      return res.status(200).json({
          Schools : rows
      })
  } catch (e) {
      return res.status(500).json({
        error: "Internal server error",
        message : e.message
      });
  }
}
async function listSchools(req, res){
  try {

    let latitude = req.query.latitude
    let longitude = req.query.longitude

    // validating the query
    if(!latitude || !longitude){
      return res.status(400).json({
        error : "Missing latitude or longitude"
      })
    }
    latitude = Number(latitude)
    longitude = Number(longitude)
    if(Number.isNaN(latitude)){
      return res.status(400).json({
        error : "Latitude must be a number"
      })
    }
    if(Number.isNaN(longitude)){
      return res.status(400).json({
        error : "Longitude must be a number"
      })
    }

    const rows = await listAllSchool(latitude, longitude)
    return res.status(200).json({
        schools: rows
    });

  } catch (e) {
    return res.status(500).json({
        error: "Internal server error",
        message : e.message
      });
  }
}
module.exports = {
    addSchool,
    listAllSchools,
    listSchools
};
