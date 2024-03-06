const queriesAllUser = {
    querieSelectAllUser: 'SELECT * FROM usuarios',
    querieCrearUsuario: `INSERT INTO usuarios(id_usuario, nickname, email, rol)
    VALUES ($1, $2, $3, $4)`,
    querieSelectId:`SELECT id_usuario, rol FROM usuarios WHERE id_usuario = $1`

}
module.exports = queriesAllUser