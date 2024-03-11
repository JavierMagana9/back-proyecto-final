const pool =require('../configs/configPg')
const queriesAll = require('./queriesAnuncios')

const getTodosAnuncios = async () => {

    let cliente,
        
        resultado
    try {
       
        cliente = await pool.connect();
        
        resultado = await cliente.query(queriesAll.querieSelectAllAnuncios);
       
    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        
        cliente.release()
    }
    
    return resultado.rows
}

const crearAnuncio = async (body) => {
    let client, result
    const { id_anuncio, id_usuario, titulo, descripcion, precio, contacto} = body
    //console.log("body en el modelo",body)
    try {
        client = await pool.connect()
        result = client.query(queriesAll.querieCrearAnuncio, [id_anuncio, id_usuario, titulo, descripcion, precio, contacto])

    } catch (error) {
        console.log(error)
        throw new Error('error')
    } finally {
        client.release()
    }
    return result
}

const deleteAnuncio = async (id_anuncio) => {
    console.log("delete anuncio", id_anuncio)
    let client, result
    try {
        client = await pool.connect();
        result = await client.query(queriesAll.querieDeleteAnuncio, [id_anuncio]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        client.release()
    }
    return result
}


const getMisAnuncios = async (id_usuario) => {

    let cliente,
        resultado
    try {

        cliente = await pool.connect();

        resultado = await cliente.query(queriesAll.querieSelectMisAnuncio, [id_usuario]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {

        cliente.release()
    }
    return resultado.rows
}

const putAnuncio = async (body, id_anuncio) => {

    let client,
        result
    const { titulo, descripcion, precio, contacto } = body

    try {
        client = await pool.connect();
        result = await client.query(queriesAll.querieUpdateAnuncio, [titulo, descripcion, precio, contacto, id_anuncio]);

    } catch (error) {
        console.log(error)
        throw new Error('error de conexion')
    } finally {
        client.release()
    }

    return result
}

module.exports={
    getTodosAnuncios,
    crearAnuncio,
    deleteAnuncio,
    getMisAnuncios,
    putAnuncio
}