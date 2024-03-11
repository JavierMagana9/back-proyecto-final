const pool =require('../configs/configPg')
const queriesAllSalas = require('./queriesSalas')

const getTodasSalas = async () => {
    
    let cliente,
        
        resultado
    try {
      
        cliente = await pool.connect();
       
        resultado = await cliente.query(queriesAllSalas.querieSelectSalas);
 
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        
        cliente.release()
    }
    return resultado.rows
}

module.exports={
    getTodasSalas
}

