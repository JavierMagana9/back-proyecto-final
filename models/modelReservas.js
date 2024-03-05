const pool =require('../configs/configPg')
const queriesAll = require('./queriesReservas')


const getTodasReservas = async () => {
    //Necesito 2 variables que pide Poll
    //Cliente donde vamos a conectar con la base de datos
    let cliente,
        //resultado obtenemos los datos de la base de datos
        resultado
    try {
        //establecemos la conexion con la base de datos atraves de pool.connect ( previamente instamaciamos el objeto pool para poder asignarle los datos que require para la conexion) 
        cliente = await pool.connect();
        //RESULTADO: En cliente.query nosotros estamos recogiendo la data que nosotros especificamos
        resultado = await cliente.query(queriesAll.querieSelectAll);
        //aca podemos observar como recogemos los datos que se encuentran alojados en ROWS
        //const datos = resultado.rows;
        // console.log("Datos", datos)
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        //lo que se encarga es que en cada consulta mate la base de datos
        cliente.release()
    }
    //estoy enviado todos los datos que estan alojados en el Array rows
    return resultado.rows
}


const crearReserva = async (body) => {
    let client, result
    const { id_reserva, id_usuario, date_start, date_end, id_pago } = body
    //console.log("body en el modelo",body)
    try {
        client = await pool.connect()
        result = client.query(queriesAll.querieCrearReserva, [id_reserva, id_usuario, date_start, date_end, id_pago])

    } catch (error) {
        console.log(error)
        throw new Error('error')
    } finally {
        client.release()
    }
    return result
}
const getEventReservas = async () => {
    //Necesito 2 variables que pide Poll
    //Cliente donde vamos a conectar con la base de datos
    let cliente,
        //resultado obtenemos los datos de la base de datos
        resultado
    try {
        //establecemos la conexion con la base de datos atraves de pool.connect ( previamente instamaciamos el objeto pool para poder asignarle los datos que require para la conexion) 
        cliente = await pool.connect();
        //RESULTADO: En cliente.query nosotros estamos recogiendo la data que nosotros especificamos
        resultado = await cliente.query(queriesAll.querieSelectEvent);
        //aca podemos observar como recogemos los datos que se encuentran alojados en ROWS
        //const datos = resultado.rows;
        // console.log("Datos", datos)
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        //lo que se encarga es que en cada consulta mate la base de datos
        cliente.release()
    }
    //estoy enviado todos los datos que estan alojados en el Array rows
    return resultado.rows
}

module.exports={
    crearReserva,
    getTodasReservas,
    getEventReservas
}