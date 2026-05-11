const { validateSchool } = require("../services/validateSchool");
const { createSchool, getAllSchools } = require("../queries/schoolqueries");

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
    validateSchool(data);

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
        error: "Internal server error"
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

module.exports = {
    addSchool,
    listAllSchools
};
