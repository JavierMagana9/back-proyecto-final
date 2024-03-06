const { getTodosUsuarios, crearUsuario, getSelectId } = require('../models/modelUsers')


// VER TODOS LOS USUARIOS
const getUsuarios = async (req, res) => {

    try {
        const data = await getTodosUsuarios()
        // console.log("dentro", data)

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

//crear una reserva
const postCrearUsuario = async (req, res) => {

    try {
        // console.log(req.body)

        respuesta = await crearUsuario(req.body)
        console.log(req.body)
        return res.status(201).json({
            error: false,
            msg: ['Se creo el usuario']
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            msg: ['Contacte con el administrador']
        })
    }
}

const getId = async (req, res) => {

    try {
        const id = req.params.id
        console.log("esto es el id",id)
        const data = await getSelectId(id)
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





module.exports = {
    getUsuarios,
    postCrearUsuario,
    getId
}