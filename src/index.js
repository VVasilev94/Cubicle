const express = require('express')



const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const home = require('./controllers/home')

const app = express()
const PORT = 5000;

expressConfig(app)
handlebarsConfig(app)

app.use(home)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))