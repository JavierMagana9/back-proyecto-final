const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 6000

app.use(cors())



// app.use('/api-calendar/v1', require('./routers/calendarRouter'))
//app.use('/api-/v1', require(''))
//app.use('/api-/v1', require(''))






app.listen(port, ()=>{
    console.log(`Puerto ${port} a la escucha`)
})