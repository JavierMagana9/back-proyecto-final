const express = require('express')
const router = express.Router()
const{postCrearReserva,getReservas,getEventos}=require('../controllers/calendarController')



router.get('/ver-reservas',getReservas)

router.get('/ver-eventos',getEventos)

router.post('/crear-reserva',postCrearReserva)

router.put('')

router.delete('')

module.exports = router