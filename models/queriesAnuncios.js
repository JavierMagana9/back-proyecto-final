const queriesAll = {
    querieSelectAllAnuncios: 'SELECT * FROM anuncios',
    querieCrearAnuncio: `INSERT INTO anuncios(id_anuncio, id_usuario, titulo, descripcion, precio, contacto)
                      VALUES ($1, $2, $3, $4, $5, $6)`,
   querieSelectMisAnuncio: `SELECT * FROM anuncios WHERE id_usuario = $1`,
   querieUpdateAnuncio: `UPDATE anuncios
                       SET titulo = $1,
                       descripcion = $2,
                       precio= $3,
                       contacto= $4
                       WHERE id_usuario=$5`,
   querieDeleteAnuncio: `DELETE FROM anuncios
    WHERE id_anuncio=$1`,
   
}
module.exports = queriesAll