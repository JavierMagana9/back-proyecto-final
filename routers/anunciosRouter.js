const express = require('express')
const router = express.Router()
const {verAnuncios,postCrearAnuncio, eliminarAnuncio, verMisAnuncios,editarAnuncio}=require('../controllers/AnunciosController')

router.get('/ver-anuncios',verAnuncios)

router.post('/crear-anuncio',postCrearAnuncio)

 router.put('/editar-anuncio/:id',editarAnuncio)

 router.delete('/eliminar-anuncio/:id',eliminarAnuncio)

 router.get('/ver-mis-anuncios/:id',verMisAnuncios)


module.exports = router