const express = require('express')
const router = express.Router()
const{postCrearReserva,getReservas,getEventos,getReserva,editarReserva,eliminarReserva,getMisReservas}=require('../controllers/calendarController')
const{verSalas}=require('../controllers/salasController')


router.get('/ver-reservas',getReservas)

router.get('/ver-reserva/:id',getReserva)

router.get('/ver-eventos',getEventos)

router.post('/crear-reserva',postCrearReserva)

router.put('/editar-reserva/:id',editarReserva)

router.delete('/eliminar-reserva/:id',eliminarReserva)

router.get('/ver-misreservas/:id',getMisReservas)

router.get('/ver-salas',verSalas)

module.exports = router