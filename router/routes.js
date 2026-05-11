const {Router} = require("express")
const router = Router()

const {addSchool, listAllSchools} = require("../controller/controller")

router.post('/addSchool', addSchool)
router.get('/allSchools', listAllSchools)

module.exports = router
