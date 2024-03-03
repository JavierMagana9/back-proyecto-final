const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(cors())


app.use('/api/v1',require('./routers/paymentRouters'))
app.use('/api/v1/calendar',require('./routers/calendarRouter'))
// app.use('/api-calendar/v1', require('./routers/calendarRouter'))
//app.use('/api/v1', require(''))
//app.use('/api/v1', require(''))



app.listen(port, ()=>{
    console.log(`Puerto ${port} a la escucha`)
})