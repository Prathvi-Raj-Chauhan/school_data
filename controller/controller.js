const { createSchool, getAllSchools, listAllSchool} = require("../queries/schoolqueries");

async function addSchool(req, res) {
  try {
    const { name, address, latitude, longitude } = req.body;
    
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

    const latitude = req.query.latitude
    const longitude = req.query.longitude

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
