require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(errorHandler)


app.listen(8000, () => {
    console.log(`listening on port ${PORT}`);
})