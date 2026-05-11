const {Router} = require("express")
const router = Router()

const {addSchool, listAllSchools, listSchools} = require("../controller/controller")
const {validateSchool, validateCoord} = require("../middleware/validateSchool")
router.post('/addSchool', validateSchool,addSchool)
router.get('/allSchools', listAllSchools)
router.get('/listSchools',validateCoord, listSchools)

module.exports = router
