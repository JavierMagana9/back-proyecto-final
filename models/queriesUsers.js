const queriesAllUser = {
    querieSelectAllUser: 'SELECT * FROM usuarios',
    querieCrearUsuario: `INSERT INTO usuarios(id_usuario, nickname, email, rol, estado)
    VALUES ($1, $2, $3, $4, $5)`,
    querieSelectId: `SELECT * FROM usuarios WHERE id_usuario = $1`,
    querieUpdateUser: `UPDATE usuarios
                       SET nickname = $1,
                           email = $2,
                           rol= $3,
                           estado= $4
                      WHERE id_usuario=$5`,
    querieUpdateUserRol: `UPDATE usuarios
                 SET rol = $1, 
                WHERE id_usuario=$3;`,
    querieDeleteId: `DELETE FROM usuarios
    WHERE id_usuario=$1`

}
module.exports = queriesAllUser