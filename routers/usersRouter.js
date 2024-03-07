const express = require('express')
const router = express.Router()
const {getUsuarios,postCrearUsuario,getId,eliminarUsuario,actualizarUsuario}= require('../controllers/userController')

router.get('/ver-usuarios',getUsuarios)

router.get('/:id',getId)

router.post('/crear-usuario',postCrearUsuario)

router.put('/actualizar-usuario/:id',actualizarUsuario) // EL USUARIO SOLO PODRA ACTUALIZAR SU NICKNAME Y SU EMAIL

// router.put('/actualizar-usuario-rol/:id',) //PARA PODER ACTUALIZAR EL ROL DEL USUARIO CUANDO REALICE EL PAGO

router.delete('/eliminar-usuario/:id',eliminarUsuario)

module.exports = router