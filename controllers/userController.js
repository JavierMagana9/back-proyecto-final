const { getTodosUsuarios, crearUsuario, getSelectId, deleteUsuario,putUsuario} = require('../models/modelUsers')


// VER TODOS LOS USUARIOS
const getUsuarios = async (req, res) => {

    const page=req.query
    console.log("en ver usuario",page)
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
            totalResult:data.length,
            perPages:20,
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

const eliminarUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id
       console.log("En DELETE", id_usuario)
        const respuesta = await deleteUsuario(id_usuario)
  
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

const actualizarUsuario = async(req,res)=>{
    try {
        const id_usuario = req.params.id
        const { nickname, email, rol, estado } = req.body

        console.log("en actualizar",nickname, email, rol, estado)
        console.log("id en actualizar usuario",id_usuario)


        await putUsuario(req.body,id_usuario)
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
    getUsuarios,
    postCrearUsuario,
    getId,
    eliminarUsuario,
    actualizarUsuario
}