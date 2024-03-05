const queriesAllUser = {
    querieSelectAllUser: 'SELECT * FROM usuarios',
    querieCrearUsuario: `INSERT INTO usuarios(id_usuario, nickname, email, rol)
    VALUES ($1, $2, $3, $4)`

}
module.exports = queriesAllUser