const {getTodasSalas}=require('../models/modelSalas')


//buscar todas las reservas
const verSalas = async (req, res) => {

    try {
        const data = await getTodasSalas()
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

module.exports={
    verSalas
}