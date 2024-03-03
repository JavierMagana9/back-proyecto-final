const express = require('express')
const router = express.Router()
const{postCrearReserva,getReservas}=require('../controllers/calendarController')



router.get('/verReservas',getReservas)

router.post('/crearReserva',postCrearReserva)

router.put('')

router.delete('')

module.exports = router