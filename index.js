const express = require("express")
const cors = require('cors')
require("dotenv").config()
const PORT = process.env.PORT || 3000
const app = express()
const router = require("./router/routes")

app.use(express.json())
app.use(cors())
app.use('/api' , router)

app.listen(PORT, ()=> {
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})