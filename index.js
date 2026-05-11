const express = require("express")
const cors = require('cors')
require("dotenv").config()

const app = express()
const router = require("./router/routes")

app.use(express.json())
app.use(cors())
app.use('/api' , router)

app.listen(8001, ()=> {
    console.log("SERVER STARTED AT PORT 8001")
})