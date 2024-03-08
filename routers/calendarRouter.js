const express = require('express')
const router = express.Router()
const{postCrearReserva,getReservas,getEventos,getReserva,editarReserva,eliminarReserva}=require('../controllers/calendarController')



router.get('/ver-reservas',getReservas)

router.get('/ver-reserva/:id',getReserva)

router.get('/ver-eventos',getEventos)

router.post('/crear-reserva',postCrearReserva)

router.put('/editar-reserva/:id',editarReserva)

router.delete('/eliminar-reserva/:id',eliminarReserva)

module.exports = router