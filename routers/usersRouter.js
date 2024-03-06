const express = require('express')
const router = express.Router()
const {getUsuarios,postCrearUsuario,getId}= require('../controllers/userController')

router.get('/ver-usuarios',getUsuarios)

router.get('/:id',getId)

router.post('/crear-usuario',postCrearUsuario)

// router.put('')

// router.delete('')

module.exports = router