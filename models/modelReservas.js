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
    const { id_reserva, id_usuario, date_start, date_end, ref_pago, sala } = body
    //console.log("body en el modelo",body)
    try {
        client = await pool.connect()
        result = client.query(queriesAll.querieCrearReserva, [id_reserva, id_usuario, date_start, date_end, ref_pago, sala])

    } catch (error) {
        console.log(error)
        throw new Error('error')
    } finally {
        client.release()
    }
    return result
}
const getEventReservas = async () => {
    
    let cliente,
       
        resultado
    try {
        
        cliente = await pool.connect();
  
        resultado = await cliente.query(queriesAll.querieSelectEvent);
    
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
       
        cliente.release()
    }

    return resultado.rows
}

const getSelectReserva = async (id_reserva) => {

    console.log("en queries", id_reserva)

    let cliente,
        resultado
    try {
        cliente = await pool.connect();
        resultado = await cliente.query(queriesAll.querieSelectReserva, [id_reserva]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        cliente.release()
    }
    return resultado.rows
}

const putReserva = async (body, id_reserva) => {

    let client,
        result
    const { date_start, date_end, ref_pago, sala } = body

    try {
        client = await pool.connect();
        result = await client.query(queriesAll.querieUpdateReserva, [date_start, date_end, ref_pago, sala, id_reserva]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        client.release()
    }

    return result
}

const deleteReserva = async (id_reserva) => {
    console.log("deleteUsuario", id_reserva)
    let client, result
    try {
        client = await pool.connect();
        result = await client.query(queriesAll.querieDeleteReserva, [id_reserva]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        client.release()
    }
    return result
}

const getMyReservas = async (id_usuario) => {

    let cliente,
        resultado
    try {

        cliente = await pool.connect();

        resultado = await cliente.query(queriesAll.querieSelectmyEvent, [id_usuario]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {

        cliente.release()
    }
    return resultado.rows
}






module.exports={
    crearReserva,
    getTodasReservas,
    getEventReservas,
    getSelectReserva,
    putReserva,
    deleteReserva,
    getMyReservas
}