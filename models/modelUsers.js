const pool =require('../configs/configPg')
const queriesAllUser = require('./queriesUsers')


const getTodosUsuarios = async () => {
    
    let cliente,
       
        resultado
    try {
        cliente = await pool.connect();
        resultado = await cliente.query(queriesAllUser.querieSelectAllUser);
      console.log(queriesAllUser)
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        
        cliente.release()
    }

    return resultado.rows
}

const crearUsuario = async (body) => {
    let client, result
    const { id_usuario, nickname, email, rol } = body
    //console.log("body en el modelo",body)
    try {
        client = await pool.connect()
        result = client.query(queriesAllUser.querieCrearUsuario, [id_usuario, nickname, email, rol])

    } catch (error) {
        console.log(error)
        throw new Error('error')
    } finally {
        client.release()
    }
    return result
}



module.exports={
    getTodosUsuarios,
    crearUsuario
}