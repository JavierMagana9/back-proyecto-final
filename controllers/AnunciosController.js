
const { getTodosAnuncios, crearAnuncio, deleteAnuncio,getMisAnuncios,putAnuncio } = require('../models/modelAnuncios')


const verAnuncios = async (req, res) => {

    try {
        const data = await getTodosAnuncios()
        console.log("dentro", data)

        if (!data) {
            return res.status(400).json({
                error: true,
                msg: ["no se conecto a la base de datos SQL"]
            })
        }
        return res.status(200).json({
            error: false,
            data
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: ['comuniquese con el administrador']
        })

    }
}

const postCrearAnuncio = async (req, res) => {

    try {
        // console.log(req.body)

        respuesta = await crearAnuncio(req.body)
        console.log(req.body)
        return res.status(201).json({
            error: false,
            msg: ['Se creo el anuncio'],
            data: req.body
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            msg: ['Contacte con el administrador']
        })
    }
}

const eliminarAnuncio = async (req, res) => {
    try {
        const id_anuncio = req.params.id
       console.log("En DELETE", id_anuncio)
        const respuesta = await deleteAnuncio(id_anuncio)
  
        return res.status(200).json({
            error: false,
            
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: ['comuniquese con el administrador'],
            error: true,
        })
    }

}


const verMisAnuncios=async(req,res)=>{

    try {
        const id = req.params.id
        console.log("esto es el id",id)
        const data = await getMisAnuncios(id)
        console.log("dentro", data)

        if (!data) {
            return res.status(400).json({
                error: true,
                msg: ["no se conecto a la base de datos SQL"]
            })
        }
        return res.status(200).json({
            error: false,
            data
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: ['comuniquese con el administrador']
        })

    }

}

const editarAnuncio = async(req,res)=>{
    try {
        const id_anuncio = req.params.id
        const { titulo, descripcion, precio, contacto } = req.body

        console.log("en actualizar",titulo, descripcion, precio, contacto)
        console.log("id en actualizar usuario",id_anuncio)

        await putAnuncio(req.body,id_anuncio)
        return res.status(200).json({
            error: false,
            msg: ['se actualizo el usuario satisfactoriamente'],
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: ['comuniquese con el administrador'],
            error: true,
        })
    }
}


module.exports = {
    verAnuncios,
    postCrearAnuncio,
    eliminarAnuncio,
    verMisAnuncios,
    editarAnuncio
}