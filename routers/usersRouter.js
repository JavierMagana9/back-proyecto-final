const express = require('express')
const router = express.Router()
const {getUsuarios,postCrearUsuario}= require('../controllers/userController')

router.get('/ver-usuarios',getUsuarios)

// router.get('/ver-usuario')

router.post('/crear-usuario',postCrearUsuario)

// router.put('')

// router.delete('')

module.exports = router