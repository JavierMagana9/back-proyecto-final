const {crearReserva, getTodasReservas}=require('../models/modelReservas')


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


//crear una reserva
const postCrearReserva = async (req, res) => {
    
    try {
// console.log(req.body)

        respuesta = await crearReserva(req.body)

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

module.exports={
    postCrearReserva,
    getReservas
}