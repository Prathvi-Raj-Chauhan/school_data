const {Router} = require("express")
const router = Router()

const {addSchool, listAllSchools} = require("../controller/controller")
const {validateSchool} = require("../middleware/validateSchool")
router.post('/addSchool', validateSchool,addSchool)
router.get('/allSchools', listAllSchools)

module.exports = router
