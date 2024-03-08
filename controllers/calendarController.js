const {crearReserva, getTodasReservas,getEventReservas,getSelectReserva,putReserva,deleteReserva}=require('../models/modelReservas')


//buscar todas las reservas
const getReservas = async (req, res) => {

    try {
        const data = await getTodasReservas()
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
//buscar todas las reservas
const getEventos = async (req, res) => {

    try {
        const data = await getEventReservas()
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

//crear una reserva
const postCrearReserva = async (req, res) => {
    
    try {
// console.log(req.body)

        respuesta = await crearReserva(req.body)
console.log(req.body)
        return res.status(201).json({
            error: false,
            msg: ['Se creo la reserva']
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            msg: ['Contacte con el administrador']
        })
    }
}

const getReserva = async (req, res) => {

    try {
        const id = req.params.id
        console.log("esto es el id en reservas",id)
        const data = await getSelectReserva(id)
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

const editarReserva = async(req,res)=>{
    try {
        const id_reserva = req.params.id
        const { date_start, date_end, ref_pago, sala } = req.body

        console.log("en actualizar",date_start, date_end, ref_pago, sala)
        console.log("id en actualizar usuario",id_reserva)


        await putReserva(req.body,id_reserva)
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

const eliminarReserva = async (req, res) => {
    try {
        const id_reserva = req.params.id
       console.log("En DELETE", id_reserva)
        const respuesta = await deleteReserva(id_reserva)
  
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



module.exports={
    postCrearReserva,
    getReservas,
    getEventos,
    getReserva,
    editarReserva,
    eliminarReserva
}